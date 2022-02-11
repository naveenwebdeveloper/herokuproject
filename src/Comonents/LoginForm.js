import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    console.log("data is colled by useEffect");
    const auth = sessionStorage.getItem("UserToken");
    if (auth) {
      Navigate("/dashboard");
    }
  });
  const [apiData, setapiData] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  async function onSubmit(data) {
    console.log("Data submitted: ", data);
    const fetchApi = async () => {

      const loginData = await fetch('https://bharatbills.in/papi/public.php', {
        method: 'POST',
        body: JSON.stringify({
          "username": data.Username,
          "password": data.password,
          "type": "login"
        })
      })
      const loginJson = await loginData.json();
      return loginJson;
      // .then((resjson) => resjson.json(resjson))
      // .then((res) => {
      //   setapiData(res);
      //   // return console.log(res);
      // })
      // .catch((error) => console.log(error));
    }
    const loginData = await fetchApi();
    console.log(loginData);
    // Store Token
    if (loginData.status) {
      sessionStorage.setItem('UserToken', loginData.token);
      sessionStorage.setItem('Uid', loginData.uid);
    }
    setapiData(loginData);
    console.log(loginData);
    // setapiData(loginData);
    // console.log(apiData.message);
  }
  return (
    <div className="login-form">
      <img alt='some value' src={logo} />
      <div className="form-d">
        <p className="Login_message">{apiData.message}</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="inputUsername">Username</label>
          <div className="Input-icon">
            <input
              type="text"
              id="inputUsername"
              name="Username"
              ref={register({
                required: "Enter your Username",
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                //   message: "Enter a valid e-mail address",
                // },
              })}
            />
            <AiOutlineUser className="Usericon" />
          </div>

          {errors.Username && <p className="error">{errors.Username.message}</p>}

          <label htmlFor="inputPassword">Password</label>
          <div className="Input-icon">
            <input
              type="password"
              id="inputPassword"
              name="password"
              ref={register({ required: "Enter your password" })}
            />
            <RiLockPasswordLine className="Usericon" />
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}
          <div className="Forgot-p">
            <button type="submit">Login</button>
            <div className="forgot-content">
              <Link to="/ForgotUser">
                <p>Forgot Username?</p>
              </Link>
              <Link to="/forgotPass">
                <p>Forgot Password?</p >
              </Link>
            </div>
          </div>
        </form>
      </div >
    </div >
  );
};

export default LoginForm;
