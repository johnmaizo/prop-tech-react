import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  Fade,
  Alert,
  Snackbar,
} from "@mui/material";
import { School, Email, Business } from "@mui/icons-material";
import { validateEmail } from "../../utils/FormUtil";
import axios from "axios";

interface FormData {
  name: string;
  college: string;
  email: string;
}

interface FormErrors {
  name?: string;
  college?: string;
  email?: string;
}

export default function AddNewSchool() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    college: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "School name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "School name must be at least 2 characters";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required";
    } else if (formData.college.trim().length < 2) {
      newErrors.college = "College name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `https://api.leuteriorealty.com/core-system/v1/public/api/hackathon/invitations`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;

        setShowSuccess(true);
        setFormData({ name: "", college: "", email: "" });
        setErrors({});
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Box
      sx={{
        my: 10,
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Fade in timeout={800}>
          <Card sx={{ mt: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "white",
                    mb: 2,
                  }}
                >
                  <School sx={{ fontSize: 32 }} />
                </Box>
                <Typography variant="h4" component="h1" gutterBottom>
                  Add New School
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Enter the school details below to add a new institution
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="School Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  error={!!errors.name}
                  helperText={errors.name}
                  sx={{ mb: 3 }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <School sx={{ color: "text.secondary", mr: 1 }} />
                      ),
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="College"
                  variant="outlined"
                  value={formData.college}
                  onChange={handleInputChange("college")}
                  error={!!errors.college}
                  helperText={errors.college}
                  sx={{ mb: 3 }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <Business sx={{ color: "text.secondary", mr: 1 }} />
                      ),
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{ mb: 4 }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <Email sx={{ color: "text.secondary", mr: 1 }} />
                      ),
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #5b21b6, #7c3aed)",
                    },
                  }}
                >
                  {isSubmitting ? "Adding School..." : "Add School"}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Fade>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          School added successfully! 🎉
        </Alert>
      </Snackbar>
    </Box>
  );
}
