import React from "react";
import styled from "styled-components";

import { ItemP } from "../ItemCard";
import { Information } from "../MayLike";
import { Div } from "../Region";
import { FlexDiv } from "../SignInForm/style";

import { MdKeyboardArrowDown } from "react-icons/md";
import { RxArrowLeft } from "react-icons/rx";

import cart1 from "../../Assetse/cart1.png";
import cart2 from "../../Assetse/cart2.png";
import cart3 from "../../Assetse/cart3.png";

const Cart = styled.div`
  width: 70%;
  /* min-height: 35rem; */
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  padding: 1rem;
  &.Qty {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.2rem;
    width: 7rem;
    margin: 0.5rem 0;
    font-weight: 500;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.pallet.primaryText};
  font-size: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.pallet.Lines};
  padding: 0.5rem 0;
  & img {
    border: 1px solid ${(props) => props.theme.pallet.Lines};
    border-radius: 0.5rem;
    width: 15%;
    height: 5rem;
  }
  & h5 {
    font-weight: 500;
    font-size: 1rem;
  }
  & > div {
    padding: 0 1rem;
  }
`;
export const CartButton = styled.button`
  padding: 0.5rem;
  margin: 0.5rem 0;
  margin-right: 1rem;
  outline: none;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => (props.remove ? "red" : "#0D6EFD")};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  &.back{
    background-color: ${(props) => props.theme.pallet.primary};
    color: white;
    font-size: 1rem;
  }
`;
export default function CartItems() {
  return (
    <Cart>
      <Item>
        <FlexDiv>
          <img src={cart1} alt="item" />
          <Div className="cart">
            <h5>T-shirts with multiple colors, for men and lady</h5>
            <Information className="desc">
              Size: medium, Color: blue, Material: Plastic Seller: Artel Market
            </Information>
            <FlexDiv>
              <CartButton remove>Remove</CartButton>
              <CartButton>Save for later</CartButton>
            </FlexDiv>
          </Div>
        </FlexDiv>
        <div>
          <ItemP className="flex">$170.50</ItemP>
          <Cart className="Qty">
            Qty: 3 <MdKeyboardArrowDown />
          </Cart>
        </div>
      </Item>
      <Item>
        <FlexDiv>
          <img src={cart2} alt="item" />
          <Div className="cart">
            <h5>T-shirts with multiple colors, for men and lady</h5>
            <Information className="desc">
              Size: medium, Color: blue, Material: Plastic Seller: Artel Market
            </Information>
            <FlexDiv>
              <CartButton remove>Remove</CartButton>
              <CartButton>Save for later</CartButton>
            </FlexDiv>
          </Div>
        </FlexDiv>
        <div>
          <ItemP className="flex">$170.50</ItemP>
          <Cart className="Qty">
            Qty: 3 <MdKeyboardArrowDown />
          </Cart>
        </div>
      </Item>
      <Item>
        <FlexDiv>
          <img src={cart3} alt="item" />
          <Div className="cart">
            <h5>T-shirts with multiple colors, for men and lady</h5>
            <Information className="desc">
              Size: medium, Color: blue, Material: Plastic Seller: Artel Market
            </Information>
            <FlexDiv>
              <CartButton remove>Remove</CartButton>
              <CartButton>Save for later</CartButton>
            </FlexDiv>
          </Div>
        </FlexDiv>
        <div>
          <ItemP className="flex">$170.50</ItemP>
          <Cart className="Qty">
            Qty: 3 <MdKeyboardArrowDown />
          </Cart>
        </div>
      </Item>
      <FlexDiv className='justify'>
      <CartButton className="back"> <RxArrowLeft /> Back to shop</CartButton>
      <CartButton style={{fontSize:'1rem'}}>Remove all</CartButton>
      </FlexDiv>
    </Cart>
  );
}
