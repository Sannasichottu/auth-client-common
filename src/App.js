
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { Signup } from "./components/Authenication/Signup.js";
// import { ForgotPassword } from "./components/Authenication/Forgotpassword.js";
// import { ResetPassword } from "./components/Authenication/Resetpassword.js";
import { useParams } from "react-router-dom";
import { API_URL } from "./globalconstant.js";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import Login from "./components/Authentication/Login.js";
import Signup from "./components/Authentication/Signup.js";
import ForgotPassword from "./components/Authentication/ForgotPassword.js";
import ResetPassword from "./components/Authentication/ResetPassword.js";


export default function App() {
  return (
     <div className="App">
       <Routes>
    <Route path="/" element={<Login /> } />
    <Route path="/login" element={<Login /> } />
    <Route path="/signup" element={<Signup /> } />
    <Route path="/forgotpassword" element={<ForgotPassword /> } />
    <Route path="/resetpassword" element={<ResetPassword /> } />
              
     
      </Routes>
    </div>
  );
}

// function Changepass() {
//   const { id } = useParams();
//   // console.log(id);
//   return id ? <Updatepassword id={id} /> : null;
// }
// // updatpassword
// function Updatepassword({ id }) {
//   // const { history } = useHistory();
//   // console.log(id);
//   const Result = (id) => {
//     fetch(`${API_URL}/users/forgotpassword/verify`, {
//       method: "GET",
//       headers: { "x-auth-token": id },
//     })
//       .then((response) => {
//         const Status = response.status;
//         return Status;
//       })
//       .then((Status) =>
//         Status === 200
//           ? window.location.replace(`/resetpassword/${id}`)
//           : alert("Please enter the registered email")
//       );
//   };

//   Result(id);

//   // Loading Page
//   return (
//     <div
//       className="loader-container"
//       style={{
//         display: "flex",
//         height: "100vh",
//         flexDirection: "column",
//         alignContent: "center",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <CircularProgress color="success" />
//       <Typography sx={{ fontFamily: "Aladin" }} variant="h6">
//         Please Wait......
//       </Typography>
//     </div>
//   );
// }