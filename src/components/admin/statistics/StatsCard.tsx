import {Card, CardContent, Typography} from "@mui/material";

export default function StatsCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card
      sx={{
        border: "none",
        borderRadius: 2,
      }}>
      <CardContent sx={{p: 3}}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}
