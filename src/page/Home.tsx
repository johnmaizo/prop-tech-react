import {Box} from "@mui/material";
import ResponsiveHeader from "../components/ResponsiveHeader";
import SmallHeaderNav from "../components/SmallHeaderNav";

import Hero from "./sections/Hero";
import WhoWeAre from "./sections/WhoWeAre";
import WhatWeDo from "./sections/WhatWeDo";
import WhyChooseUs from "./sections/WhyChooseUs";
import ContactUs from "./sections/ContactUs";

import Footer from "../components/Footer";
import HackathonTeamSelection from "../components/HackathonTeamSelection";
import HappeningNow from "./sections/HappeningNow";
export default function Home() {
  return (
    <>
      {/* Header */}
      <SmallHeaderNav />
      <ResponsiveHeader />

      {/* Content */}
      <Box component={"main"}>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <WhyChooseUs />
        <HappeningNow />
        <HackathonTeamSelection />
        <ContactUs />
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}
