import {Box} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {motion} from "framer-motion";

const LoadingPage = () => {
  return (
    <motion.div
      initial={{opacity: 1}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5, ease: "easeOut"}}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "grid",
          placeContent: "center",
          backgroundColor: "white",
        }}>
        <motion.div
          initial={{scale: 1}}
          exit={{scale: 0.8}}
          transition={{duration: 0.5, ease: "easeOut"}}>
          <Box sx={{fontSize: "2em"}}>
            <CircularProgress color="primary" size={75} />
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default LoadingPage;
