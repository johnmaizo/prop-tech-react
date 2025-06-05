import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import mImg from "../../assets/images/Maskbackground.jpg";
import alImg from "../../assets/images/ALimage.png";

import OutlinedTitle from "../../utils/OutlinedTitle";

import { motion } from "framer-motion"; // Add this
import { useEffect, useState } from "react"; // Add this

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
        minHeight: "600px",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 20,
        mt: 15,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: -20 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          marginBottom: isMobile ? 32 : 0,
          marginRight: isMobile ? 16 : 240,
        }}
      >
        <img
          src={`${alImg}`}
          alt="ALimage"
          width={500}
          height="auto"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </motion.div>

      <Box sx={{ maxWidth: 600, flexShrink: 1 }}>
        <OutlinedTitle
          variant="h2"
          strokeColor="black"
          fillColor="transparent"
          strokeWidth={0.8}
          sx={{
            width: "320px",
            mt: { xs: -1, md: 0 },
            ml: { xs: 1, md: -20 },
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "32px", sm: "40px", md: "50px" },
            lineHeight: { xs: "30px", sm: "40px", md: "50px" },
            color: "black",
            "&::before": {
              color: "black",
            },
            "&::after": {
              left: { xs: isMobile ? 0 : 0, md: 0 },
              display: { xs: "none", md: "block" },
            },
          }}
        >
          The CEO
        </OutlinedTitle>

        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: "2.3em",
            display: "flex",
            width: "500px",
            mt: { xs: 5, md: 15 },
            ml: { xs: 1, md: -20 },
          }}
        >
          {" "}
          “At the Helm of Innovation”
        </Typography>

        <Typography
          variant="body1"
          color="#000000"
          sx={{
            fontSize: "1.8em",
            mt: { xs: 5, md: 2 },
            ml: { xs: 1, md: -18 },
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
            mt: { xs: 5, md: 22 },
            ml: { xs: 1, md: -16 },
          }}
        >
          Anthony Gerard Leuterio
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 2 },
            alignItems: "center",
            fontFamily: "Geist",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            lineHeight: { xs: "18px", sm: "20px" },
            mt: { xs: 5, md: 2 },
            ml: { xs: 1, md: -16 },
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
              mt: { xs: 0, md: 0 },
              ml: { xs: 1, md: 1 },
            }}
          ></Box>
          <Typography>CEO/ Founder of Filipino Homes</Typography>
        </Box>
      </Box>
    </Box>
  );
}
