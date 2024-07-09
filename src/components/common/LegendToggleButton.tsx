import { Button, SvgIconProps, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

interface Legend {
  [key: string]: boolean;
}

interface LegendToggleButtonProps {
  name: keyof Legend;
  icon?: string;
  svgIcon?: (props: SvgIconProps) => JSX.Element;
  color: string;
  // value?: string;
  // currency?: boolean;
  legend: Legend;
  onHandleLegendToggle: (name: keyof Legend) => void;
}

const LegendToggleButton = ({
  name,
  icon,
  svgIcon: SvgIcon,
  color,
  legend,
  // value,
  // currency,
  onHandleLegendToggle,
}: LegendToggleButtonProps) => {
  const Icon = icon ? (
    <IconifyIcon icon={icon} sx={{ color }} />
  ) : SvgIcon ? (
    <SvgIcon sx={{ color }} />
  ) : null;

  return (
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
  );
};

export default LegendToggleButton;
