import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

// Simple fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Highlight() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 4, md: 6 },
        px: 0,
      }}
    >
     
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            maxWidth: { md: "600px" },
          }}
        >
          
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "5rem" },
              fontWeight: "bold",
              color: "#000000",
              mb: 2,
              lineHeight: "80px",
              animation: `${fadeIn} 1s ease-out forwards`,
            }}
          >
            Moments that{" "}
  <Box component="span" sx={{ color: "#4B237B" }}>
    Move Us
  </Box>
   
          </Typography>

          
          <Typography
            variant="body1"
            sx={{
              color: "#424242",
              fontSize: { xs: "1rem", md: "1.5rem" },
              animation: `${fadeIn} 1.5s ease-out forwards`,
              mb: 6,
            }}
          >
            Behind every cheer, every breakthrough, and every shared laugh was a moment that reminded us why we do what we do.
            This highlight reel captures not just the event, but the energy, the people, and the purpose that made it unforgettable.
            Relive the excitement. Feel the momentum. This is more than just a recap  it's a celebration of how far we've come,
            and a glimpse of where we're headed.
          </Typography>
        </Box>

        
        <Box
          sx={{
            flexBasis: "50%",
            width: "100%",
            height: { xs: 300, md: 550 },
            boxShadow: 3,
            overflow: "hidden",
            mb: 5,
          }}
        >
          <Box
            component="iframe"
            src="https://drive.google.com/file/d/1ZWJdMvMU64ZR_nU-ujyUL5MqtNu9uHdk/preview"
            allow="autoplay"
            sx={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
