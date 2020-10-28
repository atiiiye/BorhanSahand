import React, { Component } from "react";

//import css
import "./../css/Login.css";

//import images
import logo from "./../img/footer_logo.png";

//import reactstrap
import { Button, Form, FormGroup, Input, FormText } from "reactstrap";

import { NavLink } from "react-router-dom";

export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid login">
          <section className="section-right">
            <div className="section-signup">
              <NavLink to="/Signup" className="new-user">
                کاربر جدید هستید ؟
              </NavLink>
              <NavLink className="register" to="/Signup">
                <Button className="signup-btn" type="button">
                  ثبت نام
              </Button>
                </NavLink>
            </div>
          </section>
          <section className="section-left">
            <img src={logo} alt="" className="logo" />
            <Form className="login-form">
              <FormGroup>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="نام کاربری (کد ملی)"
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="کلمه عبور"
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="تکرار کلمه عبور"
                />
              </FormGroup>
              <div className="button-section">
                <NavLink to="/" className="forget">
                  فراموشی کلمه عبور
                </NavLink>
                <Button className="login-btn" type="submit">
                  ورود
                </Button>
              </div>
            </Form>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
