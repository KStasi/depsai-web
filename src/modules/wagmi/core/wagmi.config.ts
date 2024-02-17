import { Web3AuthConnectorInstance } from '@modules/web3-auth/get-web3-auth-connector';
import { configureChains, createConfig } from '@wagmi/core';
import { publicProvider } from 'wagmi/providers/public';

import { defaultChains } from '../config';

const { chains, publicClient, webSocketPublicClient } = configureChains(defaultChains, [
  publicProvider()
]);

// export const Connector = new InjectedConnector({
//   chains
// });
export const Connector = Web3AuthConnectorInstance(chains);

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [Connector]
});

export { chains };
