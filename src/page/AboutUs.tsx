import { Box } from "@mui/material";
import ResponsiveHeader from "../components/ResponsiveHeader";
import SmallHeaderNav from "../components/SmallHeaderNav";

import AboutUsHero from "./sections/AboutUsHero";
import MissionVision from "./sections/MissionVision";
import WhyAboutUs from "./sections/WhyAboutUs";
import MeetCeo from "./sections/MeetCeo";
import CompanyMilestone from "./sections/CompanyMilestone";

import Footer from "../components/Footer";
export default function AboutUs() {
  return (
    <>
      {/* Header */}
      <SmallHeaderNav />
      <ResponsiveHeader />

      {/* Content */}
      <Box component={"main"}>
        <AboutUsHero />
        <MissionVision />
        <WhyAboutUs />
        <MeetCeo />
        <CompanyMilestone />
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}
