// Web3Auth Libraries
import logoUrl from '@assets/react.svg';
import { CHAIN_NAMESPACES } from '@web3auth/base';
import { Web3Auth } from '@web3auth/modal';
import { OpenloginAdapter, WhiteLabelData } from '@web3auth/openlogin-adapter';
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector';
import { Chain } from 'wagmi';

const {
  VITE_APP_TITLE: APP_NAME,
  VITE_WEB3AUTH_CLIENT_ID: clientId,
  VITE_WEB3AUTH_CLIENT_VERIFIER_NAME: verifier,
  VITE_AUTH0_CLIENT_ID: auth0ClientId
} = import.meta.env;

const WEB3_NETWORK = 'testnet';

const Theme = {
  primary: '#0074D9', // Example color value for 'primary'
  gray: '#AAAAAA', // Example color value for 'gray'
  red: '#FF4136', // Example color value for 'red'
  green: '#2ECC40', // Example color value for 'green'
  success: '#28A745', // Example color value for 'success'
  warning: '#FFA500', // Example color value for 'warning'
  error: '#FF4136', // Example color value for 'error'
  info: '#0074D9', // Example color value for 'info'
  white: '#FFFFFF' // Example color value for 'white'
};

const DEF_CLIENT_ID =
  'BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ';

export const Web3AuthConnectorInstance = (chains: Chain[]) => {
  // Create Web3Auth Instance
  const name = APP_NAME;

  const web3AuthInstance = new Web3Auth({
    clientId: clientId ?? DEF_CLIENT_ID,
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: '0x' + chains[0].id.toString(16),
      rpcTarget: chains[0].rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
      displayName: chains[0].name,
      tickerName: chains[0].nativeCurrency?.name,
      ticker: chains[0].nativeCurrency?.symbol
    },
    sessionTime: 86400 * 7,
    web3AuthNetwork: WEB3_NETWORK,
    uiConfig: {
      appName: name,
      theme: Theme,
      defaultLanguage: 'en',
      modalZIndex: '2147483647'
    }
  });

  const whiteLabel: WhiteLabelData = {
    appName: name,
    logoLight: logoUrl,
    logoDark: logoUrl,
    defaultLanguage: 'en',
    mode: 'dark'
  };

  // Add openlogin adapter for customisations
  const openloginAdapterInstance = new OpenloginAdapter({
    adapterSettings: {
      network: WEB3_NETWORK,
      uxMode: 'popup',
      whiteLabel,
      loginConfig: {
        jwt: {
          verifier,
          typeOfLogin: 'jwt',
          clientId: auth0ClientId
        }
      }
    }
  });
  web3AuthInstance.configureAdapter(openloginAdapterInstance);

  return new Web3AuthConnector({
    chains: chains,
    options: {
      web3AuthInstance
    }
  });
};
