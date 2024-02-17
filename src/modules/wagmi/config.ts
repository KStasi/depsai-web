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
      address: '0x33af15c79d64b85ba14aaffaa4577949104b22e8',
      logoURI:
        'https://assets.coingecko.com/coins/images/542/standard/Golem_Submark_Positive_RGB.png',
      decimals: 18,
      symbol: 'GLM',
      name: 'Golem Network Token'
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
