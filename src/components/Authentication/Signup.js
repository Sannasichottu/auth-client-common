import { Alert, Button, IconButton, InputAdornment, Snackbar, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = () => {

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
    <div className="signuppage">
      <div className="brand">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Aladin",
            fontSize: { sm: "35px", xs: "28px" },
          }}
        >
         User - Auth
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
          Sign Up Now
        </Typography>
        <form >
          {/* <TextField
            variant="outlined"
           name="Firstname"
            id="Firstname"
            label="FirstName"
            placeholder="Enter the FirstName"
            fullWidth
            sx={{ margin: "5px" }}
          />
          <TextField
            variant="outlined"
            name="Lastname"
            id="Lastname"
            label="LastName"
            placeholder="Enter the LastName"
            fullWidth
            sx={{ margin: "5px" }}
          /> */}
          <TextField
            variant="outlined"
            name="Name"
            id="name"
            label="Name"
            placeholder="Enter the Name"
            fullWidth
            sx={{ margin: "5px", marginTop:"15px" }}
          />
          <TextField
            variant="outlined"
            name="email"
            id="email"
            label="Email"
            placeholder="Enter Email"
            fullWidth
            sx={{ margin: "5px", marginTop:"10px"}}
          />
          <TextField
            variant="outlined"
          name="Password"
            id="Password"
            label="Password"
            placeholder="Enter the Password"
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
            sx={{ margin: "5px", marginTop:"10px" }}
          />
          <Button sx={{ margin: "5px", marginTop:"20px" }} type="submit" variant="contained">
            Get Started
          </Button>
        </form>
       <div style={{ marginTop: "-30px" }}>
       <label className="account" >Already have an Account?</label>
        <Button
          type="submit"
          className="signuploginbutton"
          variant="text"
          onClick={() => navigate("/")}
        >
          Login
        </Button>
       </div>
      </div>
      <Typography variant="p">
        ©2024 User-auth.All rights reserved{" "}
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
      ;
    </div>
  )
}

export default Signup