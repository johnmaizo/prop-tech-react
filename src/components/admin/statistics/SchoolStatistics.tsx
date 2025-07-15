import {Box, Typography} from "@mui/material";
import {Registration} from "../../../types/registration";
import StatsCard from "./StatsCard";

interface SchoolStatisticsProps {
  data: Registration[];
}

export default function SchoolStatistics({data}: SchoolStatisticsProps) {
  const schoolStats = data.reduce((acc, reg) => {
    acc[reg.school] = (acc[reg.school] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <StatsCard title="Schools & Universities">
      <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
        {Object.entries(schoolStats)
          .sort(([, a], [, b]) => b - a)
          .map(([school, count]) => (
            <Box key={school}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}>
                <Typography
                  variant="body2"
                  sx={{fontWeight: 500, color: "#111827"}}>
                  {school}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{color: "#6b7280", fontSize: "0.875rem"}}>
                  {count}
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </StatsCard>
  );
}
