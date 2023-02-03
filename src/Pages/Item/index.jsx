import React from "react";
import ItemDescription from "../../Components/ItemDescription";
import MayLike from "../../Components/MayLike";
import Related from "../../Components/Related";
import ShowItem from "../../Components/ShowItem";
import { FlexDiv } from "../../Components/SignInForm/style";
import { Container } from "../../global/style";
import Discount from "../../Sections/Discount";
import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";
import Subscribe from "../../Sections/Subscribe";

export default function Item() {
  return (
    <>
      <Header />
      <Container>
        <ShowItem />
        <FlexDiv className="start">
          <ItemDescription />
          <MayLike />
        </FlexDiv>
        <Related/>
        <Discount/>
      </Container>
      <Subscribe />
      <Footer />
    </>
  );
}
