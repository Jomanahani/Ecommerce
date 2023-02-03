import React from "react";
import ItemDescription from "../../Components/ItemDescription";
import MayLike from "../../Components/MayLike";
import ShowItem from "../../Components/ShowItem";
import { FlexDiv } from "../../Components/SignInForm/style";
import { Container } from "../../global/style";
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
      </Container>
      <Subscribe />
      <Footer />
    </>
  );
}
