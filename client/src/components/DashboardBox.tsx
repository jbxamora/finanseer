import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Create a styled `Box` component with custom styles using the theme
const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light, // Set the background color using the theme's background light color
  borderRadius: "1rem", // Set the border radius
  boxShadow: "0.15rem 0.2rem 0.15rem rgba(0, 0, 0, 1)", // Add a box shadow
}));

export default DashboardBox;
