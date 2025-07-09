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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  RadioGroup,
  Radio,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// --- Types ---

enum Gender {
  Male = 1,
  Female = 0,
}

type Role = "coach" | "hacker" | "hipster" | "hustler";

interface Member {
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: Gender;
  email: string;
  phone_number: string;
  fb_link: string;
  role: Role;
}

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
  members: Member[];
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

const roleOptions: Role[] = ["coach", "hacker", "hipster", "hustler"];

const createEmptyMember = (): Member => ({
  first_name: "",
  middle_name: "",
  last_name: "",
  gender: Gender.Male,
  email: "",
  phone_number: "",
  fb_link: "",
  role: "hacker",
});

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
    members: Array.from({length: 4}, () => createEmptyMember()),
  });

  const [expanded, setExpanded] = useState<number | false>(false);
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

  const handleMemberChange = (
    memberIndex: number,
    field: keyof Member,
    value: string | Gender | Role
  ) => {
    const updatedMembers = [...formData.members];
    updatedMembers[memberIndex] = {
      ...updatedMembers[memberIndex],
      [field]: value,
    };
    setFormData((prev) => ({...prev, members: updatedMembers}));

    // Clear member-specific errors
    const errorKey = `member_${memberIndex}_${field}`;
    if (errors[errorKey]) {
      setErrors((prev) => ({...prev, [errorKey]: ""}));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Basic form validation
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

    // Member validation
    formData.members.forEach((member, index) => {
      if (!member.first_name.trim()) {
        newErrors[`member_${index}_first_name`] = "First name is required";
      }
      if (!member.last_name.trim()) {
        newErrors[`member_${index}_last_name`] = "Last name is required";
      }
      if (!member.email.trim()) {
        newErrors[`member_${index}_email`] = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(member.email)) {
        newErrors[`member_${index}_email`] = "Invalid email format";
      }
      if (!member.phone_number.trim()) {
        newErrors[`member_${index}_phone_number`] = "Phone number is required";
      }
    });

    // Check for duplicate roles
    const roles = formData.members.map((member) => member.role);
    const uniqueRoles = new Set(roles);
    if (uniqueRoles.size !== roles.length) {
      newErrors.roles = "Each member must have a unique role";
    }

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

    console.log(finalPayload);

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
                  members: Array.from({length: 4}, () => createEmptyMember()),
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

              {/* Team Members Section */}
              <Grid size={{xs: 12}}>
                <Divider sx={{my: 2}} />
                <Typography variant="h6" gutterBottom>
                  Team Members (4 required)
                </Typography>
                {errors.roles && (
                  <Typography
                    color="error"
                    variant="caption"
                    display="block"
                    sx={{mb: 2}}>
                    {errors.roles}
                  </Typography>
                )}
                {formData.members.map((member, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={(_, isExpanded) =>
                      setExpanded(isExpanded ? index : false)
                    }
                    sx={{p: 0, margin: 0}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="subtitle1">
                        Member {index + 1} -{" "}
                        {member.role.charAt(0).toUpperCase() +
                          member.role.slice(1)}
                        {member.first_name && member.last_name && (
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary">
                            {` (${member.first_name} ${member.last_name})`}
                          </Typography>
                        )}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid size={{xs: 12, sm: 6}}>
                          <TextField
                            fullWidth
                            label="First Name"
                            value={member.first_name}
                            onChange={(e) =>
                              handleMemberChange(
                                index,
                                "first_name",
                                e.target.value
                              )
                            }
                            error={!!errors[`member_${index}_first_name`]}
                            helperText={errors[`member_${index}_first_name`]}
                            required
                          />
                        </Grid>
                        <Grid size={{xs: 12, sm: 6}}>
                          <TextField
                            fullWidth
                            label="Middle Name"
                            value={member.middle_name}
                            onChange={(e) =>
                              handleMemberChange(
                                index,
                                "middle_name",
                                e.target.value
                              )
                            }
                          />
                        </Grid>
                        <Grid size={{xs: 12, sm: 6}}>
                          <TextField
                            fullWidth
                            label="Last Name"
                            value={member.last_name}
                            onChange={(e) =>
                              handleMemberChange(
                                index,
                                "last_name",
                                e.target.value
                              )
                            }
                            error={!!errors[`member_${index}_last_name`]}
                            helperText={errors[`member_${index}_last_name`]}
                            required
                          />
                        </Grid>
                        <Grid size={{xs: 12, sm: 6}}>
                          <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>
                            <Select
                              value={member.gender}
                              onChange={(e) =>
                                handleMemberChange(
                                  index,
                                  "gender",
                                  e.target.value as Gender
                                )
                              }
                              label="Gender">
                              <MenuItem value={Gender.Male}>Male</MenuItem>
                              <MenuItem value={Gender.Female}>Female</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, sm: 6}}>
                          <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={member.email}
                            onChange={(e) =>
                              handleMemberChange(index, "email", e.target.value)
                            }
                            error={!!errors[`member_${index}_email`]}
                            helperText={errors[`member_${index}_email`]}
                            required
                          />
                        </Grid>
                        <Grid size={{xs: 12, sm: 6}}>
                          <TextField
                            fullWidth
                            label="Phone Number"
                            value={member.phone_number}
                            onChange={(e) =>
                              handleMemberChange(
                                index,
                                "phone_number",
                                e.target.value
                              )
                            }
                            error={!!errors[`member_${index}_phone_number`]}
                            helperText={errors[`member_${index}_phone_number`]}
                            required
                          />
                        </Grid>
                        <Grid size={{xs: 12}}>
                          <TextField
                            fullWidth
                            label="Facebook Link"
                            value={member.fb_link}
                            onChange={(e) =>
                              handleMemberChange(
                                index,
                                "fb_link",
                                e.target.value
                              )
                            }
                          />
                        </Grid>
                        <Grid size={{xs: 12}}>
                          <FormControl component="fieldset">
                            <Typography variant="subtitle2" gutterBottom>
                              Role
                            </Typography>
                            <RadioGroup
                              row
                              value={member.role}
                              onChange={(e) =>
                                handleMemberChange(
                                  index,
                                  "role",
                                  e.target.value as Role
                                )
                              }>
                              {roleOptions.map((role) => (
                                <FormControlLabel
                                  key={role}
                                  value={role}
                                  control={<Radio />}
                                  label={
                                    role.charAt(0).toUpperCase() + role.slice(1)
                                  }
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Grid>

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
