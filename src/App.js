import React from "react";
import "./App.css";
import LoginForm from "./Comonents/LoginForm";
import ForgotPassword from "./Comonents/Forgot/ForgotPassword";
import ForgotUsername from "./Comonents/Forgot/ForgotUsername";
import ErrorPage from "./ErrorPage";
import Dashboard from "./Comonents/HomePage/Dashboard";
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route
} from "react-router-dom";

function App() {
  // useEffect(() => {
  //   const navigate = useNavigate();
  //   if (localStorage.getItem('token')) {
  //     navigate('/forgotPass')
  //   }
  // })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgotPass" element={<ForgotPassword />} />
        <Route path="/forgotUser" element={<ForgotUsername />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
