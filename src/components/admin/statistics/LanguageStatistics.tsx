import {Box, Typography, Grid, Paper} from "@mui/material";
import {Registration} from "../../../types/registration";
import StatsCard from "./StatsCard";

interface LanguageStatisticsProps {
  data: Registration[];
}

const languageIcons: {[key: string]: string} = {
  javascript: "/icons/javascript.svg",
  typescript: "/icons/typescript.svg",
  php: "/icons/php.svg",
  laravel: "/icons/laravel.svg",
  reactjs: "/icons/reactjs.svg",
  nextjs: "/icons/nextjs.svg",
  java: "/icons/java.svg",
  python: "/icons/python.svg",
  csharp: "/icons/csharp.svg",
  other: "/icons/other.svg",
};

export default function LanguageStatistics({data}: LanguageStatisticsProps) {
  const languageStats = data.reduce((acc, reg) => {
    reg.prog_languages.forEach((lang) => {
      acc[lang] = (acc[lang] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const sortedLanguages = Object.entries(languageStats).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <StatsCard title="Programming Languages">
      <Grid container spacing={2}>
        {sortedLanguages.map(([language, count]) => (
          <Grid size={{xs: 4}} key={language}>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderRadius: 2,
              }}>
              <img
                src={
                  language === "c#"
                    ? languageIcons["csharp"]
                    : languageIcons[
                        language.toLowerCase().replace(/\s/g, "")
                      ] || ""
                }
                alt={language}
                width="40"
                height="40"
              />
              <Box>
                <Typography variant="h6" sx={{fontWeight: 600}}>
                  {language}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {count} teams
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {sortedLanguages.length === 0 && (
        <Box sx={{textAlign: "center", py: 4}}>
          <Typography variant="body2" color="text.secondary">
            No language data available.
          </Typography>
        </Box>
      )}
    </StatsCard>
  );
}
