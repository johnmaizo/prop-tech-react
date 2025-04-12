import {useEffect, useRef, useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {motion, AnimatePresence} from "framer-motion";

const features = [
  {
    title: "Custom Software Development",
    description:
      "Tailored desktop, web, and mobile applications built to fit your operations, improve workflows, and scale with your business.",
  },
  {
    title: "Mobile App Development",
    description:
      "iOS and Android apps designed with performance, user experience, and scalability in mind.",
  },
  {
    title: "Cloud-Based Systems",
    description:
      "Move your business to the cloud with secure, reliable, and cost-effective infrastructure.",
  },
  {
    title: "Cybersecurity & Data Protection",
    description:
      "End-to-end security solutions that protect your systems and data from threats, breaches, and vulnerabilities.",
  },
  {
    title: "Systems Integration",
    description:
      "Connect your existing platforms, APIs, and services into one seamless ecosystem.",
  },
  {
    title: "IT Consulting & Tech Strategy",
    description:
      "We help you plan, architect, and implement tech solutions that support your business goals and digital transformation journey.",
  },
];

// Split features into pages of 3 items each.
const chunkSize = 3;
const pages = Array.from(
  {length: Math.ceil(features.length / chunkSize)},
  (_, pageIndex) => {
    const start = pageIndex * chunkSize;
    return features.slice(start, start + chunkSize);
  }
);

// ------------------------------
// Animation Variants
// ------------------------------
const containerVariants = {
  initial: {opacity: 0, y: 10},
  animate: {
    opacity: 1,
    y: 0,
    transition: {staggerChildren: 0.15, when: "beforeChildren"},
  },
  exit: {opacity: 0, y: -10},
};

const itemVariants = {
  initial: {opacity: 0, y: 10},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -10},
};

export default function FeatureCarousel() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);

  // Ref to manage the timeout that will re-enable auto-advance after 10 seconds of inactivity.
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handler for manual page selection.
  const handlePageSelect = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    // Disable auto-advance when user manually selects a page.
    setAutoAdvance(false);
    // Clear any existing timeout.
    if (manualTimeoutRef.current) {
      clearTimeout(manualTimeoutRef.current);
    }
    // Restart auto-advance after 10 seconds of no manual clicks.
    manualTimeoutRef.current = setTimeout(() => {
      setAutoAdvance(true);
    }, 10000);
  };

  // Auto-advance effect.
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (autoAdvance) {
      intervalId = setInterval(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      }, 4000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoAdvance]);

  return (
    <Box
      sx={{
        color: "#fff",
        mt: 10,
      }}>
      <AnimatePresence mode="wait">
        <Box
          component={motion.div}
          key={currentPage}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit">
          {pages[currentPage].map((feature) => (
            <Box
              component={motion.div}
              key={feature.title}
              variants={itemVariants}
              sx={{mb: "3rem"}}>
              <Typography
                variant="h4"
                sx={{fontWeight: "bold", fontSize: "25px"}}>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{mt: 1, fontSize: "20px"}}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </AnimatePresence>

      {/* Button group to select page */}
      <Box sx={{mt: 3, border: "none", boxShadow: "none"}}>
        {pages.map((_, index) => (
          <Button
            key={index}
            onClick={() => handlePageSelect(index)}
            sx={{
              display: "inline-block",
              backgroundColor: "#f7f7f7",
              width: currentPage === index ? "60px" : "1px",
              borderRadius: currentPage === index ? "20px" : "50%",
              height: "5px",
              p: 1,
              m: 0,
              mx: 1,
              transition: "width 0.3s ease, background-color 0.3s ease",
            }}
            aria-label={`Page ${index + 1}`}></Button>
        ))}
      </Box>
    </Box>
  );
}
