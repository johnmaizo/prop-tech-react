import {
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

import OutlinedTitle from "../../utils/OutlinedTitle";
import cmImg from "../../assets/images/CompanyMilestoneBackground.png";

export default function CompanyMilestone() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={"section"}
      id="company-milestone"
      sx={{
        py: { xs: 10, sm: 12, md: 10 },
        mb: { xs: 2, md: 8 },
        mr: { xs: 2, md: 15 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            px: { xs: 2, sm: 3, md: 5 },
            mt: { xs: 1, md: -10 },
            mb: { xs: 6, md: 8 },
          }}
        >
          <OutlinedTitle
            variant="h2"
            strokeColor="black"
            fillColor="transparent"
            strokeWidth={1}
            sx={{
              fontSize: { xs: "30px", sm: "34px", md: "38px" },
              lineHeight: { xs: "24px", sm: "26px", md: "27px" },
              color: "black",
              "&::before": {
                color: "black",
              },
              "&::after": {
                left: { xs: isMobile ? 0 : 12, md: 24 },
                display: { xs: "none", md: "block" },
              },
            }}
          >
            Company Milestone
          </OutlinedTitle>
        </Box>
        {/* Ads */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          {/* Your existing image, now inside the positioning wrapper */}
          <img
            src={`${cmImg}`}
            alt="CompanyMilestoneBackground"
            width={1600}
            height={380}
            style={{
              borderRadius: 8,
              maxWidth: "100%",
              height: "auto",
              display: "block",
            }}
          />
          <Box
            sx={{
              width: "1600px",
              height: "auto",
              display: "flex",
            }}
          >
            {/* Horizontal */}
            <Box
              sx={{
                position: "absolute",
                top: "58%",
                left: "55%",
                transform: "translate(-50%, -50%)",
                width: { xs: "80%", md: "calc(100% - 250px)" },
                height: "2px",
                backgroundColor: "white",
                zIndex: 1,
              }}
            />
            {/* Vertical */}
            <Box
              sx={{
                position: "absolute",
                top: "58%",
                left: "13.5%",
                transform: "translate(-50%, -50%)",
                width: "3px",
                height: { xs: "80%", md: "calc(100% - 180px)" },
                backgroundColor: "white",
                zIndex: 1,
              }}
            />

            {/* Dots */}
            <Box
              sx={{
                position: "absolute",
                top: "58%",
                left: "39%",
                transform: "translate(-50%, -50%)",
                width: "10px",
                height: { xs: "80%", md: "calc(100% - 305px)" },
                backgroundColor: "white",
                borderRadius: "90%",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "58%",
                left: "68%",
                transform: "translate(-50%, -50%)",
                width: "10px",
                height: { xs: "80%", md: "calc(100% - 305px)" },
                backgroundColor: "white",
                borderRadius: "90%",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "58%",
                left: "96.5%",
                transform: "translate(-50%, -50%)",
                width: "10px",
                height: { xs: "80%", md: "calc(100% - 305px)" },
                backgroundColor: "white",
                borderRadius: "90%",
                zIndex: 1,
              }}
            />
            {/* Dots */}
            <Typography
              sx={{
                zIndex: 1,
                position: "absolute",
                top: "36%",
                left: "14%",
                fontSize: "1.4em",
                color: "white",
              }}
            >
              HACKESTATE: HACKATHON 2025 <br />
              CEBU CITY
            </Typography>
            <Typography
              sx={{
                zIndex: 1,
                position: "absolute",
                top: "48%",
                left: "5%",
                fontSize: "2.5em",
                fontWeight: "bold",
                color: "white",
              }}
            >
              2025
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
