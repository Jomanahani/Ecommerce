import React from "react";

import ItemCard from "../../Components/ItemCard";
import { Container } from "../../global/style";
import { PageLayout ,PageContent } from "./style";
import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";
import Subscribe from "../../Sections/Subscribe";
import SideBar from "../../Components/SideBar";

import select1 from "../../Assetse/select1.png";
import select2 from "../../Assetse/select2.png";
import select3 from "../../Assetse/select3.png";
import select4 from "../../Assetse/select4.png";
import select5 from "../../Assetse/select5.png";
import select6 from "../../Assetse/select6.png";

export default function SelectedItems() {
  return (
    <div>
      <Header />
      <Container>
        <PageLayout>
       <SideBar />
       <PageContent>
        <ItemCard
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
        />
        </PageContent>
        </PageLayout>
      </Container>
      <Subscribe />
      <Footer />
    </div>
  );
}
