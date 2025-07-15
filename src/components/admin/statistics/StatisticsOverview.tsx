import {Grid} from "@mui/material";
import {
  Group as GroupIcon,
  School as SchoolIcon,
  PhotoCamera as PhotoCameraIcon,
} from "@mui/icons-material";
import StatCard from "./StatCard";
import {Registration} from "../../../types/registration";

interface StatisticsOverviewProps {
  data: Registration[];
}

export default function StatisticsOverview({data}: StatisticsOverviewProps) {
  const totalRegistrations = data.length;
  const totalParticipants = data.reduce(
    (sum, reg) => sum + reg.members.length,
    0
  );

  const schoolStats = data.reduce((acc, reg) => {
    acc[reg.school] = (acc[reg.school] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const mediaConsentStats = {
    photo: data.filter((reg) => reg.media_consent.photo).length,
    video: data.filter((reg) => reg.media_consent.video).length,
  };

  const totalConsents = mediaConsentStats.photo + mediaConsentStats.video;
  const consentPercentage =
    totalRegistrations > 0
      ? Math.round((totalConsents / (totalRegistrations * 2)) * 100)
      : 0;

  return (
    <Grid container spacing={3}>
      <Grid size={{xs: 12, md: 6, lg: 2.5}}>
        <StatCard
          icon={<GroupIcon />}
          value={totalRegistrations}
          label="Total Teams Registered"
        />
      </Grid>
      <Grid size={{xs: 12, md: 6, lg: 2.5}}>
        <StatCard
          icon={<GroupIcon />}
          value={totalParticipants}
          label="Total Participants"
        />
      </Grid>
      <Grid size={{xs: 12, md: 6, lg: 2.5}}>
        <StatCard
          icon={<SchoolIcon />}
          value={Object.keys(schoolStats).length}
          label="Total Schools"
        />
      </Grid>
      <Grid size={{xs: 12, md: 6, lg: 2.5}}>
        <StatCard
          icon={<PhotoCameraIcon />}
          value={consentPercentage}
          label="Media Consent (%)"
        />
      </Grid>
    </Grid>
  );
}
