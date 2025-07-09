import SmallHeaderNav from "../components/SmallHeaderNav";
import ResponsiveHeader from "../components/ResponsiveHeader";
import {Box} from "@mui/material";
import RegistrationForm from "../components/RegistrationForm";

export default function Registration() {
  return (
    <>
      {/* Header */}
      <SmallHeaderNav />
      <ResponsiveHeader />

      {/* Content */}
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
