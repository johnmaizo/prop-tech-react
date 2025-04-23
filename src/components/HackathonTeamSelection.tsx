import React, {useState} from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,} from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LockIcon from "@mui/icons-material/Lock";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

interface TeamData {
  id: number;
  name: string;
  code: string;
  points: number;
}

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs: "90%", sm: "80%", md: "60%"},
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  overflow: "auto",
};

// Medal colors for top 3
const medalColors = ["#FFD700", "#C0C0C0", "#CD7F32"];
const medalIcons = [
  <MilitaryTechIcon sx={{color: medalColors[0]}} key={0} />,
  <MilitaryTechIcon sx={{color: medalColors[1]}} key={1} />,
  <MilitaryTechIcon sx={{color: medalColors[2]}} key={2} />,
];

export default function HackathonTeamSelection() {
  const [isLoading, setIsLoading] = useState(false);
  const [teamCode, setTeamCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const handleTeamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setModalOpen(false);

    // Validation
    if (!teamCode.trim()) {
      setErrorMessage("Please enter the team code");
      setShowError(true);
      return;
    }
    if (teamCode.trim().length < 5) {
      setErrorMessage("Team code must be at least 5 characters long");
      setShowError(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get<TeamData>(
        `https://socket.leuteriorealty.com/proptech-hackathon-2025-team-data?code=${encodeURIComponent(
          teamCode.trim()
        )}`
      );
      const teamData = response.data;

      setSelectedTeam(teamData);
      setModalOpen(true);
    } catch (err) {
      console.error(err);
      setErrorMessage(
        axios.isAxiosError(err) && err.response
          ? err.response.data.message
          : "An error occurred"
      );
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = (): void => {
    setModalOpen(false);
  };

  // Close error snackbar
  const handleCloseError = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
    if (reason === "clickaway") {
      return;
    }
    setShowError(false);
  };

  return (
    <Container maxWidth="md" sx={{my: 4}}>
      {/* Team Selection Form */}
      <Card sx={{mb: 4}}>
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{display: "flex", alignItems: "center"}}>
            <EmojiEventsIcon sx={{mr: 1, color: "gold"}} />
            Visayas League Team Selection
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Enter team code to view current rankings.
          </Typography>

          <Box component="form" onSubmit={handleTeamSubmit} sx={{mt: 3}}>
            <TextField
              label="Team Code"
              fullWidth
              margin="normal"
              variant="outlined"
              value={teamCode}
              onChange={(e) => setTeamCode(e.target.value)}
              placeholder="Enter your team code"
              slotProps={{
                input: {
                  startAdornment: (
                    <LockIcon sx={{color: "text.secondary", mr: 1}} />
                  ),
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isLoading}
              startIcon={isLoading ? <LockIcon /> : <EmojiEventsIcon />}
              fullWidth
              sx={{mt: 3, mb: 2, py: 1.5}}>
              {isLoading ? "Loading..." : "View Team Rankings"}
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Rankings Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="rankings-modal-title">
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}>
            <Typography id="rankings-modal-title" variant="h5" component="h2">
              Team Rankings
            </Typography>
            <IconButton onClick={handleCloseModal} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            sx={{mb: 2, display: "flex", alignItems: "center"}}>
            Top 3 Teams
          </Typography>
          <TableContainer component={Paper} sx={{mb: 4}}>
            <Table aria-label="top teams table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight: "bold"}}>Rank</TableCell>
                  <TableCell sx={{fontWeight: "bold"}}>Team</TableCell>
                  <TableCell align="right" sx={{fontWeight: "bold"}}>
                    Percent
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Top 3 Teams with Medal Colors and Icons */}
                <TableRow sx={{backgroundColor: `${medalColors[0]}33`}}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{display: "flex", alignItems: "center"}}>
                    {medalIcons[0]}1
                  </TableCell>
                  <TableCell>DEBMAC</TableCell>
                  <TableCell align="right">91.2%</TableCell>
                </TableRow>
                <TableRow sx={{backgroundColor: `${medalColors[1]}33`}}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{display: "flex", alignItems: "center"}}>
                    {medalIcons[1]}3
                  </TableCell>
                  <TableCell>CTRL+ALT+ELITE</TableCell>
                  <TableCell align="right">86.7%</TableCell>
                </TableRow>
                <TableRow sx={{backgroundColor: `${medalColors[2]}33`}}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{display: "flex", alignItems: "center"}}>
                    {medalIcons[2]}3
                  </TableCell>
                  <TableCell>PANTHER CODERS</TableCell>
                  <TableCell align="right">83.7%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Selected Team Section */}
          {selectedTeam && (
            <>
              <Typography variant="h6" sx={{mb: 2}}>
                Your Team Stats
              </Typography>
              <TableContainer component={Paper} sx={{mb: 4}}>
                <Table aria-label="your team table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{fontWeight: "bold"}}>Rank</TableCell>
                      <TableCell sx={{fontWeight: "bold"}}>Team</TableCell>
                      <TableCell align="right" sx={{fontWeight: "bold"}}>
                        Percent
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {selectedTeam.id}
                      </TableCell>
                      <TableCell>{selectedTeam.name}</TableCell>
                      <TableCell align="right">
                        {selectedTeam.points}%
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}

          <Box sx={{mt: 3, display: "flex", justifyContent: "flex-end"}}>
            <Button onClick={handleCloseModal} variant="outlined">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Error Snackbar */}
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
        <Alert onClose={handleCloseError} severity="error" sx={{width: "100%"}}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
