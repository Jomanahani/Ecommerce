import { Container } from "@mui/system";
import React from "react";
import CartItems from "../../Components/CartItems";
import NavBar from "../../Components/NavBar";
import { FlexDiv } from "../../Components/SignInForm/style";
import Suggestions from "../../Components/Suggestions";
import Discount from "../../Sections/Discount";
import Footer from "../../Sections/Footer";
import { SectionTitle } from "../../Sections/Recommended";
import Subscribe from "../../Sections/Subscribe";

export default function Cart() {
    return (
        <>
      <NavBar />
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

