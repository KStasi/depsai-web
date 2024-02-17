import { WagmiStore } from '@modules/wagmi';
import { Box, Button, Typography } from '@mui/material';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  wagmi: WagmiStore
};

const ConnectView: WithStores<typeof stores> = ({ wagmi }) => {
  return (
    <Box>
      <Typography variant="body1">{wagmi.account.address}</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2
        }}
      >
        {wagmi.chains.map(chain => (
          <Button key={chain.id} onClick={async () => wagmi.switchChain(chain)} variant="contained">
            {chain.name}
          </Button>
        ))}

        <Button onClick={async () => wagmi.connect()} variant="contained">
          Connect
        </Button>
        <Button onClick={async () => wagmi.disconnect()} variant="contained">
          Disconnect
        </Button>

        <Button
          onClick={async () =>
            wagmi.walletClient?.signMessage({
              message: 'Hello World'
            })
          }
          variant="contained"
        >
          Sign Message
        </Button>
      </Box>
    </Box>
  );
};

export const Connect = withStores(stores)(observer(ConnectView));
