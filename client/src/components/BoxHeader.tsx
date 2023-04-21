import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  title: string;
  subtitle?: string;
  sideText?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme(); // Access the theme's palette

  return (
    <FlexBetween color={palette.grey[400]} margin="0.5rem 1rem 0rem 1rem">
      <FlexBetween>
        {icon} {/* Optional icon */}
        <Box width="100%">
          <Typography variant="h4" mt="-0.1rem">
            {title} {/* Main title */}
          </Typography>
          <Typography variant="h6">
            {subtitle} {/* Optional subtitle */}
          </Typography>
          <Typography
            variant="h5"
            fontWeight="700"
            color={palette.secondary[500]}
            mt="0.1rem"
          >
            {sideText} {/* Optional side text */}
          </Typography>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default BoxHeader;
