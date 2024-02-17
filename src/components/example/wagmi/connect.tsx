import { WagmiStore } from '@modules/wagmi';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  wagmi: WagmiStore
};

const ConnectView: WithStores<typeof stores> = ({ wagmi }) => {
  return (
    <div className="header-container">
      <span className="header-address" title={wagmi.account.address}>
        {wagmi.account.address}
      </span>
      <button onClick={async () => wagmi.connect()} className="btn-main">
        Connect wallet
      </button>
    </div>
  );
};

export const Connect = withStores(stores)(observer(ConnectView));
