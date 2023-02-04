import React, { useState } from "react";
import RegisterButton, { RegButton } from "../RegisterButton";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  FlexDiv,
  Forminput,
  FormLabel,
  FormTitle,
  Or,
  SignForm,
} from "./style";
import { SignIn } from "../../Validation/SignInValid";
import { createGlobalStyle } from "styled-components";
import { Error } from "../RegisterForm";

const style = { fontSize: "1rem", margin: "0 2rem 0 0" };

export default function SignInForm() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handelSbmit = async (e) => {
    e.preventDefault();
    try {
      await SignIn(Data);
      console.log("valid");
      navigate("/home");
    } catch (error) {
      setErrors(
        error.inner.reduce((errors, error) => {
          errors[error.path] = error.message;
          return errors;
        }, {})
      );
      console.log(errors);
    }
  };
  return (
    <SignForm onSubmit={handelSbmit}>
      <FormTitle>Sign in</FormTitle>
      <FormLabel>Username</FormLabel>
      <Forminput
        type="text"
        name="email"
        value={Data.email}
        className={errors.email ? "error" : ""}
        onChange={handleChange}
        placeholder="Email or phone"
      />
      {errors.email && <Error>{errors.email}</Error>}

      <FlexDiv className="justify">
        <FormLabel>Password</FormLabel> <a href="#">Forgot Password</a>
      </FlexDiv>
      <Forminput
        type="text"
        name="password"
        value={Data.password}
        className={errors.password ? "error" : ""}
        onChange={handleChange}
        placeholder="Type here"
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <FlexDiv>
        <input type="checkbox" />
        <FormLabel> Remember me </FormLabel>
      </FlexDiv>

      <RegisterButton title="Log In" />

      <Or>
        <hr /> <p>OR</p> <hr />
      </Or>

      <RegButton className="google">
        <FcGoogle style={style} />
        Continue with Google
      </RegButton>
      <RegButton className="facebook">
        <AiFillFacebook style={style} /> Continue with Facebook
      </RegButton>
      <p>
        Don’t have an account? <Link to="/">Register now</Link>
      </p>
    </SignForm>
  );
}
