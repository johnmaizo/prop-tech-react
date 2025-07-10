import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Paper,
  Container,
  Button,
} from "@mui/material";

import PropTechLogo from "../assets/images/proptech-logo.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSignedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoggingIn(true);
    setTimeout(() => {
      console.log("Logging in with:", formData);
      setIsLoggingIn(false);
    }, 1000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "100%", maxWidth: "40em" }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 2,
                backgroundColor: "transparent",
                border: "1px solid",
                borderColor: "grey.100",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src={PropTechLogo}
                  alt="PropTech"
                  sx={{
                    height: "5em",
                    aspectRatio: "auto 50 / 50",
                    width: "15em",
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  //   fontSize: {xs: "1.5rem", md: "2.5rem"},
                  fontSize: "1.5rem",
                  my: 4,
                  textAlign: "center",
                  color: "black",
                }}
              >
                Sign in to your account
              </Typography>
              <Box onSubmit={handleSubmit} component="form">
                <TextField
                  fullWidth
                  label="Email address"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    mb: 2.5,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f8fafc",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#f8fafc",
                    },
                  }}
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  loading={isLoggingIn}
                  loadingIndicator="Signing in..."
                  disabled={isSignedIn}
                  sx={{
                    py: 1.5,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  {isSignedIn ? "Signed In Successfully" : "Sign In"}
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
