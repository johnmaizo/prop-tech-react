import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AboutBG from "../../assets/images/AboutBG.jpg";

// Create motion variants for MUI components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Subtle background animation
  const backgroundReveal = {
    hidden: { opacity: 0.7 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <Box
      component={motion.section}
      initial="hidden"
      animate="visible"
      variants={backgroundReveal}
      ref={heroRef}
      sx={{
        // width: "100%",
        maxWidth: "100%",
        height: "800px",
        background: `url(${AboutBG})no-repeat`,
        // aspectRatio: "16/9",
        color: "white",
        backgroundSize: "100%",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #000000 35%,rgb(165, 99, 122) 100%, #4B237B 50%)",
          opacity: "25%",
        },
      }}
    >
      <Container maxWidth="xl">
        <MotionBox
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "90%", md: "45em" },
            paddingTop: 10,
            display: "flex",
            position: "relative",
            zIndex: 999,
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <Box>
            <MotionTypography
              variant="h1"
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              sx={{
                fontFamily: "Geist",
                fontSize: {
                  xs: "44px",
                  sm: "60px",
                  md: "72px",
                  lg: "80px",
                  xl: "88px",
                },
                fontWeight: 500,
                lineHeight: { xs: "44px", sm: "64px", md: "78px", lg: "88px" },
                mb: { xs: 1.5, sm: 2 },
                color: "#fff",
              }}
            >
              About Us
            </MotionTypography>
            <MotionTypography
              variant="h5"
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              sx={{
                mt: 2,
                fontWeight: 400,
                fontFamily: "Geist",
                fontSize: { xs: "24px", sm: "28px", md: "30px" },
                maxWidth: "800px",
              }}
            >
              Empowering Businesses Through Smart Technology
            </MotionTypography>
            <MotionTypography
              variant="body1"
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              sx={{
                mt: 8,
                mb: 5,
                fontFamily: "Geist",
                fontSize: { xs: "16px", sm: "18px", md: "25px" },
                lineHeight: { xs: "28px", md: "38px" },
                width: "50em",
              }}
            >
              <strong>At Proptech Philippines</strong>, we are a modern
              technology company dedicated to transforming businesses through
              innovative IT solutions. We specialize in building custom digital
              systems that are smart, scalable, and future-ready empowering
              organizations of all sizes to grow, adapt, and succeed in today’s
              fast-changing digital landscape. Whether you need software
              development, mobile applications, or cloud solutions, we deliver
              purpose-built technologies aligned with your unique needs and
              goals.
            </MotionTypography>

            <MotionBox
              sx={{
                mt: 15,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 3 },
                alignItems: { xs: "flex-start", sm: "center" },
              }}
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <MotionButton
                endIcon={
                  <KeyboardArrowRightIcon
                    sx={{
                      fontSize: {
                        xs: "24px",
                        sm: "30px",
                        md: "36px",
                        lg: "50px",
                      },
                    }}
                  />
                }
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                sx={{
                  color: "black",
                  fontFamily: "Geist",
                  fontSize: { xs: "16px", sm: "18px", md: "25px" },
                  backgroundColor: "white",
                  width: { xs: "200px", sm: "220px", md: "253px" },
                  height: { xs: "45px", sm: "50px", md: "60px" },
                  textTransform: "none",
                  borderRadius: "30px",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                View Info
              </MotionButton>
            </MotionBox>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
