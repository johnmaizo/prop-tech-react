import {Box} from "@mui/material";
import ResponsiveHeader from "../components/ResponsiveHeader";
import SmallHeaderNav from "../components/SmallHeaderNav";

import Hero from "./sections/Hero";
import WhoWeAre from "./sections/WhoWeAre";
import WhatWeDo from "./sections/WhatWeDo";
import WhyChooseUs from "./sections/WhyChooseUs";
import ContactUs from "./sections/ContactUs";

import Footer from "../components/Footer";
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
        <ContactUs />
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}
