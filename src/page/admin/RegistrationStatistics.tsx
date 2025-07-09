import React, {useEffect, useState} from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  LinearProgress,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  School as SchoolIcon,
  Group as GroupIcon,
  Code as CodeIcon,
  LocationOn as LocationIcon,
  ArrowBack,
  Check,
  Cancel,
} from "@mui/icons-material";
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
import { useRegistration } from "../context/RegistrationContext";
import { Link } from "react-router-dom";
=======
import {Link} from "react-router-dom";
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx

// Updated interface to match API response
export interface Registration {
  id: number; 
  school: string;
  school_address: string;
  team_name: string;
  team_email: string;
  prog_languages: string[];
  other_prog_languages: string | null;
  media_consent: {
    photo: boolean;
    video: boolean;
  };
  terms_accepted: number;
  created_at: string;
  updated_at: string;
}

<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
export default function MinimalStatisticsDashboard() {
  const { registrations }: { registrations: Registration[] } =
    useRegistration();
=======
export default function StatisticsDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.leuteriorealty.com/core-system/v1/public/api/hackathon/participants"
        );
        setRegistrations(response.data.data || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch registration data");
        setLoading(false);
        console.error("API Error:", err);
      }
    };

    fetchData();
  }, []);

  // Calculate statistics
  const totalRegistrations = registrations.length;
  // const totalParticipants = registrations.length;

  const languageStats = registrations.reduce((acc, reg) => {
    reg.prog_languages.forEach((lang) => {
      acc[lang] = (acc[lang] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const schoolStats = registrations.reduce((acc, reg) => {
    acc[reg.school] = (acc[reg.school] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const mediaConsentStats = {
    photo: registrations.filter((reg) => reg.media_consent.photo).length,
    video: registrations.filter((reg) => reg.media_consent.video).length,
  };

  const locationStats = registrations.reduce((acc, reg) => {
    acc[reg.school_address] = (acc[reg.school_address] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Loading state
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#fafafa",
        }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#fafafa",
          p: 3,
        }}>
        <Alert severity="error" sx={{width: "100%", maxWidth: 500}}>
          {error}
        </Alert>
      </Box>
    );
  }

  // Empty state
  if (registrations.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "#fafafa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Link
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
          to={"/registration"}
          style={{ textDecoration: "none", color: "#6b7280" }}
        >
          <Typography variant="body2" sx={{ mb: 4 }}>
            <ArrowBack sx={{ mr: 1 }} />
            Back to Registration
=======
          to={"/admin/home"}
          style={{textDecoration: "none", color: "#6b7280"}}>
          <Typography variant="body2" sx={{mb: 4}}>
            <ArrowBack sx={{mr: 1}} />
            Back to Dashboard
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
          </Typography>
        </Link>
        <Card
          sx={{
            maxWidth: 400,
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: 2,
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
          }}
        >
          <CardContent sx={{ textAlign: "center", p: 4 }}>
            <Typography variant="h6" sx={{ color: "#374151", mb: 2 }}>
              No Data Yet
            </Typography>
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Registration statistics will appear here once teams start signing
              up.
=======
          }}>
          <CardContent sx={{textAlign: "center", p: 4}}>
            <Typography variant="h6" sx={{color: "#374151", mb: 2}}>
              No Registrations Found
            </Typography>
            <Typography variant="body2" sx={{color: "#6b7280"}}>
              There are no registered participants yet.
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  const StatCard = ({
    icon,
    value,
    label,
  }: {
    icon: React.ReactElement;
    value: number;
    label: string;
  }) => (
    <Card
      sx={{
        height: "100%",
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-1px)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center", p: 3 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            background: "#f9fafb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
          }}
        >
=======
          }}>
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
          {React.cloneElement(icon)}
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#111827",
            mb: 1,
            fontSize: "2rem",
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            fontWeight: 500,
            fontSize: "0.875rem",
          }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );

  const StatsCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <Card
      sx={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "#111827",
            fontSize: "1.125rem",
          }}
        >
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#fafafa",
        py: 6,
        px: 3,
      }}
    >
      <Link
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
        to={"/registration"}
        style={{ textDecoration: "none", color: "#6b7280" }}
      >
        <Typography variant="body2" sx={{ mb: 4 }}>
          <ArrowBack sx={{ mr: 1 }} />
          Back to Registration
=======
        to={"/admin/dashboard"}
        style={{textDecoration: "none", color: "#6b7280"}}>
        <Typography variant="body2" sx={{mb: 4}}>
          <ArrowBack sx={{mr: 1}} />
          Back to Dashboard
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
        </Typography>
      </Link>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#111827",
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              letterSpacing: "-0.025em",
            }}
          >
            HackEstate 2025
          </Typography>
          <Typography
=======
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
            variant="subtitle1"
            sx={{
              color: "#6b7280",
              fontWeight: 400,
              fontSize: "1.125rem",
            }}
          >
            Registration Analytics
          </Typography>
        </Box>

        {/* Overview Cards */}
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
        <Grid container spacing={3} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, sm: 6, lg: 2.4 }}>
=======
        <Grid container spacing={3} sx={{mb: 8}}>
          <Grid size={{xs: 12, md: 6, lg: 3}}>
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
            <StatCard
              icon={<GroupIcon />}
              value={totalRegistrations}
              label="Teams"
            />
          </Grid>
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
          <Grid size={{ xs: 12, sm: 6, lg: 2.4 }}>
            <StatCard
              icon={<PersonIcon />}
              value={totalParticipants}
              label="Participants"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 2.4 }}>
=======
          <Grid size={{xs: 12, md: 6, lg: 3}}>
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
            <StatCard
              icon={<CodeIcon />}
              value={Object.keys(languageStats).length}
              label="Programming Languages"
            />
          </Grid>
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
          <Grid size={{ xs: 12, sm: 6, lg: 2.4 }}>
=======
          <Grid size={{xs: 12, md: 6, lg: 3}}>
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
            <StatCard
              icon={<SchoolIcon />}
              value={Object.keys(schoolStats).length}
              label="Schools"
            />
          </Grid>
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
          <Grid size={{ xs: 12, sm: 6, lg: 2.4 }}>
=======
          <Grid size={{xs: 12, md: 6, lg: 3}}>
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
            <StatCard
              icon={<LocationIcon />}
              value={Object.keys(locationStats).length}
              label="Locations"
            />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {/* Team Registrations Table */}
          <Grid size={{ xs: 12 }}>
            <StatsCard title="Team Registrations">
              <TableContainer
                sx={{
                  borderRadius: 1,
                  border: "1px solid #e5e7eb",
                  "& .MuiTableCell-root": {
                    borderColor: "#f3f4f6",
                    py: 2,
                  },
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow
                      sx={{
                        background: "#f9fafb",
                        "& .MuiTableCell-head": {
                          fontWeight: 600,
                          color: "#374151",
                          fontSize: "0.875rem",
                          py: 2,
                        },
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
                      }}
                    >
=======
                      }}>
                      <TableCell>ID</TableCell>
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
                      <TableCell>Team</TableCell>
                      <TableCell>School</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Languages</TableCell>
                      <TableCell>Media Consent</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {registrations.map((registration) => (
                      <TableRow key={registration.id}>
                        <TableCell>
                          <Typography
                            variant="subtitle2"
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
                            sx={{ fontWeight: 600, color: "#111827" }}
                          >
                            {registration.teamName}
=======
                            sx={{fontWeight: 600, color: "#111827"}}>
                            {registration.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="subtitle2"
                            sx={{fontWeight: 600, color: "#111827"}}>
                            {registration.team_name}
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: "#374151" }}>
                            {registration.school}
                          </Typography>
                        </TableCell>
                        <TableCell>
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
                          <Typography variant="body2" sx={{ color: "#6b7280" }}>
                            {registration.schoolLocation}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: "#6b7280" }}>
                            {registration.teamEmail}
=======
                          <Typography variant="body2" sx={{color: "#6b7280"}}>
                            {registration.school_address}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{color: "#6b7280"}}>
                            {registration.team_email}
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
                            sx={{
                              display: "flex",

                              gap: 1,
                            }}
                          >
                            {registration.teamMembers.map((member, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  bgcolor: "#f9fafb",
                                  p: 1,
                                  borderRadius: 1,
                                  width: 100,

                                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: 500, color: "#111827" }}
                                >
                                  {member.name}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{ color: "#6b7280" }}
                                >
                                  {member.role}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {registration.programmingLanguages.map((lang) => (
=======
                            sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                            {registration.prog_languages.map((lang) => (
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
                              <Chip
                                key={lang}
                                label={lang}
                                size="small"
                                sx={{
                                  background: "#f3f4f6",
                                  color: "#374151",
                                  fontWeight: 500,
                                  fontSize: "0.75rem",
                                  height: 24,
                                  "& .MuiChip-label": {
                                    px: 1,
                                  },
                                }}
                              />
                            ))}
                            {registration.other_prog_languages && (
                              <Chip
                                label={registration.other_prog_languages}
                                size="small"
                                sx={{
                                  background: "#e0f2fe",
                                  color: "#0369a1",
                                  fontWeight: 500,
                                  fontSize: "0.75rem",
                                  height: 24,
                                  "& .MuiChip-label": {
                                    px: 1,
                                  },
                                }}
                              />
                            )}
                          </Box>
                        </TableCell>
                        <TableCell>
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
                          <Box sx={{ display: "flex", gap: 1 }}>
                            {registration.mediaConsent.photo ? (
=======
                          <Box sx={{display: "flex", gap: 1}}>
                            {registration.media_consent.photo ? (
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
                              <Chip
                                icon={<Check />}
                                label="Photo"
                                size="small"
                                color="success"
                              />
                            ) : (
                              <Chip
                                icon={<Cancel />}
                                label="Photo"
                                size="small"
                                color="default"
                              />
                            )}
                            {registration.media_consent.video ? (
                              <Chip
                                icon={<Check />}
                                label="Video"
                                size="small"
                                color="success"
                              />
                            ) : (
                              <Chip
                                icon={<Cancel />}
                                label="Video"
                                size="small"
                                color="default"
                              />
                            )}
                          </Box>
                        </TableCell>
                        <TableCell>
<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
                          <Typography variant="body2" sx={{ color: "#6b7280" }}>
                            {registration.submittedAt.toLocaleDateString()}
=======
                          <Typography variant="body2" sx={{color: "#6b7280"}}>
                            {new Date(
                              registration.created_at
                            ).toLocaleDateString()}
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </StatsCard>
          </Grid>

          {/* Programming Languages */}
          <Grid size={{ xs: 12, md: 6 }}>
            <StatsCard title="Programming Languages">
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {Object.entries(languageStats)
                  .sort(([, a], [, b]) => b - a)
                  .map(([language, count]) => (
                    <Box key={language}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#111827" }}
                        >
                          {language}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6b7280", fontSize: "0.875rem" }}
                        >
                          {count}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={(count / totalRegistrations) * 100}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          background: "#f3f4f6",
                          "& .MuiLinearProgress-bar": {
                            background: "#111827",
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                  ))}
              </Box>
            </StatsCard>
          </Grid>

          {/* Schools */}
          <Grid size={{ xs: 12, md: 6 }}>
            <StatsCard title="Schools & Universities">
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {Object.entries(schoolStats)
                  .sort(([, a], [, b]) => b - a)
                  .map(([school, count]) => (
                    <Box key={school}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#111827" }}
                        >
                          {school}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#6b7280", fontSize: "0.875rem" }}
                        >
                          {count}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </StatsCard>
          </Grid>

<<<<<<< HEAD:src/page/RegistrationStatistics.tsx
          {/* Role Distribution */}
          <Grid size={{ xs: 12, md: 6 }}>
            <StatsCard title="Role Distribution">
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {Object.entries(roleStats).map(([role, count]) => (
                  <Box key={role}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#111827" }}
                      >
                        {role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#6b7280", fontSize: "0.875rem" }}
                      >
                        {count}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </StatsCard>
          </Grid>

=======
>>>>>>> 4ff65c9a8302e02c09523b7420f4e67e8cc21fce:src/page/admin/RegistrationStatistics.tsx
          {/* Media Consent */}
          <Grid size={{ xs: 12, md: 6 }}>
            <StatsCard title="Media Consent">
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, color: "#111827" }}
                    >
                      Photo Consent
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {Math.round(
                        (mediaConsentStats.photo / totalRegistrations) * 100
                      )}
                      %
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(mediaConsentStats.photo / totalRegistrations) * 100}
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
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, color: "#111827" }}
                    >
                      Video Consent
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {Math.round(
                        (mediaConsentStats.video / totalRegistrations) * 100
                      )}
                      %
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(mediaConsentStats.video / totalRegistrations) * 100}
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
              </Box>
            </StatsCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
