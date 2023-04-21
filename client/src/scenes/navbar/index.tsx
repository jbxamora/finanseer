import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

const Navbar = () => {
  const { palette } = useTheme(); // Access the theme's palette
  const [selected, setSelected] = useState("dashboard"); // Track the selected tab in the state

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color="#ADD8E6">
      {/* Left side of the Navbar */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} /> {/* Logo icon */}
        <Typography variant="h4" fontSize="16px" color="#ADD8E6">
          Finanseer {/* Logo text */}
        </Typography>
      </FlexBetween>

      {/* Right side of the Navbar */}
      <FlexBetween gap="2rem">
        {/* Empty box for potential future use */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}></Box>

        {/* Dashboard Link */}
        <Link
          to="/"
          onClick={() => setSelected("dashboard")}
          style={{
            color: selected === "dashboard" ? "inherit" : palette.grey[700],
            textDecoration: "inherit",
          }}
        >
          Dashboard
        </Link>

        {/* Predictions Link */}
        <Box>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
