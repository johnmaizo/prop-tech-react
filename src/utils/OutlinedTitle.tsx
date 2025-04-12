import Typography, {TypographyProps} from "@mui/material/Typography";
import {styled} from "@mui/material/styles";

// Extend the TypographyProps interface to include our extra props.
interface ReusableOutlinedTitleProps extends TypographyProps {
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
}

// Create a styled component that extends MUI's Typography.
// We ensure that strokeColor, fillColor, and strokeWidth are not passed down to the DOM.
const OutlinedTypography = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "strokeColor" && prop !== "fillColor" && prop !== "strokeWidth",
})<ReusableOutlinedTitleProps>(
  ({theme, strokeColor = "black", fillColor = "#FFFFFF", strokeWidth = 2}) => ({
    position: "relative",
    zIndex: 5,
    fontFamily: "Geist",
    paddingLeft: theme.spacing(4),
    // Pseudo-element for the decorative backslashes.
    "&::before": {
      content: '"\\\\\\\\"', // Renders two backslashes (\\) on screen.
      position: "absolute",
      left: 0,
      color: "#4B237B",
      top: "50%",
      transform: "translateY(-50%)",
    },
    // Pseudo-element for the outlined, duplicate text behind.
    "&::after": {
      content: "attr(data-title)",
      fontFamily: "Geist",
      position: "absolute",
      left: 18,
      top: 0,
      // lineHeight: {sm: "80px", md: "auto"},
      fontSize: "90px",
      // Make text transparent for fill; only the stroke is visible.
      color: "transparent",
      WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
      WebkitTextFillColor: fillColor,
      opacity: 0.2, // Adjust opacity to your taste.
      zIndex: -1,
    },
  })
);

// Reusable component that wraps the styled Typography component.
const OutlinedTitle = ({
  children,
  sx,
  strokeColor,
  fillColor,
  strokeWidth,
  ...rest
}: ReusableOutlinedTitleProps) => {
  return (
    <OutlinedTypography
      // Use a custom attribute so that ::after can dynamically display the text.
      data-title={children}
      strokeColor={strokeColor}
      fillColor={fillColor}
      strokeWidth={strokeWidth}
      sx={sx}
      {...rest}>
      {children}
    </OutlinedTypography>
  );
};

export default OutlinedTitle;
