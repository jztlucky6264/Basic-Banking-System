import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Container/Home";
import Contact from "./Container/Contact";
import Customer from "./Container/Customer";
import { Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Sendmoney from "./Container/Sendmoney";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/sendmoney" component={Sendmoney} />
      </Switch>
    </>
  );
}

export default App;
