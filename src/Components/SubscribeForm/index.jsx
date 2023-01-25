import React from "react";
import styled from "styled-components";

import { AiOutlineMail } from "react-icons/ai";

const SubsForm = styled.form`
  display: flex;
  width: 25.5rem;
  height: 3rem;
  margin: 1rem auto;
  justify-content: space-between;
`;
const SubsInput = styled.input`
  width: 18rem;
  background-color: white;
  padding: 0 1rem;
  border-radius: 0.6rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  outline: none;
`;
const SubsButton = styled.button`
  background-color: ${(props) => props.theme.pallet.primary};
  color: white;
  font-size: 1rem;
  width: 7rem;
  padding: 0.6rem 0;
  border-radius: 0.6rem;
  border: none;
  outline: none;
`;
export default function SubscribeForm() {
  return (
    <SubsForm>
      <SubsInput type="text" id="Subscribe" placeholder="&#x2709; Email" />
      <SubsButton type="submit">Subscribe</SubsButton>
    </SubsForm>
  );
}
