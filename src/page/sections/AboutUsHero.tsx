import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AboutBG from "../../assets/images/AboutBG.jpg";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function AboutUs() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const backgroundReveal = {
    hidden: { opacity: 0.7 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <Box
    id="about-"
      component={motion.section}
      initial="hidden"
      animate="visible"
      variants={backgroundReveal}
      ref={heroRef}
      sx={{
        width: "100%",
        minHeight: { xs: "10vh", sm: "90vh", md: "50vh", lg: "850px" },
        background: `url(${AboutBG}) no-repeat center center`,
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, #000000 35%, #a5637a 100%)",
          opacity: "40%",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ zIndex: 2 }}>
        <MotionBox
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "90%", md: "60em" },
            px: { xs: 2, sm: 3, md: 0 },
            pt: { xs: 6, sm: 8, md: 10 },
            pb: { xs: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 1,
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <MotionTypography
            variant="h1"
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            sx={{
              fontFamily: "Geist",
              fontSize: {
                xs: "44px",
                sm: "56px",
                md: "64px",
                lg: "72px",
                xl: "80px",
              },
              fontWeight: 500,
              lineHeight: {
                xs: "42px",
                sm: "64px",
                md: "72px",
                lg: "80px",
              },
              color: "#fff",
              mb: 2,
            }}
          >
            About Us
          </MotionTypography>

          <MotionTypography
            variant="h5"
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            sx={{
              fontWeight: 400,
              fontFamily: "Geist",
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              maxWidth: { xs: "95%", md: "90%", lg: "800px" },
              color: "#fff",
              mb: { xs: 4, sm: 6, md: 12 },
            }}
          >
            Empowering Businesses Through Smart Technology
          </MotionTypography>

          <MotionTypography
            variant="body1"
            variants={fadeInUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            sx={{
              fontFamily: "Geist",
              fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" },
              lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "36px" },
              color: "#fff",
              mb: { xs: 4, sm: 6 },
              maxWidth: { xs: "95%", sm: "98%", md: "85%", lg: "100%" },
            }}
          >
            <strong>At Proptech Philippines</strong>, we are a modern technology
            company dedicated to transforming businesses through innovative IT
            solutions. We specialize in building custom digital systems that are
            smart, scalable, and future ready empowering organizations of all
            sizes to grow, adapt, and succeed in today’s fast-changing digital
            landscape. Whether you need software development, mobile
            applications, or cloud solutions, we deliver purpose-built
            technologies aligned with your unique needs and goals.
          </MotionTypography>

          <MotionBox
            sx={{
              mt: { xs: 1, sm: 8 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              alignItems: { xs: "stretch", sm: "center" },
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
                      sm: "28px",
                      md: "32px",
                      lg: "36px",
                    },
                  }}
                />
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              sx={{
                color: "black",
                fontFamily: "Geist",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                },
                backgroundColor: "white",
                width: { xs: "60%", sm: "220px", md: "240px" },
                height: { xs: "45px", sm: "50px", md: "55px" },
                mt: { xs: 1, sm: -6, md: 1 },
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
        </MotionBox>
      </Container>
    </Box>
  );
}
