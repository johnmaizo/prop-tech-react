import {
  Box,
  Button,
  Container,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

import HeroBG from "../../assets/images/HeroBG.jpg";
import GifFile from "../../assets/images/register_animation.gif";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function Hero() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const hasShownModal = localStorage.getItem("hasShownModal");

    if (!hasShownModal) {
      setOpenModal(true);
      localStorage.setItem("hasShownModal", "true");
    }
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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

  const backgroundReveal = {
    hidden: { opacity: 0.7 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "transparent",
            boxShadow: 0,
            p: 2,
            borderRadius: 2,
            maxWidth: 1080,
            width: "90%",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 10, right: 12, color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={GifFile}
            alt="Popup"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Box>
      </Modal>

      <Box
        component={motion.section}
        initial="hidden"
        animate="visible"
        variants={backgroundReveal}
        ref={heroRef}
        sx={{
          maxWidth: "100%",
          height: "auto",
          background: `url(${HeroBG}) no-repeat center center`,
          backgroundSize: "cover",
          color: "white",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 30%, rgba(145,19,63,0.3) 73%, rgba(75,35,123,0.4) 100%)",
            opacity: "61%",
          },
        }}
      >
        <Container maxWidth="xl">
          <MotionBox
            sx={{
              width: "100%",
              minHeight: "300px",
              maxWidth: { xs: "100%", sm: "100%", md: "100%" },
              py: { xs: 10, sm: 16, md: 28 },
              px: { xs: 0, sm: 3 },
              position: "relative",
              zIndex: 999,
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <Box sx={{ position: "absolute", bottom: "50px" }}>
              <MotionTypography
                variant="h1"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                sx={{
                  fontFamily: "NATS",
                  fontSize: { xs: "40px", sm: "60px", md: "80px" },
                  lineHeight: { xs: "40px", sm: "45px", md: "55px" },
                }}
              >
                Innovative IT Solutions for a Smarter Future
              </MotionTypography>
              <MotionTypography
                variant="body1"
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                sx={{
                  fontFamily: "Geist",
                  fontSize: { xs: "16px", sm: "20px", md: "25px" },
                  lineHeight: { xs: "24px", sm: "32px", md: "40px" },
                  my: { xs: 2, sm: 2, md: 2 },
                }}
              >
                Discover cutting-edge technology designed to elevate your
                experience and drive the future.
              </MotionTypography>
              <MotionBox
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 2, sm: 3 },
                  alignItems: { xs: "flex-start", sm: "center" },
                }}
                variants={fadeInUp}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              >
                <MotionButton
                  onClick={() => navigate("/About")}
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
                  Explore More
                </MotionButton>
              </MotionBox>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
}
