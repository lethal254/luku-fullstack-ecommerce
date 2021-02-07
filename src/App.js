import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import { Route, Switch } from "react-router-dom";
import cart from "./pages/cart/cart";
import Account from "./pages/account/account";
import { useDispatch } from "react-redux";
import { addUser, loadToken } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadToken({ token: JSON.parse(localStorage.getItem("token")) }));
  });
  useEffect(() => {
    dispatch(addUser({ user: JSON.parse(localStorage.getItem("user")) }));
  });
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/shop/:category?' component={Shop} />
        <Route path='/cart' component={cart} />
        <Route path='/account' component={Account} />
      </Switch>
    </div>
  );
}

export default App;
