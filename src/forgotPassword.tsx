import "./forgotPassword.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  return (
    <>
      <div className="forgot-wrapper">
        <div id="forgot-login-inputs">
          <div className="forgot-top-part">
            <Link to="/login" color="inherit" id="login-link">
              <ArrowBackIcon className="forgot-arrow"></ArrowBackIcon>
            </Link>
            <h1 className="forgot-h1">Forgot Password</h1>
          </div>

          <div id="forgot-email">
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue=""
              variant="standard"
              sx={{ m: 1, width: "25ch" }}
            />
          </div>

          <Button className="forgot-button" variant="contained">
            Recover Password
          </Button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
