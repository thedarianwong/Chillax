import React from "react";
import { Container, Grid, Paper, Typography, styled } from "@mui/material";

const HeroImage = styled(Paper)({
  height: "50vh",
  // background: ""
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const HeroText = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  padding: theme.spacing(2),
}));

const Intro: React.FC = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <HeroImage>
            <HeroText>
              <Typography variant="h4" gutterBottom>
                Welcome to Your Web App!
              </Typography>
              <Typography variant="body1">
                Discover and join amazing events and activities posted by users
                just like you!
              </Typography>
            </HeroText>
          </HeroImage>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
