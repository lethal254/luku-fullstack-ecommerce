import React, { useState } from "react";
import { useDispatch } from "react-redux";
import signupStyles from "./signup.module.css";
import axios from "../../../axios";
import { addUser, loadToken } from "../../../redux/slices/userSlice";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/signup", {
      email,
      password,
      name: fullName,
      username,
    });
    dispatch(addUser({ user: response.data.user }));
    dispatch(loadToken({ token: response.data.token }));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
  };
  return (
    <div className={signupStyles.signupContainer}>
      <form className={signupStyles.form} onSubmit={onFormSubmit}>
        <input
          type='text'
          placeholder='Full Name'
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <input
          type='username'
          placeholder='Username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type='submit' className={signupStyles.signupButton}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
