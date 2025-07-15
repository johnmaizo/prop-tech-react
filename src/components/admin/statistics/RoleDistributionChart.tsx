import {Box, Typography, LinearProgress} from "@mui/material";
import {Registration} from "../../../types/registration";
import StatsCard from "./StatsCard";

interface RoleDistributionChartProps {
  data: Registration[];
}

export default function RoleDistributionChart({
  data,
}: RoleDistributionChartProps) {
  const roleStats = data
    .flatMap((reg) => reg.members)
    .reduce((acc, member) => {
      acc[member.role] = (acc[member.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const totalParticipants = data.reduce(
    (sum, reg) => sum + reg.members.length,
    0
  );

  return (
    <StatsCard title="Role Distribution">
      <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
        {Object.entries(roleStats)
          .sort(([, a], [, b]) => b - a)
          .map(([role, count]) => (
            <Box key={role}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "#111827",
                    textTransform: "capitalize",
                  }}>
                  {role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{color: "#6b7280", fontSize: "0.875rem"}}>
                  {count}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={(count / totalParticipants) * 100}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  background: "#f3f4f6",
                  "& .MuiLinearProgress-bar": {
                    background: "#10b981",
                    borderRadius: 3,
                  },
                }}
              />
            </Box>
          ))}
      </Box>
    </StatsCard>
  );
}
