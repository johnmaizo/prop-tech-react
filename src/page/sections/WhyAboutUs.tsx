import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";

import { motion } from "framer-motion";

import innImg from "../../assets/images/Innovative.png";
import longImg from "../../assets/images/longTerm.png";
import agImg from "../../assets/images/Agile.png";
import tpImg from "../../assets/images/Transparent.png";
import fImg from "../../assets/images/Fast.png";
import sImg from "../../assets/images/Speak.png";
import bImg from "../../assets/images/bell.png";

import OutlinedTitle from "../../utils/OutlinedTitle";

// Create MotionBox for animation
const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function WhyAboutUs() {
  const theme = useTheme();
  // isMobile condition is already used for OutlinedTitle
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Less than or equal to 600px

  return (
    <Box
      component={"section"}
      id="why-choose-us"
      sx={{ py: { xs: 10, sm: 12, md: 10 } }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            px: { xs: 2, sm: 3, md: 5 },
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 6, md: 8 },
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
                left: { xs: 0, sm: isMobile ? 12 : 24, md: 24 },
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
              fontSize: { xs: "44px", sm: "54px", md: "64px" },
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

        {/* Main container for all feature boxes */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Stacks on mobile, 2 columns on desktop
              gap: { xs: 5, md: 10 },
              maxWidth: "1400px",
              mx: "auto",
              px: { xs: 2, sm: 0 },
            }}
          >
            {/* First Box  */}
            <MotionBox
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: { xs: 3, md: 4 },
                borderRadius: 2,
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <Box
                sx={{
                  mr: { xs: 2, md: 4 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={`${innImg}`}
                  alt="Innovative"
                  width={70}
                  height={80}
                  style={{ borderRadius: 8, maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: "1.6em", md: "1.8em" } }}
                >
                  Innovative and scalable solutions
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "1.3em", md: "1.2em" } }}
                >
                  Future-ready systems built to grow and adapt with your
                  business.
                </Typography>
              </Box>
            </MotionBox>

            {/* Second Box  */}
            <MotionBox
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: { xs: 3, md: 4 },
                borderRadius: 2,
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <Box
                sx={{
                  mr: { xs: 2, md: 4 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={`${longImg}`}
                  alt="longTerm"
                  width={70}
                  height={80}
                  style={{ borderRadius: 8, maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: "1.6em", md: "1.8em" } }}
                >
                  Long-term tech partnership
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "1.3em", md: "1.2em" } }}
                >
                  A dedicated partner for continuous growth and innovation.
                </Typography>
              </Box>
            </MotionBox>

            {/* Third Box */}
            <MotionBox
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: { xs: 3, md: 4 },
                borderRadius: 2,
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <Box
                sx={{
                  mr: { xs: 2, md: 4 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={`${agImg}`}
                  alt="Agile"
                  width={70}
                  height={80}
                  style={{ borderRadius: 8, maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: "1.6em", md: "1.8em" } }}
                >
                  Agile development process
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "1.3em", md: "1.2em" } }}
                >
                  Flexible, fast, and collaborative development at every stage.
                </Typography>
              </Box>
            </MotionBox>

            {/* Fourth Box */}
            <MotionBox
              sx={{
                display: "flex",
                alignItems: "flex-start",
                padding: { xs: 3, md: 4 },
                borderRadius: 2,
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <Box
                sx={{
                  mr: { xs: 2, md: 4 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={`${tpImg}`}
                  alt="Transparent"
                  width={70}
                  height={80}
                  style={{ borderRadius: 8, maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: "1.6em", md: "1.8em" } }}
                >
                  Transparent pricing
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "1.3em", md: "1.2em" } }}
                >
                  Clear, upfront pricing with no surprises.
                </Typography>
              </Box>
            </MotionBox>
          </Box>

          {/* Fifth Box  */}
          <MotionBox
            sx={{
              mt: { xs: 0.5, sm: 0.5, md: 4 },
              mx: "auto",
              padding: { xs: 3, md: 5 },
              borderRadius: 2,
              boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              maxWidth: { xs: "85%", sm: "85%", md: "700px" },
              width: "90%",
              display: "flex",
              alignItems: "flex-start",
              px: { xs: 2, sm: 2 },
            }}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.2 },
            }}
          >
            <Box
              sx={{
                mr: { xs: 2, md: 4 },
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={`${fImg}`}
                alt="Fast"
                width={70}
                height={90}
                style={{ borderRadius: 8, maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: "1.6em", md: "1.8em" } }}
              >
                Fast deployment & real-time support
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { xs: "1.3em", md: "1.2em" } }}
              >
                Quick implementation with reliable, always-on support.
              </Typography>
            </Box>
          </MotionBox>

          {/* Ads */}
          <MotionBox
            whileHover="shakeImage"
            variants={{
              shakeImage: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            sx={{
              mt: { xs: 10, md: 15 },
              mx: "auto",
              padding: { xs: 3, md: 4 },
              borderRadius: 2,
              backgroundColor: "#FFFFFF",
              boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
              width: { xs: "90%", md: "100%" },
              maxWidth: { xs: "700px", md: "1400px" },
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column-reverse", md: "row" },
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, sm: 0 },
            }}
          >
            <MotionBox
              variants={{
                shakeImage: {
                  x: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.6 },
                },
              }}
              sx={{
                pb: { xs: -3, md: 20 },
                pr: { xs: 0, md: 4 },
              }}
            >
              <img
                src={`${sImg}`}
                alt="Speak"
                width={100}
                height={100}
                style={{ borderRadius: 8, maxWidth: "100%", height: "auto" }}
              />
            </MotionBox>

            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                width: "100%",
                maxWidth: { xs: "100%", md: "350px", lg: "950px" },
                alignItems: "left",
                flexGrow: 1,
                mb: { xs: 3, md: 0 },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: "2.5em", sm: "3em", md: "3.5em" } }}
              >
                Stay Tuned!
              </Typography>
              <Typography
                variant="body1"
                color="#000000"
                sx={{
                  fontSize: { xs: "1.2em", md: "1.5em" },
                  mb: { xs: 0.5, md: 1 },
                }}
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
                sx={{
                  fontWeight: "bold",
                  mb: { xs: 1, md: 2 },
                  fontSize: { xs: "1.2em", md: "1.5em" },
                }}
              >
                #PropTechPH #RealEstateInnovation #TechEventsPH
              </Typography>
            </Box>

            <MotionButton
              variant="contained"
              size="large"
              whileHover="swing"
              sx={{
                width: { xs: "70%", sm: "200px" },
                height: { xs: "45px", sm: "50px" },
                mt: { xs: 3, md: 0 },
                ml: { xs: 0, md: 10 },
                borderRadius: 5,
                backgroundColor: "#0533B7",
                textTransform: "Capitalize",
                fontSize: { xs: "1em", md: "1.2em" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Get Notified!
              <motion.img
                variants={{
                  swing: {
                    rotate: [0, 15, -15, 10, -10, 5, 0],
                    transition: { duration: 0.8 },
                  },
                }}
                src={`${bImg}`}
                alt="bell"
                width={30}
                height={30}
                style={{
                  borderRadius: 10,
                  paddingLeft: 6,
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </MotionButton>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
