import React from "react";
import Login from "../Auth/login/login";
import accountStyles from "./account.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadToken,
  removeUser,
  selectToken,
  selectUser,
} from "../../redux/slices/userSlice";
import Avatar from "@material-ui/core/Avatar";
import Signup from "../Auth/signup/signup";
import { Link, Route, useHistory } from "react-router-dom";

function Account() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();
  return (
    <div className={accountStyles.accountContainer}>
      {!user?.name ? (
        <div className={accountStyles.auth}>
          <div className={accountStyles.nav}>
            <Link className={accountStyles.link} to='/account/login'>
              Login
            </Link>
            <Link to='/account/signup' className={accountStyles.link}>
              Signup
            </Link>
          </div>
          <Route path='/account/login' component={Login} />
          <Route path='/account/signup' component={Signup} />
        </div>
      ) : (
        <div className={accountStyles.container}>
          <div className={accountStyles.semiCircle}>
            <h1>Welcome, {user?.name}</h1>
            <Avatar
              src='https://images.pexels.com/photos/5514779/pexels-photo-5514779.jpeg?cs=srgb&dl=pexels-kei-scampa-5514779.jpg&fm=jpg'
              className={accountStyles.avatar}
            />
            <h2>@{user?.username}</h2>
            <h2>{user?.email}</h2>
            <button
              type='submit'
              className={accountStyles.logoutButton}
              onClick={() => {
                dispatch(loadToken({ token: "" }));
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                dispatch(removeUser());
                history.push("/account/login");
              }}>
              Logout
            </button>
          </div>
          <div className={accountStyles.lower}></div>
        </div>
      )}
    </div>
  );
}

export default Account;
