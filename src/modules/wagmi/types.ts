import { Address } from 'viem';
import { getAccount, getNetwork, getPublicClient, getWalletClient } from 'wagmi/actions';

export type Account = ReturnType<typeof getAccount>;
export type WClient = Awaited<ReturnType<typeof getWalletClient>>;
export type PClient = ReturnType<typeof getPublicClient>;
export type Network = ReturnType<typeof getNetwork>;

export interface Token {
  address?: Address;
  logoURI: string;
  symbol: string;
  name: string;
  decimals: number;
}
