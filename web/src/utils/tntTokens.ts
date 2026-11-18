import { getPublicClient } from "@wagmi/core";
import type { PublicClient } from "viem";
import { config } from "./config";
import { TNTAbi } from "./contractsABI/TNT";

export const TOKEN_PAGE_SIZE = 100;

type TokenPage = [bigint[], `0x${string}`[]];
type TokenPageFunction =
  | "getActiveTokensPaginated"
  | "getAllIssuedTokensPaginated";
type TokenCountFunction = "getActiveTokenCount" | "getAllIssuedTokenCount";

async function readTokenPage(
  publicClient: PublicClient,
  contractAddress: `0x${string}`,
  functionName: TokenPageFunction,
  user: `0x${string}`,
  offset: number,
  limit: number
): Promise<TokenPage> {
  return (await publicClient.readContract({
    address: contractAddress,
    abi: TNTAbi,
    functionName,
    args: [user, BigInt(offset), BigInt(limit)],
  })) as TokenPage;
}

async function fetchTokenPages(
  contractAddress: `0x${string}`,
  chainId: number,
  user: `0x${string}`,
  functionName: TokenPageFunction,
  countFunctionName: TokenCountFunction
): Promise<TokenPage> {
  const publicClient = getPublicClient(config, {
    chainId: chainId as (typeof config.chains)[number]["id"],
  });
  if (!publicClient) return [[], []];

  const count = (await publicClient.readContract({
    address: contractAddress,
    abi: TNTAbi,
    functionName: countFunctionName,
    args: [user],
  })) as bigint;

  const total = Number(count);
  const tokenIds: bigint[] = [];
  const issuers: `0x${string}`[] = [];

  for (let offset = 0; offset < total; offset += TOKEN_PAGE_SIZE) {
    const limit = Math.min(TOKEN_PAGE_SIZE, total - offset);
    const [pageTokenIds, pageIssuers] = await readTokenPage(
      publicClient,
      contractAddress,
      functionName,
      user,
      offset,
      limit
    );

    tokenIds.push(...pageTokenIds);
    issuers.push(...pageIssuers);
  }

  return [tokenIds, issuers];
}

export function fetchActiveTokens(
  contractAddress: `0x${string}`,
  chainId: number,
  user: `0x${string}`
): Promise<TokenPage> {
  return fetchTokenPages(
    contractAddress,
    chainId,
    user,
    "getActiveTokensPaginated",
    "getActiveTokenCount"
  );
}

export function fetchAllIssuedTokens(
  contractAddress: `0x${string}`,
  chainId: number,
  user: `0x${string}`
): Promise<TokenPage> {
  return fetchTokenPages(
    contractAddress,
    chainId,
    user,
    "getAllIssuedTokensPaginated",
    "getAllIssuedTokenCount"
  );
}
