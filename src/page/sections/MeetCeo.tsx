import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import mImg from "../../assets/images/Maskbackground.jpg";
import alImg from "../../assets/images/ALimage.png";

import OutlinedTitle from "../../utils/OutlinedTitle";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useTypewriter(text: string, speed: number = 40) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

export default function MeetCeo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const typedText = useTypewriter(
    "“WWe specialize in creating custom systems that solve real-world problems through innovation, strategy, and clean code.”"
  );

  return (
    <Box
      component={"section"}
      id="meet-ceo"
      sx={{
        py: { xs: 10, sm: 12, md: 10 },
        margin: "0 auto",
        backgroundImage: `url(${mImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: "auto", md: "500px" },
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
        },
        display: "flex",

        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        mb: 20,
        mt: 15,
        px: { xs: 2, sm: 3, md: 35 },
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: -20 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          marginBottom: isMobile ? 32 : 0,
          marginRight: isMobile ? -40 : "auto",
        }}
      >
        <img
          src={`${alImg}`}
          alt="Anthony Leuterio"
          style={{
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </motion.div>

      <OutlinedTitle
        variant="h2"
        strokeColor="black"
        fillColor="transparent"
        strokeWidth={0.8}
        sx={{
          fontSize: { xs: "32px", sm: "40px", md: "50px" },
          lineHeight: { xs: "30px", sm: "40px", md: "50px" },
          color: "black",

          mx: { xs: "auto", md: 0 },
          mb: { xs: 2, md: 10 },
          "&::before": {
            color: "black",
          },
          "&::after": {
            left: { xs: "50%", md: 0 },
            transform: { xs: "translateX(-50%)", md: "none" },
            display: { xs: "none", md: "block" },
          },
        }}
      >
        The CEO
      </OutlinedTitle>

      <Box
        sx={{
          maxWidth: { xs: "90%", md: 810 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "1.6em", sm: "1.9em", md: "2.3em" },

            maxWidth: "100%",
            mt: { xs: 3, md: 5 },
          }}
        >
          {" "}
          “At the Helm of Innovation”
        </Typography>
        <Typography
          variant="body1"
          color="#000000"
          sx={{
            fontSize: { xs: "1.5em", sm: "1.3em", md: "1.8em" },
            mt: { xs: 2, md: 2 },
            whiteSpace: "pre-wrap",
          }}
        >
          {typedText}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Hurricane",
            fontSize: { xs: "40px", sm: "50px", md: "60px" },
            lineHeight: { xs: "40px", sm: "45px", md: "50px" },
            color: "#000000",
            mt: { xs: 3, md: 10 },
          }}
        >
          Anthony Gerard Leuterio
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 0.5, sm: 2 },
            justifyContent: { xs: "center", md: "flex-start" },
            fontFamily: "Geist",
            fontSize: { xs: "18px", sm: "18px", md: "20px" },
            lineHeight: { xs: "18px", sm: "20px" },
            mt: { xs: 1, md: 3 },
          }}
        >
          <Typography>Anthony Gerard Leuterio</Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              width: "10px",
              height: "10px",
              backgroundColor: "#000000",
              borderRadius: "50%",
              mt: 1,
            }}
          ></Box>
          <Typography>CEO/ Founder of Filipino Homes</Typography>
        </Box>
      </Box>
    </Box>
  );
}
