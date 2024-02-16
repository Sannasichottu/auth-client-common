import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="forgotpage">
      <div className="brand">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Aladin",
            fontSize: { sm: "40px", xs: "28px" },
          }}
        >
          User-auth
        </Typography>
      </div>
      <div className="formcontainer">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Roboto Condensed",
            fontSize: { sm: "40px", xs: "28px", margin:"10px"},
          }}
        >
          Forgot Password
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontFamily: "Roboto Condensed",
            fontSize: "20px",
            margin:"5px"
          }}
        >
          Please enter the registered mail to get the password reset link
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
          <Button
            type="submit"
            variant="contained"
            className="signupfieldbutton"
            color="success"
            sx={{ marginTop: "10px" , padding : "10px "}}
          >
            Submit
          </Button>
        </form>
      </div>
      <Typography variant="p">
        ©2022 User-auth.All rights reserved{" "}
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

export default ForgotPassword