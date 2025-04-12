import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import OutlinedTitle from "../../utils/OutlinedTitle";

import Image from "../../assets/images/WhatWeDoImage.png";
import FeatureCarousel from "../../components/FeatureCarousel";

export default function WhatWeDo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={"section"}
      id="what-we-do"
      sx={{
        background: "linear-gradient(90deg, #4B237B, #91133F)",
        color: "white",
        py: {xs: 6, sm: 8, md: 10},
      }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            px: {xs: 2, sm: 3, md: 5},
            gap: {xs: 5, md: 0},
          }}>
          <Box
            sx={{
              mr: {xs: 0, md: 5},
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: {xs: "center", md: "flex-start"},
            }}>
            <Box sx={{textAlign: {xs: "center", md: "left"}, width: "100%"}}>
              <OutlinedTitle
                variant="h2"
                strokeColor="#FFFFFF"
                fillColor="transparent"
                strokeWidth={1}
                sx={{
                  fontSize: {xs: "28px", sm: "32px", md: "35px"},
                  lineHeight: {xs: "22px", sm: "24px", md: "25px"},
                  color: "white",
                  "&::before": {
                    color: "white",
                  },
                  "&::after": {
                    left: {xs: isMobile ? -40 : -60, md: -80},
                    // width: {sm: "1em", md: "6em"},
                  },

                  // "&::after": {
                  //   left: {sm: -400, md: 0},
                  // },
                }}>
                What We Do
              </OutlinedTitle>
              <Typography
                variant="body1"
                sx={{
                  my: {xs: 3, sm: 4, md: 5},
                  fontFamily: "Geist",
                  fontSize: {xs: "32px", sm: "40px", md: "48px"},
                  lineHeight: {xs: "36px", sm: "40px", md: "48px"},
                  fontWeight: 700,
                  width: "100%",
                  maxWidth: {xs: "100%", md: "15ch"},
                }}>
                Why Trust Us for Your IT Needs?
              </Typography>
            </Box>
            <Typography
              component={"img"}
              src={Image}
              alt=""
              aria-hidden
              draggable={false}
              sx={{
                borderRadius: "25px",
                width: "100%",
                height: "auto",
                maxWidth: {xs: "100%", sm: "80%", md: "100%"},
              }}
            />
          </Box>
          <Box
            sx={{
              mr: {xs: 0, md: 5},
              width: "100%",
              maxWidth: {xs: "100%", md: "43em"},
            }}>
            <FeatureCarousel />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
