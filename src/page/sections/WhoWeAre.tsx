import {Box, Container, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";

import OutlinedTitle from "../../utils/OutlinedTitle";

import Image1 from "../../assets/images/WhoWeAre1.png";
import Image2 from "../../assets/images/WhoWeAre2.png";
import Image3 from "../../assets/images/WhoWeAre3.png";
import Image4 from "../../assets/images/WhoWeAre4.png";

// Create motion variants for MUI components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {once: true, amount: 0.3});

  // Animation variants
  const fadeInUp = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y: 0},
  };

  const fadeInLeft = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0},
  };

  const fadeInRight = {
    hidden: {opacity: 0, x: 20},
    visible: {opacity: 1, x: 0},
  };

  const staggerContainer = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Box
      component={"section"}
      id="who-we-are"
      sx={{
        mt: {xs: 10, sm: 15, md: 20},
        mb: {xs: 8, sm: 10, md: 15},
      }}
      ref={sectionRef}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            justifyContent: "space-between",
            alignItems: {xs: "center", md: "flex-start"},
            gap: {xs: 8, md: 4},
          }}>
          <MotionBox
            sx={{
              ml: {xs: 0, md: 5, lg: 10},
              order: {xs: 2, md: 1},
              width: {xs: "100%", sm: "80%", md: "45%"},
              display: "flex",
              flexDirection: "column",
              alignItems: {xs: "center", md: "flex-start"},
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}>
            <Box
              sx={{
                display: "flex",
                gap: {xs: 1, sm: 2},
                alignItems: "end",
                width: "100%",
                justifyContent: {xs: "center", md: "flex-start"},
              }}>
              <MotionBox
                variants={fadeInLeft}
                transition={{duration: 0.6, ease: "easeOut"}}
                sx={{width: {xs: "45%", md: "auto"}}}>
                <Typography
                  component={"img"}
                  src={Image1}
                  alt=""
                  aria-hidden
                  draggable={false}
                  sx={{width: "100%", height: "auto"}}
                />
              </MotionBox>
              <MotionBox
                variants={fadeInUp}
                transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                sx={{width: {xs: "45%", md: "auto"}}}>
                <Typography
                  component={"img"}
                  src={Image2}
                  alt=""
                  aria-hidden
                  draggable={false}
                  sx={{width: "100%", height: "auto"}}
                />
              </MotionBox>
            </Box>
            <Box
              sx={{
                mt: {xs: "10px", sm: "17px"},
                display: "flex",
                gap: {xs: 1, sm: 2},
                alignItems: "start",
                width: "100%",
                justifyContent: {xs: "center", md: "flex-start"},
              }}>
              <MotionBox
                variants={fadeInUp}
                transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                sx={{width: {xs: "45%", md: "auto"}}}>
                <Typography
                  component={"img"}
                  src={Image3}
                  alt=""
                  aria-hidden
                  draggable={false}
                  sx={{width: "100%", height: "auto"}}
                />
              </MotionBox>
              <MotionBox
                variants={fadeInRight}
                transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                sx={{width: {xs: "45%", md: "auto"}}}>
                <Typography
                  component={"img"}
                  src={Image4}
                  alt=""
                  aria-hidden
                  draggable={false}
                  sx={{width: "100%", height: "auto"}}
                />
              </MotionBox>
            </Box>
          </MotionBox>

          <MotionBox
            sx={{
              mr: {xs: 0, md: 2, lg: 5},
              width: "100%",
              maxWidth: {xs: "100%", sm: "90%", md: "43em"},
              px: {xs: 2, sm: 3, md: 0},
              order: {xs: 1, md: 2},
              textAlign: {xs: "center", md: "left"},
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}>
            <MotionBox
              variants={fadeInUp}
              transition={{duration: 0.7, ease: "easeOut", delay: 0.3}}
              sx={{
                display: "flex",
                justifyContent: {xs: "center", md: "flex-start"},
              }}>
              <OutlinedTitle
                variant="h2"
                strokeColor="black"
                fillColor="#FFFFFF"
                strokeWidth={1}
                sx={{
                  fontSize: {xs: "28px", sm: "32px", md: "35px"},
                  lineHeight: {xs: "22px", sm: "24px", md: "25px"},
                  color: "black",
                  "&::after": {
                    // lineHeight: {xs: "72px", sm: "24px", md: "25px"},
                    width: {sm: "10em", md: "6em"},
                    left: {sm: -400, md: 0},
                  },
                }}>
                Who We Are
              </OutlinedTitle>
            </MotionBox>

            <MotionTypography
              variant="body1"
              sx={{
                my: {xs: 2, md: 3},
                fontFamily: "NATS",
                fontSize: {xs: "40px", sm: "48px", md: "55px"},
                lineHeight: {xs: "45px", sm: "55px", md: "65px"},
              }}
              variants={fadeInUp}
              transition={{duration: 0.7, ease: "easeOut", delay: 0.4}}>
              <Typography
                component={"span"}
                sx={{
                  color: "#4B237B",
                  fontFamily: "NATS",
                  fontSize: {xs: "40px", sm: "48px", md: "55px"},
                  lineHeight: {xs: "45px", sm: "55px", md: "65px"},
                }}>
                Proptech Philippines
              </Typography>{" "}
              is a Modern Technology Company
            </MotionTypography>

            <MotionTypography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                fontSize: {xs: "16px", sm: "20px", md: "25px"},
                lineHeight: {xs: "24px", sm: "28px", md: "32px"},
              }}
              variants={fadeInUp}
              transition={{duration: 0.7, ease: "easeOut", delay: 0.5}}>
              Offering smart, scalable, and future-ready IT solutions for
              businesses and organizations of all sizes. From software
              development to cloud integration, we are your trusted tech partner
              in building digital solutions that work.
              <br />
              <br />
              We specialize in creating custom systems that solve real-world
              problems through innovation, strategy, and clean code.
            </MotionTypography>

            <MotionBox
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: {xs: "center", md: "flex-start"},
              }}
              variants={fadeInUp}
              transition={{duration: 0.7, ease: "easeOut", delay: 0.6}}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Hurricane",
                  fontSize: {xs: "40px", sm: "50px", md: "60px"},
                  lineHeight: {xs: "40px", sm: "45px", md: "50px"},
                  color: "#400025",
                }}>
                Anthony Gerard Leuterio
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {xs: "column", sm: "row"},
                  gap: {xs: 1, sm: 2},
                  alignItems: "center",
                  fontFamily: "Geist",
                  fontSize: {xs: "16px", sm: "18px", md: "20px"},
                  lineHeight: {xs: "18px", sm: "20px"},
                  mt: 2,
                }}>
                <Typography>Anthony Gerard Leuterio</Typography>
                <Box
                  sx={{
                    display: {xs: "none", sm: "block"},
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#91133F",
                    borderRadius: "50%",
                  }}></Box>
                <Typography>CEO/ Founder of Filipino Homes</Typography>
              </Box>
            </MotionBox>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
