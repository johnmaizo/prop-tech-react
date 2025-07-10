import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Modal,
  IconButton,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

import OutlinedTitle from "../../utils/OutlinedTitle";

import Image1 from "../../assets/images/WhoWeAre1.png";
import Image2 from "../../assets/images/WhoWeAre2.png";
import Image3 from "../../assets/images/WhoWeAre3.png";
import Image4 from "../../assets/images/WhoWeAre4.png";
import CertificateImage from "../../assets/images/certificate.png"; // <- Replace with your actual certificate image

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <Box
      component={"section"}
      id="who-we-are"
      sx={{
        mt: { xs: 10, sm: 15, md: 20 },
        mb: { xs: 8, sm: 10, md: 15 },
      }}
      ref={sectionRef}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 8, md: 4 },
          }}
        >
          {/* Left Image Section */}
          <MotionBox
            sx={{
              ml: { xs: 0, md: 5, lg: 10 },
              order: { xs: 2, md: 1 },
              width: { xs: "100%", sm: "80%", md: "45%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, sm: 2 },
                alignItems: "end",
                width: "100%",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {[Image1, Image2].map((img, index) => (
                <MotionBox
                  key={index}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1 * index,
                  }}
                  sx={{ width: { xs: "45%", md: "auto" } }}
                >
                  <Typography
                    component={"img"}
                    src={img}
                    alt=""
                    aria-hidden
                    draggable={false}
                    sx={{ width: "100%", height: "auto" }}
                  />
                </MotionBox>
              ))}
            </Box>

            <Box
              sx={{
                mt: { xs: "10px", sm: "17px" },
                display: "flex",
                gap: { xs: 1, sm: 2 },
                alignItems: "start",
                width: "100%",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {[Image3, Image4].map((img, index) => (
                <MotionBox
                  key={index}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2 + 0.1 * index,
                  }}
                  sx={{ width: { xs: "45%", md: "auto" } }}
                >
                  <Typography
                    component={"img"}
                    src={img}
                    alt=""
                    aria-hidden
                    draggable={false}
                    sx={{ width: "100%", height: "auto" }}
                  />
                </MotionBox>
              ))}
            </Box>
          </MotionBox>

          {/* Right Content Section */}
          <MotionBox
            sx={{
              mr: { xs: 0, md: 2, lg: 5 },
              width: "100%",
              maxWidth: { xs: "100%", sm: "90%", md: "43em" },
              px: { xs: 2, sm: 3, md: 0 },
              order: { xs: 1, md: 2 },
              textAlign: { xs: "center", md: "left" },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <MotionBox
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <OutlinedTitle
                variant="h2"
                strokeColor="black"
                fillColor="#FFFFFF"
                strokeWidth={1}
                sx={{
                  fontSize: { xs: "28px", sm: "32px", md: "35px" },
                  lineHeight: { xs: "22px", sm: "24px", md: "25px" },
                  color: "black",
                  "&::after": {
                    width: { xs: "10em", sm: "10em", md: "6em" },
                    display: { xs: "none", md: "block" },
                  },
                }}
              >
                Who We Are
              </OutlinedTitle>
            </MotionBox>

            <MotionTypography
              variant="body1"
              sx={{
                my: { xs: 2, md: 3 },
                fontFamily: "NATS",
                fontSize: { xs: "40px", sm: "48px", md: "55px" },
                lineHeight: { xs: "45px", sm: "55px", md: "65px" },
              }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <Typography
                component={"span"}
                sx={{
                  color: "#4B237B",
                  fontFamily: "NATS",
                  fontSize: { xs: "40px", sm: "48px", md: "55px" },
                  lineHeight: { xs: "45px", sm: "55px", md: "65px" },
                }}
              >
                Proptech Philippines
              </Typography>{" "}
              is a Modern Technology Company
            </MotionTypography>

            <MotionTypography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                fontSize: { xs: "16px", sm: "20px", md: "25px" },
                lineHeight: { xs: "24px", sm: "28px", md: "32px" },
              }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            >
              Offering smart, scalable, and future-ready IT solutions for
              businesses and organizations of all sizes. From software
              development to cloud integration, we are your trusted tech partner
              in building digital solutions that work.
              <br />
              <br />
              We specialize in creating custom systems that solve real-world
              problems through innovation, strategy, and clean code.
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={handleOpen}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#901340",
                    textDecoration: "none",
                    mt: 3,
                  }}
                >
                  View Certificate
                </Typography>
              </Link>
            </MotionTypography>

            <MotionBox
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Hurricane",
                  fontSize: { xs: "40px", sm: "50px", md: "70px" },
                  lineHeight: { xs: "40px", sm: "45px", md: "60px" },
                  color: "#400025",
                }}
              >
                Anthony Leuterio
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 1, sm: 2 },
                  alignItems: "center",
                  fontFamily: "Geist",
                  fontSize: { xs: "19px", sm: "23px", md: "25px" },
                  lineHeight: { xs: "18px", sm: "20px" },
                  mt: 2,
                }}
              >
                <Typography>Founder of PropTech PH</Typography>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#91133F",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Typography>CEO/ Founder of Filipino Homes</Typography>
              </Box>
            </MotionBox>
          </MotionBox>
        </Box>
      </Container>

      {/* Modal Popup for Certificate */}
      <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            maxWidth: "90%",
            maxHeight: "90%",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#000",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={CertificateImage}
            alt="Certificate"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              borderRadius: 1,
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}
