import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styled from "styled-components";
import RegisterButton from "../RegisterButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// import { toast } from 'react-toastify';
import {
  Forminput,
  FormLabel,
  SignForm,
  FormTitle,
  FlexDiv,
} from "../SignInForm/style";
import { RegisterSchema } from "../../Validation/Register";
// import PhoneInput from "react-phone-input-2";

// styled component
const RegForm = styled(SignForm)`
  height: 37rem;
  top: 6%;
  padding-top: 0.5rem;
`;
const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.3rem 0;
  margin-bottom: 0.6rem;
`;
const Logn = styled.p`
  text-align: center;
  color: ${(props) => props.theme.pallet.secondaryText};
`;

export default function RegisterForm() {
  const [userData, setuserData] = useState({
    Name: "",
    userName: "",
    email: "",
    // phone: '',
    country:'',
    password: "",
    RePassword: "",
    checked: true,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.checked ? false : true,
    });
  };

  const navigate = useNavigate();
  const createUser = async (e) => {
    e.preventDefault();
    try {
      await RegisterSchema.validate(userData, { abortEarly: false });
      console.log("valid");
 navigate("/home");
  // <Navigate to="/home" replace={true} />;
    } catch (error) {
      setErrors(
        error.inner.reduce((errors, error) => {
          errors[error.path] = error.message;
          return errors;
        })
      );
    }
  };

  return (
    <RegForm onSubmit={createUser}>
      <FormTitle>Register</FormTitle>
      {/* {console.log(errors)} */}

      <FlexDiv>
        <div>
          <FormLabel>Name</FormLabel>
          <Forminput
            type="text"
            name="Name"
            value={userData.Name}
            className="small"
            placeholder="Type here"
            onChange={handleChange}
          />
                  {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <FormLabel>Surname </FormLabel>
          <Forminput
            type="text"
            name="userName"
            value={userData.userName}
            className="small"
            placeholder="Type here"
            onChange={handleChange}
          />
        </div>
      </FlexDiv>

      <FormLabel>Your e-mail </FormLabel>
      <Forminput
        type="email"
        name="email"
        value={userData.email}
        placeholder="example@mail.com"
        onChange={handleChange}
      />

      {/* <FormLabel>Phone</FormLabel>
      <PhoneInput
        className="phone"
        name="phone"
        value={userData.phone}
        onChange={(value) =>setuserData({ phone: value }) }
      /> */}
      <FormLabel>Password</FormLabel>
      <Forminput
        type="text"
        name="password"
        value={userData.password}
        placeholder="At least 6 characters."
        onChange={handleChange}
      />

      <FormLabel>Repeat password</FormLabel>
      <Forminput
        type="text"
        name="RePassword"
        value={userData.RePassword}
        placeholder="Type here"
        onChange={handleChange}
      />

      <RegisterButton title="Register now" />

      <FlexDiv>
        <input
          name="checked"
          checked={userData.checked}
          type="checkbox"
          onChange={handleChecked}
        />
        <FormLabel> I agree with Terms and Conditions </FormLabel>
      </FlexDiv>
      <Hr />
      <Logn>
        Already have an accaunt?<Link to="/SignIn"> Logn in </Link>
      </Logn>
    </RegForm>
  );
}
