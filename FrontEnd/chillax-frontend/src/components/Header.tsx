import React from "react";
import { AppBar, Toolbar, Typography, IconButton, styled } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
}));

const StyledTitle = styled(Typography)({
  flexGrow: 1,
});

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTitle variant="h3">Chillax</StyledTitle>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
