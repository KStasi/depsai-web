import { useState } from 'react';

import { Content } from '@components/Content/index';
import { Deposit } from '@components/Deposit';
import { Sidebar } from '@components/Sidebar/index';
import { Table } from '@components/Table/index';
import { Withdraw } from '@components/Withdraw';
import { WagmiStore } from '@modules/wagmi';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  wagmi: WagmiStore
};

const HomePageView: WithStores<typeof stores> = ({ wagmi }) => {
  const accIsConnected = wagmi.account.status === 'connected';

  const [selectedContent, setSelectedContent] = useState<string>('table');

  const handleButtonClick = (contentType: string) => {
    setSelectedContent(contentType);
  };

  const renderContent = () => {
    const renderComponent = (component: JSX.Element) => (
      <>
        <button className="btn-link" onClick={() => handleButtonClick('table')}>
          <i className="btn-icon icon-back" />
          back
        </button>
        {component}
      </>
    );

    return (
      {
        table: <Table />,
        withdraw: renderComponent(<Withdraw />),
        deposit: renderComponent(<Deposit />)
      }[selectedContent] || <Table />
    );
  };

  return (
    <div className="container">
      {accIsConnected && <Sidebar onButtonClick={handleButtonClick} />}
      <Content>{renderContent()}</Content>
    </div>
  );
};

export const HomePage = withStores(stores)(observer(HomePageView));
