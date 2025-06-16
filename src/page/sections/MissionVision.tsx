import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image2 from "../../assets/images/Mission.png"; // Mission
import Image3 from "../../assets/images/Vision.png"; // Vision

export default function WhoWeAre() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 4 }}>
        <Box>
          <img
            src={Image3}
            alt="Vision"
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
          <Typography
            variant="h6"
            align="center"
            mt={2}
            sx={{ fontSize: "30px" }}
          >
            Our Vision
          </Typography>
          <Typography align="center" px={2} sx={{ fontSize: "18px" }}>
            To bring cutting-edge digital solutions to life by combining
            innovation, strategy, and clean code — helping businesses streamline
            operations, protect data, and embrace long-term digital
            transformation.
          </Typography>
        </Box>
        <Box>
          <img
            src={Image2}
            alt="Mission"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              marginTop: 15,
            }}
          />
          <Typography
            variant="h6"
            align="center"
            mt={2}
            sx={{ fontSize: "30px" }}
          >
            Our Mission
          </Typography>
          <Typography align="center" px={2} sx={{ fontSize: "18px" }}>
            To be the trusted tech partner of choice for forward-thinking
            organizations across the Philippines and beyond — helping them
            thrive through meaningful, sustainable technology solutions.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      id="mission-vision"
      sx={{
        mt: { xs: 18, md: 12 },
        mb: { xs: 80, md: 30 },
        mr: { xs: 5, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: { xs: 1, md: 2 },
            mb: { xs: 1, md: 2 },
          }}
        >
          <Box>
            <img
              src={Image3}
              alt="Our Vision"
              width={570}
              style={{
                borderRadius: 8,
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>

          <Box
            sx={{
              ml: { xs: 0, md: 40 },
              mt: { xs: 0, md: -28.5 },
            }}
          >
            <img
              src={Image2}
              alt="Our Mission"
              width={530}
              style={{
                borderRadius: 8,
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />
            <Box
              sx={{
                width: { xs: 2, md: 15 },
                height: { xs: 2, md: 15 },
                border: "2px solid #914EFF",
                transform: "rotate(90deg)",
                ml: { xs: 0.3, md: 41 },
                mt: { xs: -93, md: -95 },
              }}
            />
            <Box
              sx={{
                width: { xs: 6, md: 25 },
                height: { xs: 6, md: 25 },
                border: "2px solid #914EFF",
                transform: "rotate(90deg)",
                ml: { xs: -1.1, md: 37 },
                mt: { xs: -2, md: -6 },
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: 12, sm: 16, md: 60 },
                ml: { xs: 1, md: 43 },
                mt: { xs: 1, md: 1 },
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{
                width: "24em",
                fontSize: { xs: 12, sm: 16, md: 28 },
                ml: { xs: 1, md: 45 },
                mt: { xs: 1, md: 1 },
                lineHeight: { xs: "24px", sm: "26px", md: "40px" },
              }}
            >
              To bring cutting-edge digital solutions to life by combining
              innovation, strategy, and clean code — helping businesses
              streamline operations, protect data, and embrace long-term digital
              transformation.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: 6, md: 25 },
              height: { xs: 6, md: 25 },
              border: "2px solid #914EFF",
              transform: "rotate(90deg)",
              ml: { xs: -1.1, md: 109 },
              mt: { xs: -2, md: 1 },
            }}
          />
          <Box
            sx={{
              width: { xs: 2, md: 15 },
              height: { xs: 2, md: 15 },
              border: "2px solid #914EFF",
              transform: "rotate(90deg)",
              ml: { xs: 0.3, md: 113 },
              mt: { xs: -93, md: -2 },
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 12, sm: 16, md: 60 },
              ml: { xs: 1, md: 115 },
              mt: { xs: 1, md: -3 },
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "24em",
              fontSize: { xs: 12, sm: 16, md: 28 },
              ml: { xs: 1, md: 117 },
              mt: { xs: 1, md: -1 },
              lineHeight: { xs: "24px", sm: "26px", md: "40px" },
            }}
          >
            To be the trusted tech partner of choice for forward-thinking
            organizations across the Philippines and beyond — helping them
            thrive through meaningful, sustainable technology solutions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
