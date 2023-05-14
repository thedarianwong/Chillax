import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SignUp from "./SignUp";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "rgba(0, 0, 0)",
}));

const StyledTitle = styled(Typography)({
  flexGrow: 1,
  textAlign: "left",
});

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <StyledTitle variant="h3">Chillax.</StyledTitle>
        <Button
          color="inherit"
          sx={{
            border: "1px solid white",
            color: "inherit",
            borderColor: "white",
            marginRight: "1rem",
          }}
          onClick={handleSignUpOpen}
        >
          Sign Up
        </Button>
        <SignUp open={isSignUpOpen} onClose={handleSignUpClose} />
        <IconButton color="inherit" onClick={handleClick}>
          <AccountCircle />
        </IconButton>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
