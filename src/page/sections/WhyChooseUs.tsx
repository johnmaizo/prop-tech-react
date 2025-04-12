import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import OutlinedTitle from "../../utils/OutlinedTitle";

const ThreeHighlight = [
  {
    image: "./InnovativeIcon.svg",
    text: "Innovative and scalable solutions",
  },
  {
    image: "./AgileIcon.svg",
    text: "Agile development process",
  },
  {
    image: "./LongTermIcon.svg",
    text: "Long-term tech partnership",
  },
];

const TwoHighlight = [
  {
    image: "./TransparentIcon.svg",
    text: "Transparent pricing",
  },
  {
    image: "./FastDeploymentIcon.svg",
    text: "Fast deployment & real-time support",
  },
];

export default function WhyChooseUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={"section"}
      id="why-choose-us"
      sx={{py: {xs: 6, sm: 8, md: 10}}}>
      <Container maxWidth="xl">
        <Box
          sx={{
            px: {xs: 2, sm: 3, md: 5},
            textAlign: {xs: "center", md: "left"},
          }}>
          <OutlinedTitle
            variant="h2"
            strokeColor="black"
            fillColor="transparent"
            strokeWidth={1}
            sx={{
              fontSize: {xs: "28px", sm: "32px", md: "35px"},
              lineHeight: {xs: "22px", sm: "24px", md: "25px"},
              color: "black",
              "&::before": {
                color: "black",
              },
              "&::after": {
                left: {xs: isMobile ? 0 : 10, md: 20},
              },
            }}>
            Why Choose Us?
          </OutlinedTitle>
          <Typography
            variant="body1"
            sx={{
              mt: {xs: 2, sm: 2.5, md: 3},
              fontFamily: "NATS",
              fontSize: {xs: "40px", sm: "50px", md: "60px"},
              lineHeight: {xs: "45px", sm: "60px", md: "70px"},
            }}>
            We Bring Your{" "}
            <Typography
              component={"span"}
              sx={{
                fontFamily: "NATS",
                color: "#4B237B",
                fontSize: {xs: "40px", sm: "50px", md: "60px"},
                lineHeight: {xs: "45px", sm: "60px", md: "70px"},
              }}>
              Vision to Life.
            </Typography>
          </Typography>
        </Box>
        <Box>
          {/* First row of highlights */}
          <Box
            sx={{
              display: "flex",
              flexDirection: {xs: "column", sm: isMobile ? "column" : "row"},
              mt: {xs: 5, sm: 8, md: 10},
              px: {xs: 2, sm: 5, md: 10},
              justifyContent: "space-between",
              alignItems: "center",
              gap: {xs: 4, sm: 2},
            }}>
            {ThreeHighlight.map((highlight, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  mb: {xs: 2, sm: 0},
                  width: {xs: "100%", sm: "33%"},
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Typography
                  component={"img"}
                  src={highlight.image}
                  alt=""
                  aria-hidden
                  sx={{
                    width: {xs: "80px", sm: "auto"},
                    height: "auto",
                    mb: {xs: 1, md: 2},
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {xs: "18px", sm: "22px", md: "25px"},
                    lineHeight: {xs: "26px", sm: "30px", md: "35px"},
                    width: "100%",
                    maxWidth: "10em",
                  }}>
                  {highlight.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Second row of highlights */}
          <Box
            sx={{
              display: "flex",
              flexDirection: {xs: "column", sm: "row"},
              mt: {xs: 4, sm: 6, md: 10},
              px: {xs: 2, sm: 5, md: 10},
              justifyContent: "center",
              gap: {xs: 4, sm: 10, md: 30},
              alignItems: "center",
            }}>
            {TwoHighlight.map((highlight, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  mb: {xs: 2, sm: 0},
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Typography
                  component={"img"}
                  src={highlight.image}
                  alt=""
                  aria-hidden
                  sx={{
                    width: {xs: "80px", sm: "auto"},
                    height: "auto",
                    mb: {xs: 1, md: 2},
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {xs: "18px", sm: "22px", md: "25px"},
                    lineHeight: {xs: "26px", sm: "30px", md: "35px"},
                    width: "100%",
                    maxWidth: "10em",
                  }}>
                  {highlight.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
