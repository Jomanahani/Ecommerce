import React from "react";

import CartItems from "../../Components/CartItems";
import { FlexDiv } from "../../Components/SignInForm/style";
import Suggestions from "../../Components/Suggestions";
import { Container } from "../../global/style";
import Discount from "../../Sections/Discount";
import Footer from "../../Sections/Footer";
import { SectionTitle } from "../../Sections/Recommended";
import Subscribe from "../../Sections/Subscribe";

export default function Cart() {
    return (
        <>
        <Container>
          <SectionTitle className="normal">My cart (3)</SectionTitle>
          <FlexDiv>
            <CartItems />
          </FlexDiv>
        <Suggestions/>
        <Discount/>
      </Container>
      <Subscribe />
      <Footer />
        </>

    );
}

