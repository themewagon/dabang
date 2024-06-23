import { Badge, Button } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Notification = () => {
  return (
    <Button
      aria-label="notifications"
      sx={{
        bgcolor: 'warning.lighter',
        borderRadius: 2,
        width: 48,
        height: 48,
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
