import { Button, Stack, Typography } from '@mui/material';
import Background from 'assets/Background.png';
import LogoPro from 'components/icons/LogoPro';

const NavCard = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      rowGap={3.75}
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        width: 238,
        height: 259,
        mt: 17,
      }}
    >
      <Stack rowGap={1} alignItems="center" color="common.white">
        <LogoPro sx={{ fontSize: 48 }} />
        <Typography variant="h4">Dabang Pro</Typography>
        <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
          Get access to all <br /> features on tetumbas
        </Typography>
      </Stack>

      <Button variant="contained" sx={{ bgcolor: 'common.white', color: 'primary.main' }}>
        Get Pro
      </Button>
    </Stack>
  );
};

export default NavCard;
