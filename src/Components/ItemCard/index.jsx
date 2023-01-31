import React from "react";
import styled from "styled-components";

import favorite from "../../Assetse/favorite.png";
import stars from "../../Assetse/stars.png";

const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem auto;
  width: 85%; //57.5
  height: 14.5rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
`;
const ItemP = styled.p`
  font-size: 1rem;
  padding: 0.3rem 0;
  &.name {
    color: #1c1c1c;
    font-weight: 500;
  }
  &.price {
    font-size: 1.3rem;
    font-weight: 600;
  }
  &.view {
    color: #0d6efd;
    cursor: pointer;
  }
  &.rate {
    color: #ff9017;
  }
  &.orders {
    color: ${(props) => props.theme.pallet.secondaryText};
  }
  &.free {
    color: #00b517;
  }
  &.desc {
    font-weight: 400;
    color: #505050;
  }
`;
const Rate = styled.img`
  height: 1rem;
  width: 4rem;
  &.fav {
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
  }
`;
const FlexP = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export default function ItemCard(props) {
  return (
    <ItemDiv>
      <img src={props.src} alt="itemImage" />
      <div>
        <ItemP className="name">{props.name}</ItemP>
        <ItemP className="price">{props.price}</ItemP>
        <FlexP>
          <Rate src={stars} alt="rate" />
          <ItemP className="rate">7.5</ItemP>
          <ItemP className="orders">{props.order}</ItemP>
          <ItemP className="free">Free Shipping</ItemP>
        </FlexP>
        <ItemP className="desc">{props.desc}</ItemP>
        <ItemP className="view">View details</ItemP>
      </div>

      <Rate className="fav" src={favorite} alt="favoriteIcon" />
    </ItemDiv>
  );
}
