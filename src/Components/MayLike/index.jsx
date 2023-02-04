import React from "react";
import styled from "styled-components";

import { Title } from "../InfoType";
import { FlexDiv } from "../SignInForm/style";

import like1 from "../../Assetse/like1.png";
import like2 from "../../Assetse/like2.png";
import like3 from "../../Assetse/like3.png";
import like4 from "../../Assetse/like4.png";

export const LikeDiv = styled.div`
  width: 23%;
  margin: 0.5rem 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
`;
export const Information = styled.p`
  font-size: 1rem;
  padding-left: 1rem;
  &.Name {
    color: ${(props) => props.theme.pallet.primaryText};
  }
  &.price {
    color: #8b96a5;
    padding-top: 0.2rem;
  }
  &.desc{
    color: #606060;
    padding: 0.5rem 0;
    padding-right: 20% ;
  }
`;

export default function MayLike() {
  return (
    <LikeDiv>
      <Title className="like">You may like</Title>
      <FlexDiv className="align">
        <img src={like1} alt="itemImage" />
        <div>
          <Information className="Name">
            Apple Watch Series Space Gray
          </Information>
          <Information className="price">$7.00 - $99.50</Information>
        </div>
      </FlexDiv>
      <FlexDiv className="align">
        <img src={like2} alt="itemImage" />
        <div>
          <Information className="Name">
            Apple Watch Series Space Gray
          </Information>
          <Information className="price">$7.00 - $99.50</Information>
        </div>
      </FlexDiv>
      <FlexDiv className="align">
        <img src={like3} alt="itemImage" />
        <div>
          <Information className="Name">
            Apple Watch Series Space Gray
          </Information>
          <Information className="price">$7.00 - $99.50</Information>
        </div>
      </FlexDiv>
      <FlexDiv className="align">
        <img src={like4} alt="itemImage" />
        <div>
          <Information className="Name">
            Apple Watch Series Space Gray
          </Information>
          <Information className="price">$7.00 - $99.50</Information>
        </div>
      </FlexDiv>
      <FlexDiv className="align">
        <img src={like2} alt="itemImage" />
        <div>
          <Information className="Name">
            Apple Watch Series Space Gray
          </Information>
          <Information className="price">$7.00 - $99.50</Information>
        </div>
      </FlexDiv>
    </LikeDiv>
  );
}
