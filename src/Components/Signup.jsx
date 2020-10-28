import React, { Component } from "react";

//import css
import "./../css/Signup.css";

//import images
import logo from "./../img/footer_logo.png";

//import reactstrap
import { Button, Form, FormGroup, Input, FormText } from "reactstrap";

import { NavLink } from "react-router-dom";

export class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid signup">
          <section className="section-right">
            <img src={logo} alt="" className="logo" />
            <Form className="signup-form">
              <FormGroup>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="نام کاربری (کد ملی)"
                />
              </FormGroup>
              <div className="button-section">
                <NavLink to="/" className="forget">
                  
                </NavLink>
                <Button className="login-btn" type="submit">
                  ثبت نام
                </Button>
              </div>
            </Form>
          </section>

          <section className="section-left">
            <div className="section-login">
              <NavLink to="/" className="registered">
                قبلا ثبت نام کرده اید ؟
              </NavLink>
              <NavLink className="login-link" to="/">
                <Button className="login-btn" type="button">
                  ورود
                </Button>
              </NavLink>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
