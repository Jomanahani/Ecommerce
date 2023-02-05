import React from "react";
import styled from "styled-components";

import { Flex } from "../../Sections/Footer/style";
import { SubsButton } from "../SubscribeForm";

const QuForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1.5rem;
  margin: 2rem;
  height: 20rem;
  width: 30.6rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border-radius: 0.5rem;
  box-shadow: 2px 2px 6px #babec1;
`;
const QuoteTitle = styled.h3`
  color: ${(props) => props.theme.pallet.primaryText};
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 0;
`;
const Input = styled.input`
  border: none;
  outline: none;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.3rem;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;

  &.item {
    width: 27.5rem;
  }
  &.quantity {
    width: 10rem;
  }
`;
const TextArea = styled.textarea`
  width: 27.5rem;
  height: 7rem;
  padding: 1rem;
  font-size: 1rem;
  margin: 0.6rem 0;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
`;

const Select = styled.select`
  margin: 0.5rem 1rem;
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
`;

export default function QuoteForm() {
    return (
    <QuForm>
      <QuoteTitle>Send quote to suppliers</QuoteTitle>
      <Input type="text" placeholder="What item you need?" className="item" />
      <TextArea placeholder="Type more details" />
      <Flex>
        <Input type="text" placeholder="Quantity" className="quantity" />
        <Select>
          <option value="Pcs">Pcs</option>
          <option value="option2">Pcs</option>
          <option value="option3">Pcs</option>
        </Select>
      </Flex>
      <SubsButton>Send inquiry</SubsButton>
    </QuForm>
  );
}
