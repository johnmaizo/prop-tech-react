import {Link} from "react-router-dom";
import {Box, Typography, Button} from "@mui/material";
// import {useAuthProvider} from "./AuthProvider";

export default function NotFoundPage() {
  // const {authenticated} = useAuthProvider();

  const NotFoundContent = () => {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // padding: {xs: 2, md: 5},
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: 500,
          }}>
          <Typography
            sx={{
              fontWeight: "900",
              color: "error.main",
              fontSize: {xs: "6rem", md: "10rem"},
            }}>
            Oops!
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: {xs: "1.2rem", md: "1.5rem"},
              textTransform: "uppercase",
            }}>
            404 - Page Not Found
          </Typography>
          <Typography sx={{my: 2, textAlign: "center"}}>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              textTransform: "uppercase",
              py: 1,
              borderRadius: 5,
            }}>
            Go to Home Page
          </Button>
        </Box>
      </Box>
    );
  };

  // return authenticated ? (
  //   <NavBar>
  //     <NotFoundContent />
  //   </NavBar>
  // ) : (
  //   <PublicNavBar>
  //     <NotFoundContent />
  //   </PublicNavBar>
  // );
  return <NotFoundContent />;
}
