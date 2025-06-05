import { Box, Container, Typography } from "@mui/material";

import oneImg from "../../assets/images/Vision.png"; // First image
import twoImg from "../../assets/images/Mission.png"; // Second image

export default function WhoWeAre() {
  return (
    <Box
      component="section"
      id="mission-vision"
      sx={{
        mt: { xs: 5, md: 12 },
        mb: { xs: 10, md: 25 },
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
          {/* First Image Container (Upper Left) */}
          <Box>
            <img
              src={`${oneImg}`}
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

          {/* Second Image Container (Under the first, slight right) */}
          <Box
            sx={{
              ml: { xs: 0, md: 40 },
              mt: { xs: 0, md: -28.5 },
            }}
          >
            <img
              src={`${twoImg}`}
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
                width: 15,
                height: 15,
                border: "2px solid #914EFF",
                transform: "rotate(90deg)",
                ml: 41,
                mt: -95,
              }}
            />
            <Box
              sx={{
                width: 25,
                height: 25,
                border: "2px solid #914EFF",
                transform: "rotate(90deg)",
                ml: 37,
                mt: -6,
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
                textDecoration: "none",
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
              width: 15,
              height: 15,
              border: "2px solid #914EFF",
              transform: "rotate(90deg)",
              ml: 113,
              mt: 4,
            }}
          />
          <Box
            sx={{
              width: 25,
              height: 25,
              border: "2px solid #914EFF",
              transform: "rotate(90deg)",
              ml: 109,
              mt: -8,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 12, sm: 16, md: 60 },
              ml: { xs: 1, md: 115 },
              mt: { xs: 1, md: -1 },
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
              textDecoration: "none",
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
