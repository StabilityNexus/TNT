import { getPublicClient } from "@wagmi/core";
import { config } from "./config";
import { TNTAbi } from "./contractsABI/TNT";

export interface UserRole {
  hasAdminRole: boolean;
  hasMinterRole: boolean;
  hasRevokerRole: boolean;
  isRecipient: boolean;
}

export interface TokenPermissions {
  canIssue: boolean;
  canRevoke: boolean;
  canBurn: boolean;
  canGrantRoles: boolean;
}

export class TNTRoleManager {
  private contractAddress: `0x${string}`;
  private chainId: number;
  private userAddress: `0x${string}`;

  constructor(contractAddress: `0x${string}`, chainId: number, userAddress: `0x${string}`) {
    this.contractAddress = contractAddress;
    this.chainId = chainId;
    this.userAddress = userAddress;
  }

  async getUserRoles(): Promise<UserRole> {
    try {
      const publicClient = getPublicClient(config as any, { chainId: this.chainId });
      if (!publicClient) {
        throw new Error(`No public client available for chain ${this.chainId}`);
      }

      // Get role constants first
      const [defaultAdminRole, minterRole, revokerRole] = await Promise.all([
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "DEFAULT_ADMIN_ROLE",
        }) as Promise<string>,
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "MINTER_ROLE",
        }) as Promise<string>,
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "REVOKER_ROLE",
        }) as Promise<string>,
      ]);

      // Check if user has each role
      const [hasAdminRole, hasMinterRole, hasRevokerRole, balanceOf] = await Promise.all([
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "hasRole",
          args: [defaultAdminRole, this.userAddress],
        }) as Promise<boolean>,
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "hasRole",
          args: [minterRole, this.userAddress],
        }) as Promise<boolean>,
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "hasRole",
          args: [revokerRole, this.userAddress],
        }) as Promise<boolean>,
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "balanceOf",
          args: [this.userAddress],
        }) as Promise<bigint>,
      ]);

      return {
        hasAdminRole,
        hasMinterRole,
        hasRevokerRole,
        isRecipient: Number(balanceOf) > 0,
      };
    } catch (error) {
      console.error("Error fetching user roles:", error);
      return {
        hasAdminRole: false,
        hasMinterRole: false,
        hasRevokerRole: false,
        isRecipient: false,
      };
    }
  }

  async getTokenPermissions(): Promise<TokenPermissions> {
    try {
      const userRoles = await this.getUserRoles();
      const publicClient = getPublicClient(config as any, { chainId: this.chainId });
      
      if (!publicClient) {
        throw new Error(`No public client available for chain ${this.chainId}`);
      }

      // Check if token is revokable
      const isRevokable = await publicClient.readContract({
        address: this.contractAddress,
        abi: TNTAbi,
        functionName: "revokable",
      }) as Promise<boolean>;

      return {
        canIssue: userRoles.hasAdminRole || userRoles.hasMinterRole,
        canRevoke: (userRoles.hasAdminRole || userRoles.hasRevokerRole) && isRevokable,
        canBurn: userRoles.isRecipient, // Token holders can burn their own tokens
        canGrantRoles: userRoles.hasAdminRole,
      };
    } catch (error) {
      console.error("Error fetching token permissions:", error);
      return {
        canIssue: false,
        canRevoke: false,
        canBurn: false,
        canGrantRoles: false,
      };
    }
  }

  async getTokenInfo() {
    try {
      const publicClient = getPublicClient(config as any, { chainId: this.chainId });
      if (!publicClient) {
        throw new Error(`No public client available for chain ${this.chainId}`);
      }

      const [name, symbol, revokable, imageURL] = await Promise.all([
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "name",
        }) as Promise<string>,
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "symbol",
        }) as Promise<string>,
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "revokable",
        }) as Promise<boolean>,
        publicClient.readContract({
          address: this.contractAddress,
          abi: TNTAbi,
          functionName: "imageURL",
        }).catch(() => "") as Promise<string>,
      ]);

      return { name, symbol, revokable, imageURL };
    } catch (error) {
      console.error("Error fetching token info:", error);
      throw error;
    }
  }
}

// Utility function to check if user has active tokens (not burned/revoked)
export async function hasActiveTokens(
  contractAddress: `0x${string}`,
  chainId: number,
  userAddress: `0x${string}`
): Promise<boolean> {
  try {
    const publicClient = getPublicClient(config as any, { chainId });
    if (!publicClient) {
      return false;
    }

    const hasActiveTokens = await publicClient.readContract({
      address: contractAddress,
      abi: TNTAbi,
      functionName: "hasActiveTokens",
      args: [userAddress],
    }) as Promise<boolean>;

    return hasActiveTokens;
  } catch (error) {
    console.error("Error checking active tokens:", error);
    return false;
  }
} 