import React from "react";
import styled from "styled-components";

import OfferItem from "../../Components/OfferItem";
import { CategoryContaner, InerContaner, Title } from "../Categories/style";
import { Descrption } from "../../Components/RecommendedItem";
import { RecommendedContaner } from "../Recommended";

import offer1 from "../../Assetse/offer1.png";
import offer2 from "../../Assetse/offer2.png";
import offer3 from "../../Assetse/offer3.png";
import offer4 from "../../Assetse/offer4.png";
import offer5 from "../../Assetse/offer5.png";

const OfferTimer = styled.div`
  width: 18rem;
  height: 14rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem 0 0 0.5rem;
`;
const OfferDescrption = styled(Descrption)`
  padding-left: 2rem;
`;
const Timer = styled.div`
  width: 2.8rem;
  height: 3rem;
  background-color: #606060;
  color: white;
  text-align: center;
  border-radius: 0.5rem;
  &>p{
    font-size: 0.7rem;
  }
`;
const TimerContaner = styled(RecommendedContaner)`
  gap: 0.5rem;
  justify-content: flex-start;
  padding-left: 2rem;
  padding-top: 0.5rem;
`;

export default function Offers() {
  return (
    <CategoryContaner>
      <OfferTimer>
        <Title>Deals and offers</Title>
        <OfferDescrption>Hygiene equipments</OfferDescrption>
        <TimerContaner>
          <Timer>
            04
            <p>Days</p>
          </Timer>
          <Timer>
            13
            <p>Hour</p>
          </Timer>
          <Timer>
            34
            <p>Min</p>
          </Timer>
          <Timer>
            56
            <p>Sec</p>
          </Timer>
        </TimerContaner>
      </OfferTimer>
      <InerContaner>
        <OfferItem src={offer1} name="Smart watches" price="-25%" />
        <OfferItem src={offer2} name="Laptops" price="-15%" />
        <OfferItem src={offer3} name="GoPro cameras" price="-40%" />
        <OfferItem src={offer4} name="Headphones" price="-25%" />
        <OfferItem
          src={offer5}
          name="Canon camreras"
          price="-25%"
          lastItem="true"
        />
      </InerContaner>
    </CategoryContaner>
  );
}
