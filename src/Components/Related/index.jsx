import React from "react";
import styled from "styled-components";

import { Information } from "../MayLike";
import { FlexDiv, FormTitle } from "../SignInForm/style";

import gray1 from "../../Assetse/gray1.png";
import gray2 from "../../Assetse/gray2.png";
import gray3 from "../../Assetse/gray3.png";
import gray4 from "../../Assetse/gray4.png";
import gray5 from "../../Assetse/gray5.png";
import gray6 from "../../Assetse/gray6.png";

export const RelatedDiv = styled.div`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  margin-top: 1rem;
  & img {
    height: 11.2rem;
    width: 97%;
    margin: 0.5rem 0;
  }
  & p {
    padding-right: 10%;
  }
`;
export const ImageDiv = styled.div`
  background-color: #eeeeee;
  border-radius: 0.5rem;
  width: 9rem;
  padding: 0.5rem;
  margin: 0.3rem 0;
`;
export default function Related() {
  return (
    <RelatedDiv>
      <FormTitle>Related products</FormTitle>
      <FlexDiv className="justify">
        <div>
          <img src={gray1} alt="itemImg" />
          <Information className="Name">Xiaomi Redmi 8 Original</Information>
          <Information className="price">$32.00-$40.00</Information>
        </div>

        <div>
          <img src={gray3} alt="itemImg" />
          <Information className="Name">Xiaomi Redmi 8 Original</Information>
          <Information className="price">$32.00-$40.00</Information>
        </div>

        <div>
          <img src={gray5} alt="itemImg" />
          <Information className="Name">Xiaomi Redmi 8 Original</Information>
          <Information className="price">$32.00-$40.00</Information>
        </div>

        <div>
          <img src={gray4} alt="itemImg" />
          <Information className="Name">Xiaomi Redmi 8 Original</Information>
          <Information className="price">$32.00-$40.00</Information>
        </div>

        <div>
          <img src={gray6} alt="itemImg" />
          <Information className="Name">Xiaomi Redmi 8 Original</Information>
          <Information className="price">$32.00-$40.00</Information>
        </div>
        <div>
          <img src={gray2} alt="itemImg" />
          <Information className="Name">Xiaomi Redmi 8 Original</Information>
          <Information className="price">$32.00-$40.00</Information>
        </div>
      </FlexDiv>
    </RelatedDiv>
  );
}
