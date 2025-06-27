"use client";
import React from "react";
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
} from "@mui/material";
import {
  School as SchoolIcon,
  Group as GroupIcon,
  Code as CodeIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  ArrowBack,
  Check,
  Cancel,
} from "@mui/icons-material";
import {useRegistration} from "../context/RegistrationContext";
import {Link} from "react-router-dom";

// Interface alignment
export interface TeamMember {
  name: string;
  role: string;
}

export interface Registration {
  id: string;
  school: string;
  schoolLocation: string;
  teamName: string;
  teamMembers: TeamMember[];
  teamEmail: string;
  programmingLanguages: string[];
  mediaConsent: {
    photo: boolean;
    video: boolean;
  };
  termsAccepted: boolean;
  submittedAt: Date;
}

export default function MinimalStatisticsDashboard() {
  const {registrations}: {registrations: Registration[]} = useRegistration();

  // Calculate statistics (removed duplicate code)
  const totalRegistrations = registrations.length;
  const totalParticipants = registrations.reduce(
    (sum, reg) => sum + reg.teamMembers.length,
    0
  );

  const languageStats = registrations.reduce((acc, reg) => {
    reg.programmingLanguages.forEach((lang) => {
      acc[lang] = (acc[lang] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const schoolStats = registrations.reduce((acc, reg) => {
    acc[reg.school] = (acc[reg.school] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const mediaConsentStats = {
    photo: registrations.filter((reg) => reg.mediaConsent.photo).length,
    video: registrations.filter((reg) => reg.mediaConsent.video).length,
  };

  const roleStats = registrations.reduce((acc, reg) => {
    reg.teamMembers.forEach((member) => {
      acc[member.role] = (acc[member.role] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const locationStats = registrations.reduce((acc, reg) => {
    acc[reg.schoolLocation] = (acc[reg.schoolLocation] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  if (registrations.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "#fafafa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}>
        <Link
          to={"/registration"}
          style={{textDecoration: "none", color: "#6b7280"}}>
          <Typography variant="body2" sx={{mb: 4}}>
            <ArrowBack sx={{mr: 1}} />
            Back to Registration
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
              No Data Yet
            </Typography>
            <Typography variant="body2" sx={{color: "#6b7280"}}>
              Registration statistics will appear here once teams start signing
              up.
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
      }}>
      <CardContent sx={{textAlign: "center", p: 3}}>
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
          }}>
          {React.cloneElement(icon, {sx: {color: "#6b7280", fontSize: 24}})}
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
      }}>
      <CardContent sx={{p: 4}}>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "#111827",
            fontSize: "1.125rem",
          }}>
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
      }}>
      <Link
        to={"/registration"}
        style={{textDecoration: "none", color: "#6b7280"}}>
        <Typography variant="body2" sx={{mb: 4}}>
          <ArrowBack sx={{mr: 1}} />
          Back to Registration
        </Typography>
      </Link>
      <Box sx={{maxWidth: 1200, mx: "auto"}}>
        {/* Header */}
        <Box sx={{textAlign: "center", mb: 8}}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#111827",
              mb: 2,
              fontSize: {xs: "2rem", sm: "2.5rem", md: "3rem"},
              letterSpacing: "-0.025em",
            }}>
            HackEstate 2025
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#6b7280",
              fontWeight: 400,
              fontSize: "1.125rem",
            }}>
            Registration Analytics
          </Typography>
        </Box>

        {/* Overview Cards */}
        <Grid container spacing={3} sx={{mb: 8}}>
          <Grid size={{xs: 12, sm: 6, lg: 2.4}}>
            <StatCard
              icon={<GroupIcon />}
              value={totalRegistrations}
              label="Teams"
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, lg: 2.4}}>
            <StatCard
              icon={<PersonIcon />}
              value={totalParticipants}
              label="Participants"
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, lg: 2.4}}>
            <StatCard
              icon={<CodeIcon />}
              value={Object.keys(languageStats).length}
              label="Languages"
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, lg: 2.4}}>
            <StatCard
              icon={<SchoolIcon />}
              value={Object.keys(schoolStats).length}
              label="Schools"
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6, lg: 2.4}}>
            <StatCard
              icon={<LocationIcon />}
              value={Object.keys(locationStats).length}
              label="Locations"
            />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {/* Team Registrations Table */}
          <Grid size={{xs: 12}}>
            <StatsCard title="Team Registrations">
              <TableContainer
                sx={{
                  borderRadius: 1,
                  border: "1px solid #e5e7eb",
                  "& .MuiTableCell-root": {
                    borderColor: "#f3f4f6",
                    py: 2,
                  },
                }}>
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
                      }}>
                      <TableCell>Team</TableCell>
                      <TableCell>School</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Members</TableCell>
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
                            sx={{fontWeight: 600, color: "#111827"}}>
                            {registration.teamName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{color: "#374151"}}>
                            {registration.school}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{color: "#6b7280"}}>
                            {registration.schoolLocation}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{color: "#6b7280"}}>
                            {registration.teamEmail}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",

                              gap: 1,
                            }}>
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
                                }}>
                                <Typography
                                  variant="body2"
                                  sx={{fontWeight: 500, color: "#111827"}}>
                                  {member.name}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{color: "#6b7280"}}>
                                  {member.role}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                            {registration.programmingLanguages.map((lang) => (
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
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box sx={{display: "flex", gap: 1}}>
                            {registration.mediaConsent.photo ? (
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
                            {registration.mediaConsent.video ? (
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
                          <Typography variant="body2" sx={{color: "#6b7280"}}>
                            {registration.submittedAt.toLocaleDateString()}
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
          <Grid size={{xs: 12, md: 6}}>
            <StatsCard title="Programming Languages">
              <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
                {Object.entries(languageStats)
                  .sort(([, a], [, b]) => b - a)
                  .map(([language, count]) => (
                    <Box key={language}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}>
                        <Typography
                          variant="body2"
                          sx={{fontWeight: 500, color: "#111827"}}>
                          {language}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{color: "#6b7280", fontSize: "0.875rem"}}>
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
          <Grid size={{xs: 12, md: 6}}>
            <StatsCard title="Schools & Universities">
              <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
                {Object.entries(schoolStats)
                  .sort(([, a], [, b]) => b - a)
                  .map(([school, count]) => (
                    <Box key={school}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}>
                        <Typography
                          variant="body2"
                          sx={{fontWeight: 500, color: "#111827"}}>
                          {school}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{color: "#6b7280", fontSize: "0.875rem"}}>
                          {count}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </StatsCard>
          </Grid>

          {/* Role Distribution */}
          <Grid size={{xs: 12, md: 6}}>
            <StatsCard title="Role Distribution">
              <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
                {Object.entries(roleStats).map(([role, count]) => (
                  <Box key={role}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <Typography
                        variant="body2"
                        sx={{fontWeight: 500, color: "#111827"}}>
                        {role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{color: "#6b7280", fontSize: "0.875rem"}}>
                        {count}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </StatsCard>
          </Grid>

          {/* Media Consent */}
          <Grid size={{xs: 12, md: 6}}>
            <StatsCard title="Media Consent">
              <Box sx={{display: "flex", flexDirection: "column", gap: 4}}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 1,
                      mb: 1,
                    }}>
                    <Typography
                      variant="body2"
                      sx={{fontWeight: 500, color: "#111827"}}>
                      Photo Consent
                    </Typography>
                    <Typography variant="body2" sx={{color: "#6b7280"}}>
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
                    }}>
                    <Typography
                      variant="body2"
                      sx={{fontWeight: 500, color: "#111827"}}>
                      Video Consent
                    </Typography>
                    <Typography variant="body2" sx={{color: "#6b7280"}}>
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
