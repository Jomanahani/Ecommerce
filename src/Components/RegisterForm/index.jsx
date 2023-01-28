import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styled from "styled-components";
import RegisterButton from "../RegisterButton";
import { Link } from "react-router-dom";

import {
  Forminput,
  FormLabel,
  SignForm,
  FlexDiv,
  FormTitle,
} from "../SignInForm";
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
  const [PhoneValue, setPhoneValue] = useState();
  return (
    <RegForm>
      <FormTitle>Register</FormTitle>

      <FlexDiv>
        <div>
          <FormLabel>Name</FormLabel>
          <Forminput type="text" className="small" placeholder="Type here" />
        </div>
        <div>
          <FormLabel>Surname </FormLabel>
          <Forminput type="text" className="small" placeholder="Type here" />
        </div>
      </FlexDiv>

      <FormLabel>Your e-mail </FormLabel>
      <Forminput type="email" placeholder="example@mail.com" />

      <FormLabel>Phone</FormLabel>
      <PhoneInput className="phone"
        value={PhoneValue}
        onChange={(value) => setPhoneValue(value)}
      />
      <FormLabel>Password</FormLabel>
      <Forminput type="text" placeholder="At least 6 characters." />


      <FormLabel>Repeat password</FormLabel>
      <Forminput type="text" placeholder="Type here" />

      <RegisterButton title="Register now" />

      <FlexDiv>
        <input type="checkbox" />
        <FormLabel> I agree with Terms and Conditions </FormLabel>
      </FlexDiv>
      <Hr />
      <Logn>Already have an accaunt?<Link to="/SignIn"> Logn in </Link></Logn>
    </RegForm>
  );
}
