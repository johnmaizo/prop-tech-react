import SmallHeaderNav from "../components/SmallHeaderNav";
import ResponsiveHeader from "../components/ResponsiveHeader";
import { Box } from "@mui/material";
import RegistrationForm from "../components/RegistrationForm";
import RegistrationAccessCodeBox from "../components/RegistrationAccessCodeBox";
import { useRegistrationContextProvider } from "../providers/RegistrationContextProvider";
import { AnimatePresence } from "framer-motion";
import LoadingPage from "../config/providers/LoadingPage";
import UnauthorizedPageAccess from "../components/errors/UnauthorizedPageAccess";

export default function Registration() {
  const { userData, loading } = useRegistrationContextProvider();

  return (
    <>
      {/* Header */}
      <SmallHeaderNav />
      <ResponsiveHeader />

      {/* Content */}
      <Box component={"main"}>
        {loading ? (
          <AnimatePresence mode="wait">
            <LoadingPage key="auth-loader" />
          </AnimatePresence>
        ) : (
          <Box
            sx={{
              minHeight: "100vh",
            }}
          >
            {userData ? (
              <>
                {userData?.participants.length < 2 ? (
                  <RegistrationForm />
                ) : (
                  <UnauthorizedPageAccess />
                )}
              </>
            ) : (
              <RegistrationAccessCodeBox />
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
