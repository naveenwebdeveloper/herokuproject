import React from "react";
import { useForm } from "react-hook-form";
import "../LoginForm.css";
import logo from "../../Assets/logo.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgotUsername = () => {
    const Navigate = useNavigate();
    useEffect(() => {
        const auth = sessionStorage.getItem("UserToken");
        if (auth) {
            Navigate("/Dashboard");
        }
    });
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data) {
        console.log("Data submitted: ", data);
    }

    return (
        <div className="login-form">
            <img src={logo} alt='Logo' />
            <div className="form-d">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <label htmlFor="inputUsername">Vandor Id</label>
                    <input
                        type="text"
                        id="inputUsername"
                        name="Username"
                        ref={register({
                            required: "Enter your Username",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Enter a valid e-mail address",
                            },
                        })}
                    />
                    {errors.Username && <p className="error">{errors.Username.message}</p>}

                    <label htmlFor="inputPassword">Phone Number</label>
                    <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        ref={register({ required: "Enter your password" })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                    <div className="Forgot-p">
                        <button type="submit">Get OTP</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotUsername;
