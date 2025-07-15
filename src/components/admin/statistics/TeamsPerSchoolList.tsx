import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import {Registration} from "../../../types/registration";
import StatsCard from "./StatsCard";

interface TeamsPerSchoolListProps {
  data: Registration[];
}

export default function TeamsPerSchoolList({data}: TeamsPerSchoolListProps) {
  const schoolStats = data.reduce((acc, reg) => {
    acc[reg.school] = (acc[reg.school] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedSchools = Object.entries(schoolStats).sort((a, b) => b[1] - a[1]);

  return (
    <StatsCard title="Teams Per School">
      <List disablePadding>
        {sortedSchools.map(([school, count], index) => (
          <React.Fragment key={school}>
            <ListItem>
              <ListItemText
                primary={school}
                secondary={`${count} team${count > 1 ? "s" : ""}`}
              />
            </ListItem>
            {index < sortedSchools.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
      {sortedSchools.length === 0 && (
        <Box sx={{textAlign: "center", py: 4}}>
          <Typography variant="body2" color="text.secondary">
            No school data available.
          </Typography>
        </Box>
      )}
    </StatsCard>
  );
}
