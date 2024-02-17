import { BalancesStore } from '@modules/wagmi/balances';
import { Box } from '@mui/material';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  balances: BalancesStore
};

const BalancesView: WithStores<typeof stores> = ({ balances }) => {
  return (
    <Box>
      <h4 className="sidebar-title">User Balance</h4>
      <ul className="sidebar-list">
        {balances.tokens.map(token => (
          <li className="sidebar-item">
            <span className="sidebar-address" title={token.address}>
              {token.address}
            </span>
            <span className="sidebar-balance">
              {balances.getBalance(token)}
              <i className="sidebar-symbol">{token.symbol}</i>
            </span>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export const Balances = withStores(stores)(observer(BalancesView));
