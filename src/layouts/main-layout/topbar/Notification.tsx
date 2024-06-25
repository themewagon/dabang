import { Badge, Button } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Notification = () => {
  return (
    <Button
      aria-label="notifications"
      sx={{
        bgcolor: 'warning.lighter',
        p: 1.5,
        minWidth: 'auto',
      }}
    >
      <Badge badgeContent=" " variant="dot">
        <IconifyIcon
          icon="clarity:notification-line"
          sx={{ fontSize: 24, color: 'warning.light' }}
        />
      </Badge>
    </Button>
  );
};

export default Notification;
