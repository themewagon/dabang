import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { SaleItem } from 'data/sales';

const SaleCard = ({ item }: { item: SaleItem }) => {
  const { value, label, growth, bgColor, iconBackgroundColor, icon, svgIcon: SvgIcon } = item;

  const Icon = icon ? (
    <IconifyIcon icon={icon} sx={{ fontSize: 20, color: 'common.white' }} />
  ) : SvgIcon ? (
    <SvgIcon sx={{ fontSize: 24 }} />
  ) : null;

  return (
    <Grid item xs={12} sm key={label}>
      <Card
        sx={{
          borderRadius: 4,
          bgcolor: bgColor,
        }}
      >
        <CardContent>
          <Stack
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: iconBackgroundColor,
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2,
            }}
          >
            {Icon}
          </Stack>

          <Typography variant="h3" color="primary.darker" mb={1}>
            {value}
          </Typography>
          <Typography variant="h6" color="grey.800" mb={1}>
            {label}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {growth} from yesterday
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SaleCard;
