import {Box, Typography} from "@mui/material";
import HappeningNowImage from "../../assets/images/HappeningNowBGTemporary.jpg";

export default function HappeningNow() {
  return (
    <Box>
      <Typography
        component={"img"}
        src={HappeningNowImage}
        sx={{width: "100%"}}
        draggable={false}
        alt="Happening Now"
      />
    </Box>
  );
}
