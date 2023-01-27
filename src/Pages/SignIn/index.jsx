import React from "react";
import styled from "styled-components";
import FormFooter from "../../Components/FormFooter";
import SignInForm from "../../Components/SignInForm";

export const RegisterPage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pallet.secondaryBackdround};
`;
export default function SignIn() {
  return (
    <RegisterPage>
      <SignInForm />
      <FormFooter />
    </RegisterPage>
  );
}
