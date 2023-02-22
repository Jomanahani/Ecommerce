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
  FormTitle,
  FlexDiv,
} from "../SignInForm/style";
import { RegisterSchema } from "../../Validation/Register";
import { PATHS } from "../../Router";
import axios from "axios";
import { API_URL } from "../../config/api";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";

// styled component
const RegForm = styled(SignForm)`
  height: 38rem;
  top: 5%;
  padding-top: 0.5rem;
`;
const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.3rem 0;
  margin-bottom: 0.5rem;
`;
const Logn = styled.p`
  text-align: center;
  color: ${(props) => props.theme.pallet.secondaryText};
`;
export const Error = styled.p`
  font-size: 0.8rem;
  color: red;
`;
export default function RegisterForm() {
  const [userData, setuserData] = useState({
    Name: "",
    userName: "",
    email: "",
    phone: '',
    country: "",
    password: "",
    RePassword: "",
    checked: true,
    isLoading: false
  });
  const [errors, setErrors] = useState({});
  const [setIsAuthorized] = useContext(AuthContext);

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

  const createUser = async (e) => {
    e.preventDefault();
    try {
      setuserData({
        ...userData,
        isLoading: true,
      });
      await RegisterSchema.validate(userData, { abortEarly: false });
      const res = await axios.post(`${API_URL}/users/signup`, {
        Name : userData.Name,
        email: userData.email,
        password: userData.password,
      });

      console.log(res);

      if(res){
        setIsAuthorized(true);
        console.log("valid");
        localStorage.setItem("token", res.data.token);
      }

    } catch (error) {
      setErrors(
        error.inner.reduce((errors, error) => {
          errors[error.path] = error.message;
          return errors;
        }, {})
      );
      console.log(errors);
    } finally{
      setuserData({
        ...userData,
        isLoading: false,
      });
    }
  };

  return (
    <RegForm onSubmit={createUser}>
      <FormTitle>Register</FormTitle>
      <FlexDiv>
        <div>
          <FormLabel>Name</FormLabel>
          <Forminput
            type="text"
            name="Name"
            value={userData.Name}
            className={errors.Name ? "error small" : "small"}
            placeholder="Type here"
            onChange={handleChange}
          />
          {errors.Name && <Error>{errors.Name}</Error>}
        </div>
        <div>
          <FormLabel>Surname </FormLabel>
          <Forminput
            type="text"
            name="userName"
            value={userData.userName}
            className={errors.userName ? "error small" : "small"}
            placeholder="Type here"
            onChange={handleChange}
          />
          {errors.userName && <Error>{errors.userName}</Error>}
        </div>
      </FlexDiv>

      <FormLabel>Your e-mail </FormLabel>
      <Forminput
        type="email"
        name="email"
        value={userData.email}
        className={errors.email ? "error" : ""}
        placeholder="example@mail.com"
        onChange={handleChange}
      />
      {errors.email && <Error>{errors.email}</Error>}
      <FormLabel>Phone</FormLabel>
      <PhoneInput
        className="phone"
        name="phone"
        value={userData.phone}
        onChange={(value) =>setuserData({ phone: value }) }
      />
      {errors.phone && <Error>{errors.phone}</Error>}
      <FormLabel>Password</FormLabel>
      <Forminput
        type="text"
        name="password"
        value={userData.password}
        className={errors.password ? "error" : ""}
        placeholder="At least 6 characters."
        onChange={handleChange}
      />
      {errors.password && <Error>{errors.password}</Error>}
      <FormLabel>Repeat password</FormLabel>
      <Forminput
        type="text"
        name="RePassword"
        value={userData.RePassword}
        className={errors.RePassword ? "error" : ""}
        placeholder="Type here"
        onChange={handleChange}
      />
      {errors.RePassword && <Error>{errors.RePassword}</Error>}
      <RegisterButton title={ userData.isLoading? "Loading..." : "Register now" } />

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
        Already have an accaunt?<Link to={PATHS.LOGIN}> Logn in </Link>
      </Logn>
    </RegForm>
  );
}
