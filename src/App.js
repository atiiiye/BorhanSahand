//import components
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import NotFound from "./Components/NotFound.jsx";

//import routes
import { Route, Redirect, Switch } from "react-router-dom";

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/Signup" component={Signup} />

        <Route path="/404" component={NotFound} />

        <Route path="" component={NotFound} />
      </Switch>
    );
  }
}

export default App

