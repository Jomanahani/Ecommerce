import React from "react";
import styled from "styled-components";

import favorite from "../../Assetse/favorite.png";
import { ItemP, Rate } from "../ItemCard";
import { Flex } from "../../Sections/Footer/style";
import { FlexDiv } from "../SignInForm/style";

const ItemDiv = styled.div`
  &.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.pallet.Lines};
    height: 22rem;
    width: 16.5rem;
    background-color: ${(props) => props.theme.pallet.mainBackdround};
    border-radius: 0.5rem;
    /* margin: 1rem; */
  }
  &.info {
    width: 100%;
    height: 40%;
    display: flex;
    padding: 0.5rem 1rem;
    border-top: 1px solid ${(props) => props.theme.pallet.Lines};
  }
`;
export default function ElectronicsItem(props) {
  return (
    <ItemDiv className="main">
      <Rate className="center" src={props.src} alt="itemImage" />
      <ItemDiv className="info">
        <div>
          <Flex>
            <ItemP className="elecPrice">{props.price}</ItemP>
          </Flex>
          <Flex>
            <Rate src={props.rate} alt="rate" />
            <ItemP className="rate"> 7.5</ItemP>
          </Flex>

          <ItemP className="elect">{props.desc}</ItemP>
        </div>
        <Rate className="fav" src={favorite} alt="favoriteIcon" />
      </ItemDiv>
    </ItemDiv>
  );
}
