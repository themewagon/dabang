import { Card, CardContent, Typography, Grid, Paper, Stack, Button } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { sales } from 'data/sales';

const Sales = () => {
  return (
    <Paper sx={(theme) => ({ border: `1px solid ${theme.palette.grey[200]}`, p: 3 })}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <div>
          <Typography variant="h4" gutterBottom>
            Today's Sales
          </Typography>
          <Typography variant="subtitle1" color="primary.lighter" gutterBottom>
            Sales Summary
          </Typography>
        </div>
        <Button variant="outlined" startIcon={<IconifyIcon icon="solar:upload-linear" />}>
          Export
        </Button>
      </Stack>

      <Grid container spacing={4}>
        {sales.map((item) => {
          const {
            value,
            label,
            growth,
            bgColor,
            iconBackgroundColor,
            icon,
            svgIcon: SvgIcon,
          } = item;

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
        })}
      </Grid>
    </Paper>
  );
};

export default Sales;
