import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginStyles from "./login.module.css";
import axios from "../../../axios";
import { useDispatch } from "react-redux";
import { addUser, loadToken } from "../../../redux/slices/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/login", { email, password });
    dispatch(addUser({ user: response.data.user }));
    dispatch(loadToken({ token: response.data.token }));

    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
  };
  return (
    <div className={loginStyles.loginContainer}>
      <form className={loginStyles.form} onSubmit={onFormSubmit}>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className={loginStyles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
