import {Box, Button, Container, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HeroBG from "../../assets/images/HeroBG.png";

// Create motion variants for MUI components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {once: true, amount: 0.3});

  // Animation variants
  const fadeInUp = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y: 0},
  };

  const staggerContainer = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Subtle background animation
  const backgroundReveal = {
    hidden: {opacity: 0.7},
    visible: {
      opacity: 1,
      transition: {duration: 1.5, ease: "easeOut"},
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
        width: "100%",
        background: `url(${HeroBG}) no-repeat center center`,
        backgroundSize: "cover",
        color: "white",
        // height: {sm: "100vh", md: "auto"},
      }}>
      <Container maxWidth="xl">
        <MotionBox
          sx={{
            width: "100%",
            maxWidth: {xs: "100%", sm: "90%", md: "45em"},
            py: {xs: 10, sm: 16, md: 28},
            px: {xs: 0, sm: 3},
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}>
          <MotionTypography
            variant="h1"
            variants={fadeInUp}
            transition={{duration: 0.7, ease: "easeOut"}}
            sx={{
              fontFamily: "NATS",
              fontSize: {xs: "40px", sm: "60px", md: "80px"},
              lineHeight: {xs: "40px", sm: "45px", md: "55px"},
            }}>
            Innovative IT Solutions for a Smarter Future
          </MotionTypography>

          <MotionTypography
            variant="body1"
            variants={fadeInUp}
            transition={{duration: 0.7, ease: "easeOut", delay: 0.2}}
            sx={{
              fontFamily: "Geist",
              fontSize: {xs: "16px", sm: "20px", md: "25px"},
              lineHeight: {xs: "24px", sm: "32px", md: "40px"},
              my: {xs: 3, sm: 4, md: 5},
            }}>
            Discover cutting-edge technology designed to elevate your experience
            and drive the future.
          </MotionTypography>

          <MotionBox
            sx={{
              display: "flex",
              flexDirection: {xs: "column", sm: "row"},
              gap: {xs: 2, sm: 3},
              alignItems: {xs: "flex-start", sm: "center"},
            }}
            variants={fadeInUp}
            transition={{duration: 0.7, ease: "easeOut", delay: 0.4}}>
            <MotionButton
              endIcon={
                <KeyboardArrowRightIcon
                  sx={{
                    fontSize: {xs: "24px", sm: "30px", md: "36px", lg: "50px"},
                  }}
                />
              }
              whileHover={{
                scale: 1.05,
                transition: {duration: 0.3},
              }}
              whileTap={{scale: 0.98}}
              sx={{
                color: "black",
                fontFamily: "Geist",
                fontSize: {xs: "16px", sm: "18px", md: "25px"},
                backgroundColor: "white",
                width: {xs: "200px", sm: "220px", md: "253px"},
                height: {xs: "45px", sm: "50px", md: "60px"},
                textTransform: "none",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}>
              Explore More
            </MotionButton>

            <MotionButton
              whileHover={{
                scale: 1.05,
                transition: {duration: 0.3},
              }}
              whileTap={{scale: 0.98}}
              sx={{
                color: "white",
                fontFamily: "Geist",
                fontSize: {xs: "16px", sm: "18px", md: "25px"},
                textTransform: "none",
                textDecoration: "underline",
                mt: {xs: 1, sm: 0},
              }}>
              View All Services
            </MotionButton>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
