import {PieChart} from "@mui/x-charts/PieChart";
import {Registration} from "../../../types/registration";
import StatsCard from "./StatsCard";
import {Box, Typography} from "@mui/material";

interface GenderDistributionChartProps {
  data: Registration[];
}

export default function GenderDistributionChart({data}: GenderDistributionChartProps) {
  const genderStats = data
    .flatMap((reg) => reg.members)
    .reduce(
      (acc, member) => {
        if (member.gender === "1") {
          acc.male += 1;
        } else {
          acc.female += 1;
        }
        return acc;
      },
      {male: 0, female: 0}
    );

  const chartData = [
    {id: 0, value: genderStats.male, label: "Male"},
    {id: 1, value: genderStats.female, label: "Female"},
  ];

  return (
    <StatsCard title="Gender Distribution">
      {chartData.some((d) => d.value > 0) ? (
        <PieChart
          series={[
            {
              data: chartData,
              highlightScope: {fade: "global", highlight: "item"},
              faded: {innerRadius: 30, additionalRadius: -30, color: "gray"},
            },
          ]}
          height={200}
        />
      ) : (
        <Box sx={{textAlign: "center", py: 4}}>
          <Typography variant="body2" color="text.secondary">
            No gender data available.
          </Typography>
        </Box>
      )}
    </StatsCard>
  );
}
