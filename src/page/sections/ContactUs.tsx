import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import OutlinedTitle from "../../utils/OutlinedTitle";
import ContactCardBG from "../../assets/images/ContactCardBG.jpg";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SocialButtonFooter from "../../utils/SocialButtonFooter";

const SocialLinks = [
  {icon: <FacebookIcon />, url: "https://www.facebook.com/proptech.ng"},
  {icon: <InstagramIcon />, url: "https://www.instagram.com/proptech.ng/"},
  {icon: <XIcon />, url: "https://twitter.com/PropTech_NG"},
  {icon: <LinkedInIcon />, url: "https://www.linkedin.com/company/proptech-ng"},
];

export default function ContactUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component={"section"}
      id="contact-us"
      sx={{py: {xs: 5, md: 10}, backgroundColor: "#F5F5F5"}}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", lg: "row"},
            justifyContent: "center",
            gap: {xs: 5, md: 10},
            alignItems: {xs: "center", lg: "flex-start"},
          }}>
          {/* Contact Card */}
          <Box
            sx={{
              background: `url(${ContactCardBG}) no-repeat center center`,
              backgroundSize: "cover",
              color: "white",
              width: {xs: "100%", sm: "90%", md: "80%", lg: "880px"},
              maxWidth: "880px",
              height: {xs: "auto", lg: "750px"},
              minHeight: {xs: "600px", md: "750px"},
              borderRadius: "20px",
              order: {xs: 2, lg: 1},
            }}>
            <Box
              sx={{
                height: {xs: "auto", lg: "650px"},
                p: {xs: 2, sm: 3, md: 5},
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: {xs: 4, md: 3},
              }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: {xs: "28px", sm: "32px", md: "40px"},
                    lineHeight: {xs: "30px", md: "35px"},
                  }}>
                  Address
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: {xs: "16px", sm: "18px", md: "20px"},
                    lineHeight: {xs: "22px", md: "25px"},
                  }}>
                  Cebu City, Philippines
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: {xs: "28px", sm: "32px", md: "40px"},
                    lineHeight: {xs: "30px", md: "35px"},
                  }}>
                  Contact
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: {xs: "16px", sm: "18px", md: "20px"},
                    lineHeight: {xs: "22px", md: "25px"},
                  }}>
                  (032)-254-8900
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: {xs: "16px", sm: "18px", md: "20px"},
                    lineHeight: {xs: "22px", md: "25px"},
                  }}>
                  (310)-3625-338
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: {xs: "16px", sm: "18px", md: "20px"},
                    lineHeight: {xs: "22px", md: "25px"},
                  }}>
                  (+63) 977 815 0888
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: {xs: "28px", sm: "32px", md: "40px"},
                    lineHeight: {xs: "30px", md: "35px"},
                  }}>
                  Email
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: {xs: "16px", sm: "18px", md: "20px"},
                    lineHeight: {xs: "22px", md: "25px"},
                  }}>
                  info@filipinohomes.com
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: {xs: "28px", sm: "32px", md: "40px"},
                    lineHeight: {xs: "30px", md: "35px"},
                  }}>
                  Stay Connected
                </Typography>
                <Box
                  sx={{display: "flex", alignItems: "center", gap: 1.5, mt: 2}}>
                  {SocialLinks.map((link, index) => (
                    <SocialButtonFooter
                      LinkComponent={"a"}
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {link.icon}
                    </SocialButtonFooter>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Form Section */}
          <Box
            sx={{
              width: {xs: "100%", sm: "90%", md: "80%", lg: "100%"},
              px: {xs: 2, sm: 3, md: 4, lg: 6},
              order: {xs: 1, lg: 2},
            }}>
            <OutlinedTitle
              variant="h2"
              strokeColor="black"
              fillColor="transparent"
              strokeWidth={1}
              sx={{
                fontSize: {xs: "24px", sm: "28px", md: "35px"},
                lineHeight: {xs: "20px", sm: "22px", md: "25px"},
                color: "black",
                "&::before": {
                  color: "black",
                },
                "&::after": {
                  left: {xs: 10, md: 20},
                },
              }}>
              Contact Us
            </OutlinedTitle>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                fontFamily: "NATS",
                fontSize: {xs: "36px", sm: "48px", md: "60px"},
                lineHeight: {xs: "40px", sm: "60px", md: "70px"},
              }}>
              Get Your{" "}
              <Typography
                component={"span"}
                sx={{
                  fontFamily: "NATS",
                  color: "#4B237B",
                  fontSize: {xs: "36px", sm: "48px", md: "60px"},
                  lineHeight: {xs: "40px", sm: "60px", md: "70px"},
                }}>
                Free Quote
              </Typography>{" "}
              Today!
            </Typography>

            <Box>
              {/* Form fields - First row */}
              <Box
                sx={{
                  mt: 3,
                  width: "100%",
                  display: "flex",
                  flexDirection: {xs: "column", md: "row"},
                  justifyContent: "space-between",
                  gap: 3,
                }}>
                <Box sx={{width: {xs: "100%", md: "48%"}}}>
                  <Typography
                    sx={{
                      fontSize: {xs: "16px", sm: "18px", md: "20px"},
                      lineHeight: {xs: "20px", md: "25px"},
                      color: "black",
                    }}>
                    Your Name *
                  </Typography>
                  <TextField
                    placeholder="Ex. John Doe"
                    variant="standard"
                    fullWidth
                    slotProps={{input: {disableUnderline: true}}}
                    sx={{
                      backgroundColor: "#E3E3E3",
                      color: "black",
                      border: "2px solid #868686",
                      fontFamily: "Geist",
                      fontSize: {xs: "16px", sm: "18px", md: "20px"},
                      lineHeight: {xs: "20px", md: "25px"},
                      borderRadius: "15px",
                      p: 0,
                      py: 1.4,
                      pl: 2,
                      width: "100%",
                      "& .MuiInputBase-input": {
                        color: "black",
                      },
                      "& .MuiInputLabel-root": {
                        color: "black",
                        marginLeft: "10px",
                      },
                    }}
                  />
                </Box>
                <Box sx={{width: {xs: "100%", md: "48%"}}}>
                  <Typography
                    sx={{
                      fontSize: {xs: "16px", sm: "18px", md: "20px"},
                      lineHeight: {xs: "20px", md: "25px"},
                      color: "black",
                    }}>
                    Email *
                  </Typography>
                  <TextField
                    placeholder="example@gmail.com"
                    variant="standard"
                    fullWidth
                    slotProps={{input: {disableUnderline: true}}}
                    sx={{
                      backgroundColor: "#E3E3E3",
                      color: "black",
                      border: "2px solid #868686",
                      fontFamily: "Geist",
                      fontSize: {xs: "16px", sm: "18px", md: "20px"},
                      lineHeight: {xs: "20px", md: "25px"},
                      borderRadius: "15px",
                      p: 0,
                      py: 1.4,
                      pl: 2,
                      width: "100%",
                      "& .MuiInputBase-input": {
                        color: "black",
                      },
                      "& .MuiInputLabel-root": {
                        color: "black",
                        marginLeft: "10px",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Form fields - Second row */}
              <Box
                sx={{
                  my: {xs: 3, md: 5},
                  width: "100%",
                  display: "flex",
                  flexDirection: {xs: "column", md: "row"},
                  justifyContent: "space-between",
                  gap: 3,
                }}>
                <Box sx={{width: {xs: "100%", md: "48%"}}}>
                  <Typography
                    sx={{
                      fontSize: {xs: "16px", sm: "18px", md: "20px"},
                      lineHeight: {xs: "20px", md: "25px"},
                      color: "black",
                    }}>
                    Phone *
                  </Typography>
                  <TextField
                    placeholder="Enter Phone Number"
                    variant="standard"
                    fullWidth
                    slotProps={{input: {disableUnderline: true}}}
                    sx={{
                      backgroundColor: "#E3E3E3",
                      color: "black",
                      border: "2px solid #868686",
                      fontFamily: "Geist",
                      fontSize: {xs: "16px", sm: "18px", md: "20px"},
                      lineHeight: {xs: "20px", md: "25px"},
                      borderRadius: "15px",
                      p: 0,
                      py: 1.4,
                      pl: 2,
                      width: "100%",
                      "& .MuiInputBase-input": {
                        color: "black",
                      },
                      "& .MuiInputLabel-root": {
                        color: "black",
                        marginLeft: "10px",
                      },
                    }}
                  />
                </Box>
                <Box sx={{width: {xs: "100%", md: "48%"}}}>
                  <Typography
                    sx={{
                      fontSize: {xs: "16px", sm: "18px", md: "20px"},
                      lineHeight: {xs: "20px", md: "25px"},
                      color: "black",
                    }}>
                    Service *
                  </Typography>
                  <TextField
                    placeholder="Enter Service"
                    variant="standard"
                    fullWidth
                    slotProps={{input: {disableUnderline: true}}}
                    sx={{
                      backgroundColor: "#E3E3E3",
                      color: "black",
                      border: "2px solid #868686",
                      fontFamily: "Geist",
                      fontSize: {xs: "16px", sm: "18px", md: "20px"},
                      lineHeight: {xs: "20px", md: "25px"},
                      borderRadius: "15px",
                      p: 0,
                      py: 1.4,
                      pl: 2,
                      width: "100%",
                      "& .MuiInputBase-input": {
                        color: "black",
                      },
                      "& .MuiInputLabel-root": {
                        color: "black",
                        marginLeft: "10px",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Message field */}
              <Box>
                <Typography
                  sx={{
                    fontSize: {xs: "16px", sm: "18px", md: "20px"},
                    lineHeight: {xs: "20px", md: "25px"},
                    color: "black",
                  }}>
                  Message *
                </Typography>
                <TextField
                  placeholder="Enter here"
                  multiline
                  rows={isMobile ? 5 : 8}
                  variant="standard"
                  fullWidth
                  slotProps={{input: {disableUnderline: true}}}
                  sx={{
                    backgroundColor: "#E3E3E3",
                    color: "black",
                    border: "2px solid #868686",
                    fontFamily: "Geist",
                    fontSize: {xs: "16px", sm: "18px", md: "20px"},
                    lineHeight: {xs: "20px", md: "25px"},
                    borderRadius: "15px",
                    p: 0,
                    py: 1.4,
                    pl: 2,
                    width: "100%",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                      marginLeft: "10px",
                    },
                  }}
                />
              </Box>

              {/* Submit button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {xs: "center", md: "flex-start"},
                }}>
                <Button
                  sx={{
                    mt: {xs: 3, md: 5},
                    backgroundColor: "#0533B7",
                    width: {xs: "100%", sm: "270px"},
                    height: {xs: "50px", sm: "65px"},
                    color: "white",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "40px",
                    fontSize: {xs: "18px", sm: "22px", md: "25px"},
                  }}>
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
