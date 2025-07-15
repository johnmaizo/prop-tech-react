import React from "react";
import {Card, CardContent, Typography, Box} from "@mui/material";

export default function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactElement;
  value: number;
  label: string;
}) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}>
      <CardContent sx={{textAlign: "center", p: 3}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 1,
          }}>
          {React.cloneElement(icon)}
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#111827",
            mb: 1,
            fontSize: "2rem",
          }}>
          {value}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            fontWeight: 500,
            fontSize: "0.875rem",
          }}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
