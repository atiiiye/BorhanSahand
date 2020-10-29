import React, { Component } from "react";

//import css
import "./../css/Signup.css";

//import images
import logo from "./../img/footer_logo.png";

//import reactstrap
import { Button, Form, FormGroup, Input } from "reactstrap";

import { NavLink } from "react-router-dom";

export class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = (e) => {
    e.preventDefault();
  };
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
                  onChange={(e)=>this.handleChange(e)}
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="کلمه عبور"
                   onChange={(e)=>this.handleChange(e)}
                />
                <Input
                  type="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="تکرار کلمه عبور"
                   onChange={(e)=>this.handleChange(e)}
                />
              </FormGroup>
              <div className="button-section">
                <NavLink to="/" className="forget"></NavLink>
                <Button className="register" type="submit">
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
                <Button className="login-button" type="button">
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
