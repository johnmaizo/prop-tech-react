"use client";

import React, {useState} from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Divider,
  Grid,
  Link,
  CircularProgress,
} from "@mui/material";

// --- Types ---

type MediaConsent = {
  photo: boolean;
  video: boolean;
};

export interface Participant {
  school: string;
  school_address: string;
  team_name: string;
  team_email: string;
  prog_languages: string[];
  other_prog_languages: string;
  media_consent: MediaConsent;
  terms_accepted: boolean;
}

const programmingLanguageOptions = [
  "React JS",
  "Next JS",
  "Laravel",
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "PHP",
  "C#",
  "Other",
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState<Participant>({
    school: "",
    school_address: "",
    team_name: "",
    team_email: "",
    prog_languages: [],
    other_prog_languages: "",
    media_consent: {photo: false, video: false},
    terms_accepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = <K extends keyof Participant>(
    field: K,
    value: Participant[K]
  ) => {
    setFormData((prev) => ({...prev, [field]: value}));
    if (errors[field]) setErrors((prev) => ({...prev, [field]: ""}));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.school.trim()) newErrors.school = "School is required";
    if (!formData.school_address.trim())
      newErrors.school_address = "School address is required";
    if (!formData.team_name.trim())
      newErrors.team_name = "Team name is required";
    if (!formData.team_email.trim())
      newErrors.team_email = "Team email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.team_email))
      newErrors.team_email = "Invalid email format";
    if (!formData.terms_accepted)
      newErrors.terms_accepted = "You must accept the terms.";
    if (formData.prog_languages.length === 0)
      newErrors.prog_languages = "Select at least one language";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const finalPayload = {
      ...formData,
      prog_languages: formData.other_prog_languages
        ? [...formData.prog_languages, formData.other_prog_languages.trim()]
        : formData.prog_languages,
    };

    try {
      setLoading(true);
      await axios.post(
        "https://api.leuteriorealty.com/core-system/v1/public/api/hackathon/participants",
        finalPayload,
        {headers: {"Content-Type": "application/json"}}
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Box sx={{p: 3}}>
        <Card>
          <CardContent sx={{textAlign: "center", py: 6}}>
            <Typography variant="h4" color="primary" gutterBottom>
              Registration Successful! 🎉
            </Typography>
            <Typography variant="body1" sx={{mb: 3}}>
              Thank you for registering for HackEstate 2025. We'll be in touch
              with more details soon!
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  school: "",
                  school_address: "",
                  team_name: "",
                  team_email: "",
                  prog_languages: [],
                  other_prog_languages: "",
                  media_consent: {photo: false, video: false},
                  terms_accepted: false,
                });
              }}>
              Register Another Team
            </Button>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{maxWidth: 700, mx: "auto", p: 3}}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            HackEstate 2025: Innovating Events & Real Estate
          </Typography>
          <Typography
            variant="body1"
            sx={{mb: 4, textAlign: "center", color: "text.secondary"}}>
            Please complete the form below to register your team.
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid size={{xs: 12}}>
                <TextField
                  fullWidth
                  label="School / University"
                  value={formData.school}
                  onChange={(e) => handleInputChange("school", e.target.value)}
                  error={!!errors.school}
                  helperText={errors.school}
                  required
                />
              </Grid>

              <Grid size={{xs: 12}}>
                <TextField
                  fullWidth
                  label="School Address"
                  value={formData.school_address}
                  onChange={(e) =>
                    handleInputChange("school_address", e.target.value)
                  }
                  error={!!errors.school_address}
                  helperText={errors.school_address}
                  required
                />
              </Grid>

              <Grid size={{xs: 12}}>
                <TextField
                  fullWidth
                  label="Team Name"
                  value={formData.team_name}
                  onChange={(e) =>
                    handleInputChange("team_name", e.target.value)
                  }
                  error={!!errors.team_name}
                  helperText={errors.team_name}
                  required
                />
              </Grid>

              <Grid size={{xs: 12}}>
                <TextField
                  fullWidth
                  label="Team Email"
                  type="email"
                  value={formData.team_email}
                  onChange={(e) =>
                    handleInputChange("team_email", e.target.value)
                  }
                  error={!!errors.team_email}
                  helperText={errors.team_email}
                  required
                />
              </Grid>

              <Grid size={{xs: 12}}>
                <FormControl fullWidth error={!!errors.prog_languages}>
                  <InputLabel>Programming Languages</InputLabel>
                  <Select
                    multiple
                    value={formData.prog_languages}
                    onChange={(e) =>
                      handleInputChange(
                        "prog_languages",
                        e.target.value as string[]
                      )
                    }
                    input={<OutlinedInput label="Programming Languages" />}
                    renderValue={(selected) => (
                      <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                        {(selected as string[]).map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}>
                    {programmingLanguageOptions.map((lang) => (
                      <MenuItem key={lang} value={lang}>
                        {lang}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.prog_languages && (
                    <Typography color="error" variant="caption">
                      {errors.prog_languages}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              {formData.prog_languages.includes("Other") && (
                <Grid size={{xs: 12}}>
                  <TextField
                    fullWidth
                    label="Other Language"
                    value={formData.other_prog_languages}
                    onChange={(e) =>
                      handleInputChange("other_prog_languages", e.target.value)
                    }
                  />
                </Grid>
              )}

              <Grid size={{xs: 12}}>
                <Divider sx={{my: 2}} />
                <FormControl component="fieldset">
                  <Typography variant="subtitle1">Media Consent</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.media_consent.photo}
                          onChange={(e) =>
                            handleInputChange("media_consent", {
                              ...formData.media_consent,
                              photo: e.target.checked,
                            })
                          }
                        />
                      }
                      label="I consent to being photographed"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.media_consent.video}
                          onChange={(e) =>
                            handleInputChange("media_consent", {
                              ...formData.media_consent,
                              video: e.target.checked,
                            })
                          }
                        />
                      }
                      label="I consent to being recorded on video"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>

              <Grid size={{xs: 12}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.terms_accepted}
                      onChange={(e) =>
                        handleInputChange("terms_accepted", e.target.checked)
                      }
                    />
                  }
                  label={
                    <Typography>
                      I agree to the{" "}
                      <Link href="#" target="_blank" rel="noopener">
                        Terms & Conditions
                      </Link>
                    </Typography>
                  }
                />
                {errors.terms_accepted && (
                  <Typography color="error" variant="caption">
                    {errors.terms_accepted}
                  </Typography>
                )}
              </Grid>

              <Grid size={{xs: 12}}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={loading}
                  startIcon={
                    loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }>
                  {loading ? "Submitting..." : "Register for HackEstate 2025"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
