import React from "react";

import { Container } from "../../global/style";
import { PageLayout ,PageContent } from "./style";

import ItemCard from "../../Components/ItemCard";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";
import { SelectedItem } from "../../mock/data";

export default function SelectedItems() {
  return (
    <>
      <Container>
      <ItemPath/>
        <PageLayout>
       <SideBar />
       <PageContent>
        <ItemFilter selected />
        {SelectedItem.map((item)=>(
          <ItemCard
          key={item.key} {...item} />
        ))
        }
        {/* <ItemCard
          src={select1}
          name="Canon Cmera EOS 2000, Black 10x zoom"
          price="$998.00"
          order="154 orders"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing
           elit,sed do eiusmod tempor ut labore et dolore magna aliqua"
        />
        <ItemCard
          src={select2}
          name="GoPro HERO6 4K Action Camera - Black"
          price="$998.00"
          order="154 orders"
          desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
           dolor in reprehenderit "
        />
        <ItemCard
          src={select3}
          name="GoPro HERO6 4K Action Camera - Black"
          price="$998.00"
          order="154 orders"
          desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit "
        />
        <ItemCard
          src={select4}
          name="GoPro HERO6 4K Action Camera - Black"
          price="$998.00"
          order="154 orders"
          desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit "
        />
        <ItemCard
          src={select5}
          name="GoPro HERO6 4K Action Camera - Black"
          price="$998.00"
          order="154 orders"
          desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit "
        />
        <ItemCard
          src={select6}
          name="GoPro HERO6 4K Action Camera - Black"
          price="$998.00"
          order="154 orders"
          desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
           dolor in reprehenderit "
        /> */}
        </PageContent>
        </PageLayout>
      </Container>
    </>
  );
}
