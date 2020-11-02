import React, { useState, useRef } from "react";

//import css
import "./../css/Signup.css";

//import images
import logo from "./../img/footer_logo.png";

//import reactstrap
import { Button, Form, FormGroup, Input } from "reactstrap";

//import packages
import ReCAPTCHA from "react-google-recaptcha";
import SimpleReactValidator from "simple-react-validator";
import { NavLink } from "react-router-dom";

//import utils
import { successMessage, errorMessage } from './../utils/message'

const Signup = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState("");

  const [, forceUpdate] = useState();


  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        // min: "کمتر از 6 کاراکتر نباید باشد",
        username: "کد ملی نوشته شده صحیح نمی باشد",
        integer: "کد ملی نمی تواند شامل حروف باشد",
        regex: "الگوی وارد شده هماهنگ نمی باشد",
        phone: "تلفن همراه وارد شده صحیح نمی باشد",
      }
    })
  );

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
    setConfirmPassword("");
    setPhone("");
    setCaptcha("");
  }
  return (
    <React.Fragment>
      <div className="container-fluid signup">
        <section className="section-right">
          <img src={logo} alt="" className="logo" />
          <Form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
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
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="تکرار کلمه عبور"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validator.current.showMessageFor("confirmPassword");

                }}
              />
              {validator.current.message(
                "تکرار کلمه عبور",
                confirmPassword,
                "required|min:6|regex:pattern"
              )}
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="تلفن همراه"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  validator.current.showMessageFor("phone");
                }}
              />
              {validator.current.message(
                "تلفن همراه",
                phone,
                "required|phone"
              )}
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
                "required|alpha_num"
              )}
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
  )
}

export default Signup;
