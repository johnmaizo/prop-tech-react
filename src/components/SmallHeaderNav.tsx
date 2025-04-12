import {Box, Button, Typography, Container} from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialLinks = [
  {icon: <InstagramIcon />, url: "https://www.instagram.com/proptech.ng/"},
  {icon: <FacebookIcon />, url: "https://www.facebook.com/proptech.ng"},
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

export default function SmallHeaderNav() {
  return (
    <Box sx={{backgroundColor: "#6E1B5D"}}>
      <Container maxWidth="xl"></Container>
      <Box
        sx={{
          pl: 6,
          display: {xs: "none", md: "flex"},
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        {/* Contact Information Section */}
        <Box sx={{display: "flex", gap: 5}}>
          {ContactInfo.map((info, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                textDecoration: "none",
              }}>
              <Typography
                component={"a"}
                href={info.link}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}>
                {info.icon}
                <Typography variant="body2" sx={{ml: 1}}>
                  {info.text}
                </Typography>
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Social Media Section */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 0,
            backgroundColor: "#0533B7",
            py: 1.5,
            pr: 10,
            pl: "50px",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "35px",
              height: "100%",
              backgroundColor: "#6E1B5D", // your red/burgundy color
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
              zIndex: 1,
            },
          }}>
          {SocialLinks.map((link, index) => (
            <Button
              LinkComponent={"a"}
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
                p: 0,
                m: 0,
                // width: "5px",
              }}>
              {link.icon}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
