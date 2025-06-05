import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";

import innImg from "../../assets/images/Innovative.png";
import longImg from "../../assets/images/longTerm.png";
import agImg from "../../assets/images/Agile.png";
import tpImg from "../../assets/images/Transparent.png";
import fImg from "../../assets/images/Fast.png";
import sImg from "../../assets/images/Speak.png";
import bImg from "../../assets/images/bell.png";

import OutlinedTitle from "../../utils/OutlinedTitle";

export default function WhyAboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={"section"}
      id="why-choose-us"
      sx={{ py: { xs: 10, sm: 12, md: 10 } }} // Increased overall vertical padding even more
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            px: { xs: 2, sm: 3, md: 5 },
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 6, md: 8 }, // Increased margin-bottom for title/text
          }}
        >
          <OutlinedTitle
            variant="h2"
            strokeColor="black"
            fillColor="transparent"
            strokeWidth={1}
            sx={{
              textAlign: "left",
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
            Why Choose Us?
          </OutlinedTitle>
          <Typography
            variant="body1"
            sx={{
              mt: { xs: 3, sm: 3.5, md: 4 },
              fontFamily: "NATS",
              fontSize: { xs: "44px", sm: "54px", md: "64px" }, // Slightly larger main text
              lineHeight: { xs: "49px", sm: "64px", md: "74px" },
            }}
          >
            We Bring Your{" "}
            <Typography
              component={"span"}
              sx={{
                fontFamily: "NATS",
                color: "#4B237B",
                fontSize: { xs: "44px", sm: "54px", md: "64px" },
                lineHeight: { xs: "49px", sm: "64px", md: "74px" },
              }}
            >
              Vision to Life.
            </Typography>
          </Typography>
        </Box>

        {/* Main container with more mt and gap */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
          }}
        >
          {" "}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 10,
              maxWidth: "1400px",
              mx: "auto",
            }}
          >
            {/* First Box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: 4,
                borderRadius: 2,
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box sx={{ mr: 4, display: "flex", alignItems: "center" }}>
                {" "}
                <img
                  src={`${innImg}`}
                  alt="Innovative"
                  width={70}
                  height={80}
                  style={{ borderRadius: 8 }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: "1.8em" }}
                >
                  {" "}
                  Innovative and scalable solutions
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.2em" }}
                >
                  Future-ready systems built to grow and adapt with your
                  business.
                </Typography>
              </Box>
            </Box>

            {/* Second Box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: 4,
                borderRadius: 2,
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box sx={{ mr: 4, display: "flex", alignItems: "center" }}>
                <img
                  src={`${longImg}`}
                  alt="longTerm"
                  width={70}
                  height={80}
                  style={{ borderRadius: 8 }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: "1.8em" }}
                >
                  Long-term tech partnership
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.2em" }}
                >
                  A dedicated partner for continuous growth and innovation.
                </Typography>
              </Box>
            </Box>

            {/* Third Box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: 4,
                borderRadius: 2,
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box sx={{ mr: 4, display: "flex", alignItems: "center" }}>
                <img
                  src={`${agImg}`}
                  alt="Agile"
                  width={70}
                  height={80}
                  style={{ borderRadius: 8 }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: "1.8em" }}
                >
                  Agile development process
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.2em" }}
                >
                  Flexible, fast, and collaborative development at every stage.
                </Typography>
              </Box>
            </Box>

            {/* Fourth Box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: 4,
                borderRadius: 2,
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box sx={{ mr: 4, display: "flex", alignItems: "center" }}>
                <img
                  src={`${tpImg}`}
                  alt="Transparent"
                  width={70}
                  height={80}
                  style={{ borderRadius: 8 }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: "1.8em" }}
                >
                  Transparent pricing
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.2em" }}
                >
                  Clear, upfront pricing with no surprises.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Fifth Box with more mt and padding */}
          <Box
            sx={{
              mt: 4,
              mx: "auto",
              padding: 5,
              borderRadius: 2,
              boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              maxWidth: "700px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ mr: 4, display: "flex", alignItems: "center" }}>
              <img
                src={`${fImg}`}
                alt="Fast"
                width={70}
                height={90}
                style={{ borderRadius: 8 }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: "1.8em" }}
              >
                Fast deployment & real-time support
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "1.2em" }}
              >
                Quick implementation with reliable, always-on support.
              </Typography>
            </Box>
          </Box>
          {/* Ads */}
          <Box
            sx={{
              mt: 15,
              mx: "auto",
              padding: 4,
              borderRadius: 2,
              backgroundColor: "#FFFFFF",
              boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              width: "1400px",
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column-reverse", md: "row" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box sx={{ pb: 20 }}>
              <img
                src={`${sImg}`}
                alt="Speak"
                width={100}
                height={100}
                style={{ borderRadius: 8 }}
              />
            </Box>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  width: "350px",
                  alignItems: "left",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: "3.5em" }}
                >
                  Stay Tuned!
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#000000"
                sx={{ fontSize: "1.5em", mb: 1 }}
              >
                We're just getting started! PropTech PH is gearing up to host
                more insightful events <br /> designed to bring together
                industry leaders, innovations, and changemakers.
                <br /> Join us as we shape the future of property
                technology—together.
              </Typography>
              <Typography
                variant="body1"
                color="#17244F"
                sx={{ fontWeight: "bold", mb: 2, fontSize: "1.5em" }}
              >
                #PropTechPH #RealEstateInnovation #TechEventsPH
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "200px",
                height: "50px",
                ml: 15,
                borderRadius: 5,
                backgroundColor: "#0533B7",
                textTransform: "Capitalize",
                fontSize: "1.2em",
              }}
            >
              Get Notified!
              <img
                src={`${bImg}`}
                alt="bell"
                width={30}
                height={30}
                style={{ borderRadius: 10, paddingLeft: 6 }}
              />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
