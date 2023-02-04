import React from "react";
import styled from "styled-components";

import favorite from "../../Assetse/favorite.png";
import stars from "../../Assetse/stars.png";
import { Dot } from "../ShowItem/style";

const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem auto;
  width: 85%;
  height: 14.5rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
    &>div{
      padding:0 1rem;
    }
`;
export const ItemP = styled.p`
  font-size: 1rem;
  padding: 0.3rem 0;
  color:${(props) => props.theme.pallet.primaryText};
  &.name {
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
    padding: 0 0.5rem;
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
  &.elect {
    font-weight: 400;
    color: #505050;
    padding: 0;
  }
  &.elecPrice {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0;
  }
  &.offer {
    color: #fa3434;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0;
  }
`;
export const Rate = styled.img`
  height: 1rem;
  width: 4.3rem;
  &.fav {
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
  }
  &.center {
    padding: 1rem;
    height: 90%;
    width: 90%;
    margin: 0 auto;
  }
`;
const FlexP = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
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
          <Dot />
          <ItemP className="orders">{props.order}</ItemP>
          <Dot />
          <ItemP className="free">Free Shipping</ItemP>
        </FlexP>
        <ItemP className="desc">{props.desc}</ItemP>
        <ItemP className="view">View details</ItemP>
      </div>

      <Rate className="fav" src={favorite} alt="favoriteIcon" />
    </ItemDiv>
  );
}
