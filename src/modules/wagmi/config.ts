import { goerli, polygonMumbai } from 'viem/chains';

import { Token } from './types';

export const defaultChains = [goerli, polygonMumbai];

export type SupportedChainId = (typeof defaultChains)[number]['id'];

export const supportedTokens: Record<SupportedChainId, Array<Token>> = {
  [goerli.id]: [
    {
      logoURI: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025',
      decimals: 18,
      symbol: 'ETH',
      name: 'Ethereum'
    },
    {
      address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      logoURI: 'https://etherscan.io/token/images/weth_28.png',
      decimals: 18,
      symbol: 'WETH',
      name: 'Wrapped Ether'
    },
    {
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      decimals: 8,
      logoURI: 'https://etherscan.io/token/images/wbtc_28.png',
      address: '0x45AC379F019E48ca5dAC02E54F406F99F5088099'
    },
    {
      address: '0x2E8D98fd126a32362F2Bd8aA427E59a1ec63F780',
      logoURI: 'https://etherscan.io/token/images/tethernew_32.png',
      decimals: 6,
      symbol: 'USDT',
      name: 'Tether USD'
    },
    {
      address: '0x65aFADD39029741B3b8f0756952C74678c9cEC93',
      logoURI: 'https://etherscan.io/token/images/centre-usdc_28.png',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin'
    },
    {
      address: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
      logoURI: 'https://etherscan.io/token/images/chainlinktoken_32.png',
      decimals: 18,
      symbol: 'LINK',
      name: 'Chainlink'
    }
  ],
  [polygonMumbai.id]: [
    {
      address: '0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747',
      logoURI: 'https://etherscan.io/token/images/centre-usdc_28.png',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin'
    }
  ]
};
