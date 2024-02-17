import { BalancesStore } from '@modules/wagmi/balances';
import { Box, Typography } from '@mui/material';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  balances: BalancesStore
};

const BalancesView: WithStores<typeof stores> = ({ balances }) => {
  return (
    <Box>
      <Typography variant="body1">Balances</Typography>
      {balances.tokens.map(token => (
        <Box>
          <Typography variant="body1">{token.address}</Typography>
          <Typography variant="body1">{balances.getBalance(token)}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export const Balances = withStores(stores)(observer(BalancesView));
