import { Balances, Connect, ToggleMode } from '@components/example';
import { Box, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 5
      }}
    >
      <Typography variant="h1">Home</Typography>
      <ToggleMode />
      <Balances />
      <Connect />
    </Box>
  );
};
