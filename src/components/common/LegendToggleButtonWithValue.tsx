import { Button, Stack, SvgIconProps, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { currencyFormat, numberFormat } from 'helpers/utils';

interface Legend {
  [key: string]: boolean;
}

interface LegendToggleButtonWithValueProps {
  name: keyof Legend;
  icon?: string;
  svgIcon?: (props: SvgIconProps) => JSX.Element;
  color: string;
  value: string;
  currency: boolean;
  legend: Legend;
  onHandleLegendToggle: (name: keyof Legend) => void;
}

const LegendToggleButtonWithValue = ({
  name,
  icon,
  svgIcon: SvgIcon,
  color,
  value,
  currency,
  legend,
  onHandleLegendToggle,
}: LegendToggleButtonWithValueProps) => {
  const Icon = icon ? (
    <IconifyIcon icon={icon} sx={{ color }} />
  ) : SvgIcon ? (
    <SvgIcon sx={{ color }} />
  ) : null;

  return (
    <Stack>
      <Button
        size="small"
        startIcon={Icon}
        onClick={() => onHandleLegendToggle(name)}
        sx={{ opacity: legend[name] ? 0.5 : 1, '&:hover': { bgcolor: 'transparent' } }}
        disableRipple
      >
        <Typography variant="button" whiteSpace="nowrap" alignSelf="end" sx={{ color: 'grey.200' }}>
          {name}
        </Typography>
      </Button>
      <Typography variant="subtitle2" sx={{ height: 20, ml: 4, fontWeight: 'fontWeightMedium' }}>
        {currency
          ? value && currencyFormat(Number(numberFormat(+value)))
          : value && numberFormat(+value)}
      </Typography>
    </Stack>
  );
};

export default LegendToggleButtonWithValue;
