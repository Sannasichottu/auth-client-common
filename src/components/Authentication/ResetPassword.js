import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material'
import React from 'react'

const ResetPassword = () => {
  return (
    <div className="resetpage">
    <div className="brand">
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Aladin",
          fontSize: { sm: "35px", xs: "28px" },
        }}
      >
        User Auth
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
        Update Password
      </Typography>
      <form >
        <TextField
          variant="outlined"
          name="password"
          id="password"
          label="password"
          placeholder="Enter password"
          fullWidth
          sx={{ margin: "10px" }}
        />
        <TextField
          variant="outlined"
          name="confirmpassword"
          id="confirmpassword"
          label="confirmpassword"
          placeholder="Enter password"
          fullWidth
          sx={{ margin: "10px" }}
        />
        <Button
          type="submit"
          variant="contained"
          className="signupfieldbutton"
          color="success"
          sx={{ margin: "5px" , padding : "10px "}}
        >
          Confirm Password
        </Button>
      </form>
    </div>
    <Typography variant="p">
      ©2022 User auth.All rights reserved{" "}
    </Typography>

    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={6000}
    >
      <Alert
        sx={{ width: "100vw" }}
      >
         </Alert>
    </Snackbar>
  </div>
  )
}

export default ResetPassword