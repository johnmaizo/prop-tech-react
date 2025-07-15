import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useRegistrationData} from "../../hooks/useRegistrationData";
import StatisticsOverview from "../../components/admin/statistics/StatisticsOverview";
import TeamRegistrationsTable from "../../components/admin/statistics/TeamRegistrationsTable";
import LanguageStatistics from "../../components/admin/statistics/LanguageStatistics";
import TeamsPerSchoolChart from "../../components/admin/statistics/TeamsPerSchoolChart";
import GenderDistributionChart from "../../components/admin/statistics/GenderDistributionChart";
import MediaConsentTable from "../../components/admin/statistics/MediaConsentTable";
import LanguagePopularityChart from "../../components/admin/statistics/LanguagePopularityChart";

export default function StatisticsDashboard() {
  const {registrations, loading, error} = useRegistrationData();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#f0f2f5",
        }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#f0f2f5",
          p: 3,
        }}>
        <Alert severity="error" sx={{width: "100%", maxWidth: 500}}>
          {error}
        </Alert>
      </Box>
    );
  }

  if (registrations.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "#f0f2f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}>
        <Link
          to={"/admin/dashboard"}
          style={{textDecoration: "none", color: "#6b7280"}}>
          <Typography variant="body2" sx={{mb: 4}}>
            <ArrowBack sx={{mr: 1}} />
            Back to Dashboard
          </Typography>
        </Link>
        <Card
          sx={{
            maxWidth: 400,
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: 2,
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
          }}>
          <CardContent sx={{textAlign: "center", p: 4}}>
            <Typography variant="h6" sx={{color: "#374151", mb: 2}}>
              No Registrations Found
            </Typography>
            <Typography variant="body2" sx={{color: "#6b7280"}}>
              There are no registered participants yet.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f0f2f5",
        py: 6,
        px: 4,
      }}>
      <Box sx={{maxWidth: 1400, mx: "auto"}}>
        <Box sx={{mt: 5, mb: 3}}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#111827",
            }}>
            Registration Analytics
          </Typography>
        </Box>

        <StatisticsOverview data={registrations} />

        <Grid container spacing={2.5} sx={{mt: 4}}>
          <Grid size={{xs: 12, lg: 8}}>
            <LanguagePopularityChart data={registrations} />
          </Grid>

          <Grid size={{xs: 12, md: 6, lg: 4}}>
            <GenderDistributionChart data={registrations} />
          </Grid>
          <Grid size={{xs: 12}}>
            <TeamRegistrationsTable data={registrations} />
          </Grid>
          <Grid size={{xs: 12, md: 6, lg: 6}}>
            <TeamsPerSchoolChart data={registrations} />
          </Grid>
          <Grid size={{xs: 12, lg: 6}}>
            <MediaConsentTable data={registrations} />
          </Grid>
          <Grid size={{xs: 12, lg: 8}}>
            <LanguageStatistics data={registrations} />
          </Grid>
          {/* <Grid size={15}>
            <LanguagePopularityChart data={registrations} />
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}
