import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <>
      <div id="login-login-inputs">
        <div className="login-top-part">
          <h1 className="login-h1">Vertical Farming Dashboard</h1>
          {/* <img id="logo" src="src/images/logoEdutrans.png" alt="" /> */}
        </div>

        <div id="login-email">
          <TextField
            required
            id="standard-required"
            label="Email"
            defaultValue=""
            variant="standard"
            sx={{ m: 1, width: "30ch" }}
          />
        </div>
        <div id="login-password">
          <TextField
            required
            id="standard-required"
            label="Password"
            defaultValue=""
            variant="standard"
            sx={{ m: 1, width: "30ch" }}
          />
        </div>
        <div className="login-button-container">
          <Button className="login-button" variant="contained">
            Login
          </Button>
          <Link to="/forgotPassword" color="inherit" id="login-link">
            Forgot Password
          </Link>
        </div>

        <div className="login-images-container">
          <img
            className="login-davinci-logo"
            src="src/images/logoDavinci.svg.png"
            alt=""
          />
          <img
            className="login-edutrans-logo"
            src="src/images/logoEdutrans.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
