// IndexedDB utility for TNT data caching

export interface CachedTNTData {
  id: string; // chainId-address
  chainId: string;
  address: string;
  tokenName: string;
  tokenSymbol: string;
  imageURL: string;
  timestamp: number;
  type: "owned" | "received";
  userAddress: string;
}

export interface CacheMetadata {
  userAddress: string;
  type: "owned" | "received";
  totalCount: number;
  lastUpdated: number;
}

export interface PaginatedResult {
  data: Array<{
    chainId: string;
    address: `0x${string}`;
    tokenName: string;
    tokenSymbol: string;
    imageURL: string;
  }>;
  totalPages: number;
  totalCount: number;
  currentPage: number;
}

class TNTIndexedDB {
  private dbName = "TNTCache";
  private version = 1;
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Store for TNT data
        if (!db.objectStoreNames.contains("tnts")) {
          const tntStore = db.createObjectStore("tnts", { keyPath: "id" });
          tntStore.createIndex("userAddress", "userAddress");
          tntStore.createIndex("type", "type");
          tntStore.createIndex("timestamp", "timestamp");
        }

        // Store for cache metadata
        if (!db.objectStoreNames.contains("metadata")) {
          db.createObjectStore("metadata", {
            keyPath: ["userAddress", "type"],
          });
        }
      };
    });
  }

  async cacheTNTs(
    tnts: Array<{
      chainId: string;
      address: `0x${string}`;
      tokenName: string;
      tokenSymbol: string;
      imageURL: string;
    }>,
    userAddress: string,
    type: "owned" | "received"
  ): Promise<void> {
    if (!this.db) await this.init();

    const transaction = this.db!.transaction(["tnts", "metadata"], "readwrite");
    const tntStore = transaction.objectStore("tnts");
    const metadataStore = transaction.objectStore("metadata");

    // Clear existing data for this user and type
    const index = tntStore.index("userAddress");
    const existingData = await new Promise<CachedTNTData[]>(
      (resolve, reject) => {
        const request = index.getAll(userAddress);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      }
    );

    // Delete existing entries of the same type
    for (const item of existingData) {
      if (item.type === type) {
        await new Promise<void>((resolve, reject) => {
          const deleteRequest = tntStore.delete(item.id);
          deleteRequest.onsuccess = () => resolve();
          deleteRequest.onerror = () => reject(deleteRequest.error);
        });
      }
    }

    // Add new data
    const timestamp = Date.now();
    for (const tnt of tnts) {
      const cachedData: CachedTNTData = {
        id: `${tnt.chainId}-${tnt.address}`,
        chainId: tnt.chainId,
        address: tnt.address,
        tokenName: tnt.tokenName,
        tokenSymbol: tnt.tokenSymbol,
        imageURL: tnt.imageURL,
        timestamp,
        type,
        userAddress,
      };

      await new Promise<void>((resolve, reject) => {
        const addRequest = tntStore.add(cachedData);
        addRequest.onsuccess = () => resolve();
        addRequest.onerror = () => reject(addRequest.error);
      });
    }

    // Update metadata
    const metadata: CacheMetadata = {
      userAddress,
      type,
      totalCount: tnts.length,
      lastUpdated: timestamp,
    };

    await new Promise<void>((resolve, reject) => {
      const putRequest = metadataStore.put(metadata);
      putRequest.onsuccess = () => resolve();
      putRequest.onerror = () => reject(putRequest.error);
    });
  }

  async getCachedTNTs(
    userAddress: string,
    type: "owned" | "received",
    page: number,
    itemsPerPage: number
  ): Promise<PaginatedResult | null> {
    if (!this.db) await this.init();

    const transaction = this.db!.transaction(["tnts", "metadata"], "readonly");
    const tntStore = transaction.objectStore("tnts");
    const metadataStore = transaction.objectStore("metadata");

    // Check if cache is still valid (24 hours)
    const metadata = await new Promise<CacheMetadata | undefined>(
      (resolve, reject) => {
        const request = metadataStore.get([userAddress, type]);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      }
    );

    if (!metadata || Date.now() - metadata.lastUpdated > 24 * 60 * 60 * 1000) {
      return null; // Cache expired or doesn't exist
    }

    // Get cached data
    const index = tntStore.index("userAddress");
    const allData = await new Promise<CachedTNTData[]>((resolve, reject) => {
      const request = index.getAll(userAddress);
      request.onsuccess = () =>
        resolve(request.result.filter((item) => item.type === type));
      request.onerror = () => reject(request.error);
    });

    // Apply pagination
    const totalCount = allData.length;
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalCount);
    const paginatedData = allData.slice(startIndex, endIndex);

    return {
      data: paginatedData.map((item) => ({
        chainId: item.chainId,
        address: item.address as `0x${string}`,
        tokenName: item.tokenName,
        tokenSymbol: item.tokenSymbol,
        imageURL: item.imageURL,
      })),
      totalPages,
      totalCount,
      currentPage: page,
    };
  }

  async clearCache(userAddress?: string): Promise<void> {
    if (!this.db) await this.init();

    const transaction = this.db!.transaction(["tnts", "metadata"], "readwrite");
    const tntStore = transaction.objectStore("tnts");
    const metadataStore = transaction.objectStore("metadata");

    if (userAddress) {
      // Clear specific user's cache
      const index = tntStore.index("userAddress");
      const userData = await new Promise<CachedTNTData[]>((resolve, reject) => {
        const request = index.getAll(userAddress);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });

      for (const item of userData) {
        await new Promise<void>((resolve, reject) => {
          const deleteRequest = tntStore.delete(item.id);
          deleteRequest.onsuccess = () => resolve();
          deleteRequest.onerror = () => reject(deleteRequest.error);
        });
      }

      // Clear metadata
      await new Promise<void>((resolve, reject) => {
        const deleteRequest = metadataStore.delete([userAddress, "owned"]);
        deleteRequest.onsuccess = () => resolve();
        deleteRequest.onerror = () => reject(deleteRequest.error);
      });

      await new Promise<void>((resolve, reject) => {
        const deleteRequest = metadataStore.delete([userAddress, "received"]);
        deleteRequest.onsuccess = () => resolve();
        deleteRequest.onerror = () => reject(deleteRequest.error);
      });
    } else {
      // Clear all cache
      await new Promise<void>((resolve, reject) => {
        const clearRequest = tntStore.clear();
        clearRequest.onsuccess = () => resolve();
        clearRequest.onerror = () => reject(clearRequest.error);
      });

      await new Promise<void>((resolve, reject) => {
        const clearRequest = metadataStore.clear();
        clearRequest.onsuccess = () => resolve();
        clearRequest.onerror = () => reject(clearRequest.error);
      });
    }
  }
}

export class TNTCacheManager {
  private db = new TNTIndexedDB();

  async cacheTNTs(
    tnts: Array<{
      chainId: string;
      address: `0x${string}`;
      tokenName: string;
      tokenSymbol: string;
      imageURL: string;
    }>,
    userAddress: string,
    type: "owned" | "received"
  ): Promise<void> {
    return this.db.cacheTNTs(tnts, userAddress, type);
  }

  async getCachedTNTsPaginated(
    userAddress: string,
    type: "owned" | "received",
    page: number,
    itemsPerPage: number
  ): Promise<PaginatedResult | null> {
    return this.db.getCachedTNTs(userAddress, type, page, itemsPerPage);
  }

  async clearCache(userAddress?: string): Promise<void> {
    return this.db.clearCache(userAddress);
  }
}
