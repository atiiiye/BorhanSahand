import React, { Component } from 'react'

//import components
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Step1 from './Components/Step1.jsx';
import NotFound from "./Components/NotFound.jsx";

//import routes
import { Route, Redirect, Switch } from "react-router-dom";

//import packages
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css"

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/Signup" component={Signup} />

        <Route path="/Step1" component={Step1} />

        <Route path="/404" component={NotFound} />

        <Route path="" component={NotFound} />
      </Switch>
    );
  }
}

export default App

