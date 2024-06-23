import { Link, Stack, Typography } from '@mui/material';
import Logo from 'components/icons/Logo';
import { rootPaths } from 'routes/paths';

const LogoHeader = () => {
  return (
    <Stack component={Link} href={rootPaths.root} direction="row" alignItems="center" columnGap={3}>
      <Logo sx={{ fontSize: 56 }} />
      <Typography variant="h2" color="primary.darker">
        Dabang
      </Typography>
    </Stack>
  );
};

export default LogoHeader;
