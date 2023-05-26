import React from "react";
import introImage from "./images/intro-image.jpg";

import { Grid, Paper, Typography, styled, Box } from "@mui/material";

const HeroImage = styled(Paper)({
  height: "60vh",
  background: `url(${introImage})`,
  opacity: 1.4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const HeroText = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(205, 138, 210, 0.4)",
  padding: theme.spacing(2),
  width: "50%",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    padding: theme.spacing(1),
  },
}));

const Intro: React.FC = () => {
  return (
    <Box sx={{ width: "100%", padding: 0 }}>
      <Grid container>
        <Grid item xs={12}>
          <HeroImage>
            <HeroText>
              <Typography
                variant="h1"
                gutterBottom
                fontWeight="bold"
                fontSize="4rem"
              >
                Welcome to Chillax!
              </Typography>
              <Typography variant="body1" fontSize="1.5rem" fontWeight="bold">
                Discover and Join Events Posted by Users like You!
              </Typography>
            </HeroText>
          </HeroImage>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
