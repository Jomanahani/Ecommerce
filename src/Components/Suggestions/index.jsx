import React from "react";
import styled from "styled-components";

import { BsCart3 } from "react-icons/bs";

import { Information } from "../MayLike";
import { RelatedDiv } from "../Related";
import { ItemP } from "../ItemCard";
import { FlexDiv, FormTitle } from "../SignInForm/style";


import { relatedProducts } from "../../mock/data";

const SuggestionsDiv = styled(RelatedDiv)`
  & img {
    height: 90%;
    width: 95%;
    margin: 0.5rem 0;
  }
`;
export const MoveButton = styled.button`
  width: 50%;
  padding: 0.5rem;
  outline: none;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => props.theme.pallet.primary};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;
export default function Suggestions() {
  return (
    <SuggestionsDiv>
      <FormTitle>Related products</FormTitle>
      <FlexDiv className="justify">
        {relatedProducts.map((product)=>(
            <div key={product.id}>
            <img src={product.img} alt="itemImg" />
            <ItemP className="elecPrice">{product.price}</ItemP>
            <Information className="desc">
             {product.title}
            </Information>
            <MoveButton>
              <BsCart3 /> Move to cart
            </MoveButton>
          </div>
          ))}
        {/* <div>
          <img src={gray1} alt="itemImg" />
          <ItemP className="elecPrice">$99.50</ItemP>
          <Information className="desc">
            GoPro HERO6 4K Action Camera - Black
          </Information>
          <MoveButton>
            {" "}
            <BsCart3 /> Move to cart
          </MoveButton>
        </div>
        <div>
          <img src={gray2} alt="itemImg" />
          <ItemP className="elecPrice">$99.50</ItemP>
          <Information className="desc">
            GoPro HERO6 4K Action Camera - Black
          </Information>
          <MoveButton>
            {" "}
            <BsCart3 /> Move to cart
          </MoveButton>
        </div>
        <div>
          <img src={gray3} alt="itemImg" />
          <ItemP className="elecPrice">$99.50</ItemP>
          <Information className="desc">
            GoPro HERO6 4K Action Camera - Black
          </Information>
          <MoveButton>
            {" "}
            <BsCart3 /> Move to cart
          </MoveButton>
        </div>
        <div>
          <img src={gray4} alt="itemImg" />
          <ItemP className="elecPrice">$99.50</ItemP>
          <Information className="desc">
            GoPro HERO6 4K Action Camera - Black
          </Information>
          <MoveButton>
            {" "}
            <BsCart3 /> Move to cart
          </MoveButton>
        </div> */}
      </FlexDiv>
    </SuggestionsDiv>
  );
}
