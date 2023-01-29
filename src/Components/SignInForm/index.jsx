import React, { useState } from "react";
import RegisterButton, { RegButton } from "../RegisterButton";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import {
  FlexDiv,
  Forminput,
  FormLabel,
  FormTitle,
  Or,
  SignForm,
} from "./style";
import { SignIn } from '../../Validation/SignInValid'
import { toast } from "react-toastify";

const style = { fontSize: "1rem", margin: "0 2rem 0 0" };

export default function SignInForm() {
  const [Data, setData] = useState({
    email: "",
    password: "",
    done:false
  });

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  return (Data.done ? <Navigate to="/home" replace={true} />:
    <SignForm
      onSubmit={async (event) => {
        event.preventDefault();
        try {
          await SignIn(Data);
          toast.success("Welcome");
          // <Navigate to="/home" replace={true} />;
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      }}
    >
      <FormTitle>Sign in</FormTitle>

      <FormLabel>Username</FormLabel>
      <Forminput
        type="text"
        name="email"
        value={Data.email}
        onChange={handleChange}
        placeholder="Email or phone"
      />

      <FlexDiv className="justify">
        <FormLabel>Password</FormLabel> <a href="#">Forgot Password</a>
      </FlexDiv>
      <Forminput
        type="text"
        name="password"
        value={Data.password}
        onChange={handleChange}
        placeholder="Type here"
      />

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
