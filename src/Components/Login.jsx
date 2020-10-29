import React, { Component } from "react";

//import css
import "./../css/Login.css";

//import images
import logo from "./../img/footer_logo.png";

//import reactstrap
import { Button, Form, FormGroup, Input } from "reactstrap";

//import packages
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

//import utils
import { successMessage , errorMessage} from './../utils/message'

export class Login extends Component {

  state = {
    username: "",
    password: "",
    captcha:"",
  }

  constructor() {
    super()
    this.validator = new SimpleReactValidator({
       messages: {
        username: 'لطفا نام کاربری  خود را وارد کنید',
        password:'لطفا کلمه عبور را وارد کنید',
    // default: 'لطفا فرم را به درستی تکمیل کنید' ,
  },
    });
  }
  onChange = (value) => {
    console.log("Captcha value:", value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
     if (this.validator.allValid()) {
       successMessage("ورود شما با موفقیت انجام شد")
       console.info("SUBMITED")
       this.resetForm();
     } else {
       errorMessage("خطایی رخ داده است!")
       console.error("UNSUBMITED");
       this.validator.showMessages();
       this.forceUpdate();
     }
  };

  resetForm = () => {
    this.setState({ username: "", password: "", captcha: "" });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
     this.setState({ [name]: value });
  };

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
            <Form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
              <FormGroup>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="نام کاربری (کد ملی)"
                  value={this.state.username}
                  onChange={(e) => this.handleChange(e)}
                />
                {this.validator.message(
                  "نام کابری وارد شده معتبر نمی باشد",
                  this.state.username,
                  "required|integer"
                )}
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="کلمه عبور"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                />
                {this.validator.message(
                  "وارد کردن کلمه عبور اجباریست",
                  this.state.password,
                  "required|alpha"
                )}
                <Input
                  type="text"
                  name="captcha"
                  id="captcha"
                  placeholder="کد امنیتی"
                  value={this.state.captcha}
                  onChange={(e) => this.handleChange(e)}
                />
                {this.validator.message(
                  "لطفا کد امنیتی را وارد کنید",
                  this.state.captcha,
                  "required|alpha_num"
                )}
                {/* <ReCAPTCHA
                  sitekey="Your client site key"
                  size="invisible"
                  onChange={() => this.onChange}
                /> */}
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
