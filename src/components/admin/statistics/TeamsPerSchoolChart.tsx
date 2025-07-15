import {BarChart} from "@mui/x-charts/BarChart";
import {Registration} from "../../../types/registration";
import StatsCard from "./StatsCard";
import {Box, Typography} from "@mui/material";

interface TeamsPerSchoolChartProps {
  data: Registration[];
}

export default function TeamsPerSchoolChart({data}: TeamsPerSchoolChartProps) {
  const schoolStats = data.reduce((acc, reg) => {
    acc[reg.school] = (acc[reg.school] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedSchools = Object.entries(schoolStats).sort((a, b) => b[1] - a[1]);
  const chartData = {
    labels: sortedSchools.map((item) => item[0]),
    values: sortedSchools.map((item) => item[1]),
  };

  return (
    <StatsCard title="Teams Per School">
      {chartData.labels.length > 0 ? (
        <BarChart
          xAxis={[{scaleType: "band", data: chartData.labels}]}
          series={[{data: chartData.values}]}
        />
      ) : (
        <Box sx={{textAlign: "center", py: 4}}>
          <Typography variant="body2" color="text.secondary">
            No school data available.
          </Typography>
        </Box>
      )}
    </StatsCard>
  );
}
