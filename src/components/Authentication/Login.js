import { Alert, Button, IconButton, InputAdornment, Snackbar, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';


const Login = () => {


  const navigate = useNavigate()

  const [text, setText] = useState("Show");
  const [visible, setVisible] = useState("password");
  const icon =
    visible === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />;
  const visibility = () => {
    setVisible((visible) => (visible === "password" ? "text" : "password"));
    setText((text) => (text === "Show" ? "Hide" : "Show"));
  };

  return (
    <div className="loginpage">
    <div className="brand">
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Aladin",
          fontSize: { sm: "35px", xs: "28px" },
        }}
      >
        User-Auth
      </Typography>
    </div>
    <div className="formcontainer">
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Roboto Condensed",
          fontSize: { sm: "35px", xs: "28px" },
        }}
      >
        Log In
      </Typography>
      <form >
        <TextField
          variant="outlined"
          
          name="email"
          id="email"
          label="Email"
          placeholder="Enter Email"
          fullWidth
          sx={{ margin: "10px" }}
        />
        <TextField
          variant="outlined"
         
          name="password"
          id="password"
          label="password"
          placeholder="Enter the password"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Tooltip title={text}>
                <IconButton onClick={() => visibility()}>{icon}</IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          sx={{ margin: "10px" }}
        />
        <Button
          sx={{ marginRight: "50px" }}
          variant="text"
          onClick={() => navigate("/forgotpassword")}
        >
          Forgot Password?
        </Button>
        <Button type="submit" variant="contained" color="success"  sx={{ margin: "10px" , padding : "10px "}}>
          Log In
        </Button>
      </form>
      <div style={{ marginTop: "-35px" }}>
        <label className="account">Don't have an Account?</label>
        <Button
          type="submit"
          className="signuploginbutton"
          variant="text"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </Button>
      </div>
    </div>
    <Typography variant="p">
      ©2024 user-auth.All rights reserved{" "}
    </Typography>
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={6000}
      >
      <Alert
        sx={{ width: "100%" }}
      >
      </Alert>
    </Snackbar>
  </div>
  )
}

export default Login