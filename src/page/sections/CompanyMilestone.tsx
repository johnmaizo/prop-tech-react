import {
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import OutlinedTitle from "../../utils/OutlinedTitle";
import cmImg from "../../assets/images/BackgroundMilestone.png";
import rImg from "../../assets/images/rocket.png";

export default function CompanyMilestone() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      id="company-milestone"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        mb: { xs: 4, sm: 6, md: 8 },
        px: { xs: 1, sm: 3, md: 5 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            px: { xs: 2, sm: 3, md: 5 },
            mt: { xs: -20, md: -10 },
            mb: { xs: 6, md: 8 },
          }}
        >
          <OutlinedTitle
            variant="h2"
            strokeColor="black"
            fillColor="transparent"
            strokeWidth={1}
            sx={{
              fontSize: { xs: "30px", sm: "34px", md: "38px" },
              lineHeight: { xs: "24px", sm: "26px", md: "27px" },
              color: "black",
              "&::before": {
                color: "black",
              },
              "&::after": {
                left: { xs: isMobile ? 0 : 12, md: 24 },
                display: { xs: "none", md: "block" },
              },
            }}
          >
            Company Milestone
          </OutlinedTitle>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "80vh", md: "60vh" },
            mx: "auto",
          }}
        >
          {/* Rocket */}
          <Box
            component="img"
            src={rImg}
            alt="Rocket"
            sx={{
              position: "absolute",
              zIndex: 1,
              width: { xs: "100px", sm: "100px", md: "200px" },
              height: "auto",
              top: {
                xs: -30,
                sm: 60,
                md: 90,
              },
              left: {
                xs: -35,
                sm: -40,
                md: -50,
              },
            }}
          />

          {/* Box Stroked Purple bottom  */}
          <Box
            sx={{
              position: "absolute",
              zIndex: 0,
              borderRadius: 2,
              width: { xs: "25px", sm: "50px", md: "70px" },
              height: { xs: "25px", sm: "50px", md: "70px" },
              border: "2px solid",
              borderColor: "#6E387C",
              bottom: { xs: 10, sm: 20, md: 150 },
              left: { xs: 10, sm: 20, md: -20 },
              backgroundColor: "transparent",
              display: { xs: "none", sm: "block" },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              zIndex: 0,
              borderRadius: 2,
              width: { xs: "25px", sm: "50px", md: "70px" },
              height: { xs: "25px", sm: "50px", md: "70px" },
              border: "2px solid",
              borderColor: "#6E387C",
              bottom: { xs: 20, sm: 30, md: 160 },
              left: { xs: 20, sm: 30, md: -10 },
              backgroundColor: "transparent",
              display: { xs: "none", sm: "block" },
            }}
          />

          {/* Top-right Box */}

          <Box
            sx={{
              position: "absolute",
              zIndex: 0,
              borderRadius: 2,
              width: { xs: "25px", sm: "50px", md: "70px" },
              height: { xs: "25px", sm: "50px", md: "70px" },
              border: "2px solid",
              borderColor: "#6E387C",
              top: { xs: 10, sm: 20, md: 140 },
              right: { xs: 10, sm: 20, md: -25 },
              backgroundColor: "transparent",
              display: { xs: "none", sm: "block" },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              zIndex: 0,
              borderRadius: 2,
              width: { xs: "25px", sm: "50px", md: "70px" },
              height: { xs: "25px", sm: "50px", md: "70px" },
              border: "2px solid",
              borderColor: "#6E387C",
              top: { xs: 20, sm: 30, md: 150 },
              right: { xs: 20, sm: 30, md: -15 },
              backgroundColor: "transparent",
              display: { xs: "none", sm: "block" },
            }}
          />

          {/* Background Image */}
          <Box
            sx={{
              backgroundImage: `url(${cmImg})`,
              backgroundSize: { xs: "cover", md: "contain" },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              overflow: "hidden",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              {!isMobile && (
                <>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "5%",
                      transform: "translateY(-50%)",
                      display: "flex",
                      alignItems: "center",
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        color: "white",
                        mr: 2,
                      }}
                    >
                      2025
                    </Typography>
                    <Box
                      sx={{
                        width: "3px",
                        height: "150px",
                        backgroundColor: "white",
                      }}
                    />
                  </Box>

                  {/* Horizontal Line */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "13.2%",
                      transform: "translateY(-50%)",
                      width: "85%",
                      height: "3px",
                      backgroundColor: "white",
                      zIndex: 1,
                    }}
                  />

                  {/* Dots */}
                  {["38%", "57%", "78%", "98%"].map((left, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left,
                        transform: "translate(-50%, -50%)",
                        width: "10px",
                        height: "10px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    />
                  ))}

                  <Typography
                    sx={{
                      position: "absolute",
                      top: "36.5%",
                      left: "26%",
                      transform: "translateX(-50%)",
                      fontSize: "1.4rem",
                      color: "white",
                      zIndex: 2,
                      textAlign: "left",
                    }}
                  >
                    HACKESTATE: HACKATHON 2025 <br />
                    CEBU CITY
                  </Typography>
                </>
              )}

              {isMobile && (
                <>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "6%",
                      left: "8%",
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      2025
                    </Typography>
                    <Box
                      sx={{
                        height: "2px",
                        backgroundColor: "white",
                        width: "300px",
                        mt: 0.5,
                      }}
                    />
                  </Box>

                  {/* Vertical Line */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "12.8%",
                      left: "18%",
                      width: "2px",
                      height: "82.5%",
                      backgroundColor: "white",
                      zIndex: 1,
                    }}
                  />

                  {/* Dots */}
                  {["28%", "48%", "72%", "95.2%"].map((top, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "absolute",
                        top,
                        left: "18.3%",
                        transform: "translate(-50%, -50%)",
                        width: "7px",
                        height: "7px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    />
                  ))}

                  <Typography
                    sx={{
                      position: "absolute",
                      top: "14%",
                      left: "23%",
                      fontSize: "1.2rem",
                      color: "white",
                      zIndex: 2,
                    }}
                  >
                    HACKESTATE: HACKATHON 2025 <br />
                    CEBU CITY
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
