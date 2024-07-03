import { Button, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { numberFormat } from 'helpers/utils';

const LegendToggleButton = ({
  name,
  color,
  legend,
  icon,
  value,
  handleLegendToggle,
}: {
  name: keyof typeof legend;
  color: string;
  value: string;
  legend: { [key: string]: boolean };
  icon: string;
  handleLegendToggle: (name: keyof typeof legend) => void;
}) => {
  return (
    <Stack>
      <Button
        size="small"
        startIcon={<IconifyIcon icon={icon} sx={{ color }} />}
        onClick={() => handleLegendToggle(name)}
        sx={{ opacity: legend[name] ? 0.5 : 1 }}
        disableRipple
      >
        <Typography variant="button" color="#464E5F" whiteSpace="nowrap" alignSelf="end">
          {name}
        </Typography>
      </Button>
      <Typography variant="subtitle2" sx={{ height: 20, ml: 4, fontWeight: 'fontWeightMedium' }}>
        {value && numberFormat(+value)}
      </Typography>
    </Stack>
  );
};

export default LegendToggleButton;
