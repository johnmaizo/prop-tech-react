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
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

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

const teamData: TeamData[] = [
  {
    id: 1,
    name: "DEBMAC",
    code: "D4E2B1M3", // First letter, Number of unique letters
    points: 91.2,
  },
  {
    id: 2,
    name: "CTRL+ALT+ELITE",
    code: "C6T2R1L4",
    points: 86.7,
  },
  {
    id: 3,
    name: "PANTHER CODERS",
    code: "P7A1N2C5",
    points: 83.7,
  },
  {
    id: 4,
    name: "MIGHTYBANDITS",
    code: "M5I1G2B6",
    points: 83.5,
  },
  {
    id: 5,
    name: "ESTATECH",
    code: "E3S1T2C4",
    points: 81.9,
  },
  {
    id: 6,
    name: "GIT GUD",
    code: "G3I1T2",
    points: 81.8,
  },
  {
    id: 7,
    name: "CYBERKNIGHTS",
    code: "C6Y1B2K5",
    points: 81.7,
  },
  {
    id: 8,
    name: "CODEO",
    code: "C3O1D2",
    points: 80.6,
  },
  {
    id: 9,
    name: "ALPHA ONE",
    code: "A4L1P2O3",
    points: 79.9,
  },
  {
    id: 10,
    name: "TEAM AMA",
    code: "T4E1A3",
    points: 79.5,
  },
  {
    id: 11,
    name: "BEESQUIT",
    code: "B4E2S1Q5",
    points: 77.4,
  },
  {
    id: 12,
    name: "CODE LANCERS",
    code: "C4O1D2L7",
    points: 68.1,
  },
];

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
  <MilitaryTechIcon sx={{color: medalColors[0]}} />,
  <MilitaryTechIcon sx={{color: medalColors[1]}} />,
  <MilitaryTechIcon sx={{color: medalColors[2]}} />,
];

export default function HackathonTeamSelection() {
  const [selectedTeamName, setSelectedTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  // Handle team selection
  const handleTeamSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Validation
    if (!selectedTeamName || !teamCode.trim()) {
      setErrorMessage("Please select a team and enter the team code");
      setShowError(true);
      return;
    }

    const foundTeam = teamData.find(
      (team) => team.name === selectedTeamName && team.code === teamCode
    );

    if (foundTeam) {
      setSelectedTeam(foundTeam);
      setModalOpen(true);
    } else {
      setErrorMessage("Incorrect team code for the selected team");
      setShowError(true);
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

  // Get sorted teams by points (for ranking table)
  const sortedTeams = [...teamData].sort((a, b) => b.points - a.points);

  // Get top 3 teams
  const topTeams = sortedTeams.slice(0, 3);

  // Get selected team rank
  const selectedTeamRank = selectedTeam
    ? sortedTeams.findIndex((team) => team.id === selectedTeam.id) + 1
    : 0;

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
            Select your team and enter team code to view current rankings.
          </Typography>

          <Box component="form" onSubmit={handleTeamSubmit} sx={{mt: 3}}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="team-name-label">Team Name</InputLabel>
              <Select
                labelId="team-name-label"
                id="team-name-select"
                value={selectedTeamName}
                label="Team Name"
                onChange={(e) => setSelectedTeamName(e.target.value)}>
                {[...teamData]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((team) => (
                    <MenuItem key={team.id} value={team.name}>
                      {team.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <TextField
              label="Team Code"
              fullWidth
              margin="normal"
              variant="outlined"
              value={teamCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTeamCode(e.target.value)
              }
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
              fullWidth
              sx={{mt: 3, mb: 2, py: 1.5}}>
              View Team Rankings
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

          {/* Top 3 Teams Table */}
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
                {topTeams.map((team, index) => (
                  <TableRow
                    key={team.id}
                    sx={{
                      backgroundColor:
                        index === 0
                          ? "rgba(255, 215, 0, 0.1)"
                          : index === 1
                          ? "rgba(192, 192, 192, 0.1)"
                          : "rgba(205, 127, 50, 0.1)",
                    }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{display: "flex", alignItems: "center"}}>
                      {medalIcons[index]}
                      {index + 1}
                    </TableCell>
                    <TableCell>{team.name}</TableCell>
                    <TableCell align="right">{team.points}%</TableCell>
                  </TableRow>
                ))}
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
                    {/* <TableRow sx={{backgroundColor: "primary.light"}}> */}
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {selectedTeamRank}
                      </TableCell>
                      <TableCell>{selectedTeam.name}</TableCell>
                      <TableCell align="right">
                        {selectedTeam.points}%
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Points away from next rank */}
              {selectedTeamRank > 1 && (
                <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
                  Your team is{" "}
                  {(
                    sortedTeams[selectedTeamRank - 2].points -
                    selectedTeam.points
                  ).toFixed(1)}
                  % points away from the next rank.
                </Typography>
              )}
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
