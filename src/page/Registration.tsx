import SmallHeaderNav from "../components/SmallHeaderNav";
import ResponsiveHeader from "../components/ResponsiveHeader";
import {Box} from "@mui/material";
import RegistrationForm from "../components/RegistrationForm";
import {Link} from "react-router-dom";

export default function Registration() {
  return (
    <>
      {/* Header */}
      <SmallHeaderNav />
      <ResponsiveHeader />

      {/* Content */}

      <Link to={"/registration-statistics"} style={{textDecoration: "none"}}>
        Statistics
      </Link>

      <Box component={"main"}>
        <Box
          sx={{
            minHeight: "100vh",
          }}>
          <RegistrationForm />
        </Box>
      </Box>
    </>
  );
}
