import { Content } from '@components/Content/index';
import { Sidebar } from '@components/Sidebar/index';
import { Table } from '@components/Table/index';
import { WagmiStore } from '@modules/wagmi';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  wagmi: WagmiStore
};

const HomePageView: WithStores<typeof stores> = ({ wagmi }) => {
  const accIsConnected = wagmi.account.status === 'connected';

  return (
    <div className="container">
      {accIsConnected && <Sidebar />}
      <Content>
        <Table />
      </Content>
    </div>
  );
};

export const HomePage = withStores(stores)(observer(HomePageView));
