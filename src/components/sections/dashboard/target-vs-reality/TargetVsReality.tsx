import { Paper, Stack, Typography } from '@mui/material';
import TargetVsRealityChart from './TargetVsRealityChart';
import IconifyIcon from 'components/base/IconifyIcon';
import { salesData, targetVsReality } from 'data/target-vs-reality';

const TargetVsReality = () => {
  return (
    <Paper sx={{ pt: 3.125, px: 2.375, pb: 2.625 }}>
      <Typography variant="h4" color="primary.dark" mb={1.375}>
        Target vs Reality
      </Typography>

      <TargetVsRealityChart style={{ height: 151 }} data={targetVsReality} />

      <Stack mt={2.25} spacing={1.875}>
        {salesData.map((item) => (
          <Stack key={item.label} direction="row" alignItems="center">
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ width: 36, height: 36, bgcolor: item.iconBgColor, borderRadius: 2, mr: 1.25 }}
            >
              <IconifyIcon icon={item.icon} sx={{ color: item.iconColor }} />
            </Stack>
            <div>
              <Typography
                variant="caption"
                sx={(theme) => ({
                  color: 'primary.darker',
                  fontWeight: theme.typography.h3.fontWeight,
                  whiteSpace: 'nowrap',
                })}
              >
                {item.label}
              </Typography>
              <Typography
                sx={(theme) => ({
                  color: 'primary.lighter',
                  fontWeight: 'fontWeightRegular',
                  fontSize: theme.typography.fontSize / 1.4,
                })}
              >
                {item.type}
              </Typography>
            </div>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 'fontWeightMedium',
                color: item.color,
                ml: { xs: 25, sm: 30, xl: 9.125 },
              }}
            >
              {item.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};

export default TargetVsReality;
