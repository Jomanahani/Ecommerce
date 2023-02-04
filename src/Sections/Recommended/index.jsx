import React from "react";
import RecommendedItem from "../../Components/RecommendedItem";

import item1 from "../../Assetse/item1.png";
import item2 from "../../Assetse/item2.png";
import styled from "styled-components";
import item3 from "../../Assetse/item3.png";
import item4 from "../../Assetse/item4.png";
import item5 from "../../Assetse/item5.png";
import item6 from "../../Assetse/item6.png";
import item7 from "../../Assetse/item7.png";
import item9 from "../../Assetse/item9.png";
import item10 from "../../Assetse/item10.png";

export const SectionTitle = styled.h3`
  font-size: 1.7rem;
  color: ${(props) => props.theme.pallet.primaryText};
  padding: 0.8rem 0;
  padding-left: 2.1rem;
`;
export const RecommendedContaner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.7rem;
  margin: auto;
  padding: 1.5rem 0;
`;
export default function Recommended() {
  return (
    <>
      <SectionTitle>Recommended items</SectionTitle>
      <RecommendedContaner>
        <RecommendedItem
          itemSrc={item1}
          Price="$10.30"
          Descrption="T-shirts with multiple colors, for men"
        />
        <RecommendedItem
          itemSrc={item2}
          Price="$10.30"
          Descrption="Brown winter coat medium size"
        />
        <RecommendedItem
          itemSrc={item3}
          Price="$12.50"
          Descrption="Brown winter coat medium size"
        />
        <RecommendedItem
          itemSrc={item4}
          Price="$34.00"
          Descrption="Blue wallet for men leather metarfial"
        />
        <RecommendedItem
          itemSrc={item5}
          Price="$99.00"
          Descrption="Jeans bag for travel for men"
        />
        <RecommendedItem
          itemSrc={item6}
          Price="$9.99"
          Descrption="Jeans shorts for men blue color"
        />
        <RecommendedItem
          itemSrc={item7}
          Price="$8.99"
          Descrption="Headset for gaming with mic"
        />
        <RecommendedItem
          itemSrc={item5}
          Price="$10.30"
          Descrption="Jeans bag for travel for men"
        />
        <RecommendedItem
          itemSrc={item9}
          Price="$10.30"
          Descrption="Blue wallet for men leather metarfial"
        />
        <RecommendedItem
          itemSrc={item10}
          Price="$80.95"
          Descrption="Jeans bag for travel for men"
        />
      </RecommendedContaner>
    </>
  );
}
