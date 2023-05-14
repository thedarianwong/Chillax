import React from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  styled,
  Typography,
  IconButton,
} from "@mui/material";
import { GoogleLogin } from "react-google-login";
import CloseIcon from "@mui/icons-material/Close";

interface SignUpProps {
  open: boolean;
  onClose: () => void;
}

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
}));

const SignUp: React.FC<SignUpProps> = ({ open, onClose }) => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <StyledDialogTitle>
          <Typography variant="h5" sx={{ justifyContent: "center" }}>
            Sign Up
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User ID"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{
              marginTop: 4,
            }}
          >
            Submit
          </Button>
          {/* <GoogleLogin
            clientId="YOUR_CLIENT_ID"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignUp;
