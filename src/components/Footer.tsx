import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  TextField,
  Stack,
} from "@mui/material";

import PropTechLogoWhite from "../assets/images/proptech-logo-white.png";

import SendIcon from "@mui/icons-material/Send";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SocialButtonFooter from "../utils/SocialButtonFooter";

const SocialLinks = [
  {icon: <FacebookIcon />, url: "https://www.facebook.com/proptech.ng"},
  {icon: <InstagramIcon />, url: "https://www.instagram.com/proptech.ng/"},
  {icon: <XIcon />, url: "https://twitter.com/PropTech_NG"},
  {icon: <LinkedInIcon />, url: "https://www.linkedin.com/company/proptech-ng"},
];

const ContactInfo = [
  {
    icon: <LocalPhoneIcon />,
    text: "(032) 254-8900",
    link: "tel:+234-1-234-5678",
  },
  {
    icon: <EmailIcon />,
    text: "info@filipinohomes.com",
    link: "mailto:q3q6B@example.com",
  },
  {
    icon: <LocationOnIcon />,
    text: "Cebu City, Philippines",
    link: "https://www.google.com/maps/place/123+Main+St,+City,+Country",
  },
];

export default function Footer() {
  return (
    <Box component={"footer"} sx={{color: "white"}}>
      {/* Upper Footer Section */}
      <Box sx={{backgroundColor: "#00165E"}}>
        <Container
          maxWidth="xl"
          sx={{
            py: {xs: 3, md: 5},
            px: {xs: 2, sm: 3, md: 4},
          }}>
          {/* Call to Action Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
              justifyContent: "space-between",
              alignItems: {xs: "flex-start", md: "center"},
              gap: {xs: 3, md: 0},
            }}>
            <Typography
              variant="h4"
              sx={{
                lineHeight: {xs: "40px", sm: "50px", md: "60px"},
                fontWeight: 600,
                fontSize: {xs: "32px", sm: "45px", md: "60px"},
              }}>
              Let's{" "}
              <Typography
                component={"span"}
                sx={{
                  color: "#5174FF",
                  lineHeight: {xs: "40px", sm: "50px", md: "60px"},
                  fontWeight: 600,
                  fontSize: {xs: "32px", sm: "45px", md: "60px"},
                }}>
                Build
              </Typography>{" "}
              Together
            </Typography>
            <Button
              sx={{
                backgroundColor: "#5174FF",
                width: {xs: "100%", sm: "236px"},
                height: {xs: "50px", sm: "65px"},
                color: "white",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "40px",
                fontSize: {xs: "18px", sm: "22px", md: "25px"},
              }}>
              Contact Us
            </Button>
          </Box>

          <Divider
            sx={{my: {xs: 2, md: 3}, backgroundColor: "#254082", height: "2px"}}
          />

          {/* Main Footer Content */}
          <Box
            sx={{
              mt: {xs: 3, md: 5},
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
              width: "100%",
              justifyContent: "space-between",
              alignItems: {xs: "flex-start", md: "flex-start"},
              gap: {xs: 4, md: 2},
            }}>
            {/* Logo and Social Section */}
            <Box
              sx={{
                width: "100%",
                maxWidth: {xs: "100%", md: "22em"},
              }}>
              <Button LinkComponent={"a"}>
                <Typography
                  component={"img"}
                  src={PropTechLogoWhite}
                  alt="PropTech"
                  draggable={false}
                  sx={{
                    height: "auto",
                    maxWidth: {xs: "180px", sm: "200px", md: "100%"},
                  }}
                />
              </Button>
              <Typography
                sx={{
                  my: {xs: 2, md: 3},
                  fontSize: {xs: "14px", sm: "16px", md: "inherit"},
                }}>
                Discover cutting-edge technology designed to elevate your
                experience and drive the future.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}>
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

            {/* Contact Section */}
            <Box
              sx={{
                width: "100%",
                maxWidth: {xs: "100%", md: "22em"},
              }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  fontSize: {xs: "24px", sm: "26px", md: "30px"},
                }}>
                Contact
              </Typography>

              <Box>
                <ul style={{padding: 0, margin: 0}}>
                  {ContactInfo.map((info, index) => (
                    <Box
                      component={"li"}
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#fff",
                        textDecoration: "none",
                        p: 0,
                        my: {xs: 1, md: 1.5},
                      }}>
                      <Typography
                        component={"a"}
                        href={info.link}
                        sx={{
                          color: "#fff",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          "&:hover": {color: "#5174FF"},
                        }}>
                        {info.icon}
                        <Typography
                          variant="body2"
                          sx={{
                            ml: 1,
                            fontSize: {xs: "16px", sm: "18px", md: "20px"},
                          }}>
                          {info.text}
                        </Typography>
                      </Typography>
                    </Box>
                  ))}
                </ul>
              </Box>
            </Box>

            {/* Newsletter Section */}
            <Box
              sx={{
                width: "100%",
                maxWidth: {xs: "100%", md: "22em"},
              }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 500,
                  fontSize: {xs: "24px", sm: "26px", md: "30px"},
                  mb: {xs: 2, md: 0},
                }}>
                Get Latest Information
              </Typography>

              <Box
                sx={{
                  mb: {xs: 4, md: 10},
                  mt: 3,
                  display: "flex",
                }}>
                <TextField
                  label="Email Address"
                  variant="standard"
                  fullWidth
                  slotProps={{input: {disableUnderline: true}}}
                  sx={{
                    backgroundColor: "#243A83",
                    color: "white",
                    pl: {xs: 2, sm: 3, md: 5},
                    borderTopLeftRadius: "40px",
                    borderBottomLeftRadius: "40px",
                    pb: 2,
                    width: {xs: "calc(100% - 67px)", md: "auto"},
                    "& .MuiInputBase-input": {
                      color: "white",
                      fontSize: {xs: "14px", sm: "16px", md: "inherit"},
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                      marginLeft: "10px",
                      fontSize: {xs: "14px", sm: "16px", md: "inherit"},
                    },
                  }}
                />
                <Button
                  aria-label="Submit"
                  sx={{
                    width: "67px",
                    height: {xs: "56px", sm: "65px"},
                    backgroundColor: "#5174FF",
                    borderRadius: 0,
                    padding: 0,
                    margin: 0,
                    borderTopRightRadius: "40px",
                    borderBottomRightRadius: "40px",
                  }}>
                  <SendIcon sx={{color: "white"}} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Copyright Section */}
      <Box sx={{backgroundColor: "#5174FF"}}>
        <Container
          maxWidth="xl"
          sx={{
            py: {xs: 2, md: 2},
            px: {xs: 2, sm: 3, md: 4},
            display: "flex",
            flexDirection: {xs: "column", sm: "row"},
            justifyContent: "space-between",
            alignItems: {xs: "center", sm: "center"},
            gap: {xs: 1, sm: 0},
          }}>
          <Typography
            sx={{
              fontSize: {xs: "14px", sm: "16px", md: "20px"},
              textAlign: {xs: "center", sm: "left"},
            }}>
            &copy; Copyright {new Date().getFullYear()} PropTech Philippines.
            All rights reserved
          </Typography>
          <Stack
            direction={{xs: "column", sm: "row"}}
            spacing={{xs: 0, sm: 2}}
            alignItems="center">
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: {xs: "14px", sm: "16px", md: "20px"},
                fontWeight: 400,
                py: {xs: 0.5, sm: 1},
              }}>
              User Terms & Conditions
            </Button>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: {xs: "14px", sm: "16px", md: "20px"},
                fontWeight: 400,
                py: {xs: 0.5, sm: 1},
              }}>
              Privacy Policy
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
