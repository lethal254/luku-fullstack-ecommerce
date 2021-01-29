import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import { Route, Switch } from "react-router-dom";
import cart from "./pages/cart/cart";

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/shop/:category?' component={Shop} />
        <Route path='/cart' component={cart} />
      </Switch>
    </div>
  );
}

export default App;
