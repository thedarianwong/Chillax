import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "black",
        color: "white",
        marginTop: 4,
      }}
    >
      <Typography variant="body1" align="center" sx={{ fontSize: "1.3rem" }}>
        Chillax. | All Rights Reserved © {currentYear} <br />
        Vancouver, BC <br />
        Email: thedarianwong@gmail.com | Email: yuta@gmail.com
      </Typography>
    </Box>
  );
};

export default Footer;
