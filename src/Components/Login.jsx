import React, { useState, useRef, useCallback } from "react";

//import css
import "./../css/Login.css";

//import images
import logo from "./../img/footer_logo.png";

//import reactstrap
import { Button, Form, FormGroup, Input } from "reactstrap";

//import packages
import { NavLink } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import Captcha from 'react-captcha-code';

//import utils
import { successMessage, errorMessage } from './../utils/message'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  const [, forceUpdate] = useState();


  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 5 کاراکتر نباید باشد",
        regex: "الگوی وارد شده هماهنگ نمی باشد",
        username: "کد ملی نوشته شده صحیح نمی باشد",
        integer: "کد ملی نمی تواند شامل حروف باشد"
      }
    })
  );

  const handleClick = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      successMessage("ورود شما با موفقیت انجام شد")
      console.info("SUBMITED")
      resetForm();
    } else {
      errorMessage("خطایی رخ داده است!")
      console.error("UNSUBMITED");
      validator.current.showMessages();
      forceUpdate(1);
    }
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setCaptcha("");
  }

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
          <Form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <FormGroup>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="نام کاربری (کد ملی)"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  validator.current.showMessageFor("username");
                }}
              />
              {validator.current.message(
                "نام کابری",
                username,
                "required|integer|min:5"
              )}
            </FormGroup>

            <FormGroup>

              <Input
                type="password"
                name="password"
                id="password"
                placeholder="کلمه عبور"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />
              {validator.current.message(
                "کلمه عبور",
                password,
                "required|min:6"
              )}
            </FormGroup>
            <FormGroup>

              <Input
                type="text"
                name="captcha"
                id="captcha"
                placeholder="کد امنیتی"
                value={captcha}
                onChange={(e) => {
                  setCaptcha(e.target.value);
                  validator.current.showMessageFor("captcha");
                }}
              />

              {validator.current.message(
                "کد امنیتی",
                captcha,
                "required|alpha_num|regex:pattern"
              )}
              <div className="captcha-box">
                <Captcha className="mt-3 w-50" charNum={4} onChange={handleClick} />
                <i class="fa fa-refresh" onChange={handleClick}></i>
              </div>
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
  )

}

export default Login;
