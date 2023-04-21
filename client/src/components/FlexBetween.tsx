import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Create a styled `Box` component with custom styles for a flex container
const FlexBetween = styled(Box)({
  display: "flex", // Set the display to flex
  justifyContent: "space-between", // Distribute the items evenly with equal space around them
  alignItems: "center", // Align the items vertically at the center
});

export default FlexBetween;
