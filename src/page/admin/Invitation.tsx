import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Grid,
  Avatar,
  Divider,
  IconButton,
  Tooltip,
  TablePagination,
  TextField,
  InputAdornment,
  Fade,
  Skeleton,
} from "@mui/material";
import {
  Email as EmailIcon,
  School as SchoolIcon,
  Search as SearchIcon,
  Refresh as RefreshIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Send as SendIcon,
} from "@mui/icons-material";

interface Invitation {
  id: number;
  code: string;
  name: string;
  email: string;
  status: "pending" | "sent" | "accepted" | "declined";
  created_at: string;
  updated_at: string;
}

export default function InvitationPage() {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState("");
  const [sendingEmail, setSendingEmail] = useState<number | null>(null);

  const fetchInvitations = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        "https://api.leuteriorealty.com/core-system/v1/public/api/hackathon/invitations"
      );
      setInvitations(response.data.data);
    } catch (err) {
      setError("Failed to fetch invitations. Please try again.");
      console.error("Error fetching invitations: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvitations();
  }, []);

  const handleSendEmail = async (id: number) => {
    setSendingEmail(id);

    try {
      const response = await axios.post(
        `https://api.leuteriorealty.com/core-system/v1/public/api/hackathon/send-invitation/${id}`
      );

      if (response.status === 200) {
        const invitedData = response.data[0];
        let _invitations = [...invitations];
        const idxToUpdate = _invitations.findIndex(
          (inv) => inv.id === invitedData.id
        );

        _invitations[idxToUpdate].status = "sent";

        setInvitations(_invitations);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSendingEmail(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "warning";
      case "sent":
        return "info";
      case "accepted":
        return "success";
      case "declined":
        return "error";
      default:
        return "default";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const filteredInvitations = invitations.filter(
    (invitation) =>
      invitation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invitation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invitation.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedInvitations = filteredInvitations.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const statsData = [
    {
      title: "Total Invitations",
      value: invitations.length,
      icon: <PeopleIcon />,
      color: "#1976d2",
    },
    {
      title: "Pending",
      value: invitations.filter((inv) => inv.status === "pending").length,
      icon: <DashboardIcon />,
      color: "#ed6c02",
    },
    {
      title: "Sent",
      value: invitations.filter((inv) => inv.status === "sent").length,
      icon: <SendIcon />,
      color: "#0288d1",
    },
    {
      title: "Schools",
      value: new Set(invitations.map((inv) => inv.name)).size,
      icon: <SchoolIcon />,
      color: "#2e7d32",
    },
  ];

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc" }}>
        <Container maxWidth="xl" sx={{ py: 4, mt: 10 }}>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[1, 2, 3, 4].map((i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <Skeleton variant="rectangular" height={120} />
              </Grid>
            ))}
          </Grid>
          <Skeleton variant="rectangular" height={500} />
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Container maxWidth="xl" sx={{ py: 4, mt: 10 }}>
        <Fade in={true} timeout={800}>
          <Box>
            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {statsData.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Fade in={true} timeout={1000 + index * 200}>
                    <Card
                      sx={{
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #fff 0%, #f8f9ff 100%)",
                        border: "1px solid #e3f2fd",
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Avatar
                            sx={{ bgcolor: stat.color, width: 56, height: 56 }}
                          >
                            {stat.icon}
                          </Avatar>
                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 700, color: stat.color }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {stat.title}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>

            {/* Error Alert */}
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            {/* Main Content Card */}
            <Card
              sx={{
                background: "linear-gradient(135deg, #fff 0%, #f8f9ff 100%)",
                border: "1px solid #e3f2fd",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Table Header */}
                <Box sx={{ p: 3, borderBottom: "1px solid #e0e0e0" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      University Invitations
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <TextField
                        size="small"
                        placeholder="Search invitations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          },
                        }}
                        sx={{ minWidth: 250 }}
                      />
                      <Tooltip title="Refresh Data">
                        <IconButton onClick={fetchInvitations} color="primary">
                          <RefreshIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Box>

                {/* Table */}
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                        <TableCell sx={{ fontWeight: 600 }}>#</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>
                          Institution
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Created</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedInvitations.map((invitation, index) => (
                        <TableRow
                          key={invitation.id}
                          sx={{
                            "&:hover": { bgcolor: "#f8f9ff" },
                            transition: "background-color 0.2s ease",
                          }}
                        >
                          <TableCell>
                            <Box
                              sx={{
                                fontFamily: "monospace",
                                bgcolor: "#e3f2fd",
                                color: "#1976d2",
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                display: "inline-block",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                              }}
                            >
                              {/* {invitation.code} */}
                              {index + 1}
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Avatar
                                sx={{
                                  bgcolor: "#1976d2",
                                  width: 32,
                                  height: 32,
                                }}
                              >
                                <SchoolIcon sx={{ fontSize: 16 }} />
                              </Avatar>
                              <Box>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: 500 }}
                                >
                                  {invitation.name}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <EmailIcon sx={{ fontSize: 16, color: "#666" }} />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {invitation.email}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={invitation.status.toUpperCase()}
                              color={getStatusColor(invitation.status)}
                              size="small"
                              sx={{
                                fontWeight: 500,
                                color: "white",
                                borderRadius: 1,
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" color="text.secondary">
                              {formatDate(invitation.created_at)}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              size="small"
                              startIcon={
                                sendingEmail === invitation.id ? (
                                  <CircularProgress size={16} />
                                ) : (
                                  <SendIcon />
                                )
                              }
                              onClick={() => handleSendEmail(invitation.id)}
                              disabled={sendingEmail === invitation.id}
                              sx={{
                                borderColor: "#1976d2",
                                color: "#1976d2",
                                "&:hover": {
                                  bgcolor: "#1976d2",
                                  color: "white",
                                },
                              }}
                            >
                              {sendingEmail === invitation.id
                                ? "Sending..."
                                : "Send Email"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                {/* Pagination */}
                <Divider />
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={filteredInvitations.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </CardContent>
            </Card>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
