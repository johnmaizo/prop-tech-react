import {BarChart} from "@mui/x-charts/BarChart";
import {Registration} from "../../../types/registration";
import StatsCard from "./StatsCard";
import {Box, Typography} from "@mui/material";

interface LanguagePopularityChartProps {
  data: Registration[];
}

export default function LanguagePopularityChart({data}: LanguagePopularityChartProps) {
  const languageStats = data.reduce((acc, reg) => {
    reg.prog_languages.forEach((lang) => {
      acc[lang] = (acc[lang] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const sortedLanguages = Object.entries(languageStats).sort(
    (a, b) => b[1] - a[1]
  );
  const chartData = {
    labels: sortedLanguages.map((item) => item[0]),
    values: sortedLanguages.map((item) => item[1]),
  };

  return (
    <StatsCard title="Preferred Programming Language ">
      {chartData.labels.length > 0 ? (
        <BarChart
          layout="horizontal"
          yAxis={[{scaleType: "band", data: chartData.labels}]}
          series={[{data: chartData.values}]}
          height={200}
        />
      ) : (
        <Box sx={{textAlign: "center", py: 4}}>
          <Typography variant="body2" color="text.secondary">
            No language data available.
          </Typography>
        </Box>
      )}
    </StatsCard>
  );
}
