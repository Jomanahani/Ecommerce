import React from "react";

import CartItems from "../../Components/CartItems";
import Coupon from "../../Components/Coupon";
import PaymentServices from "../../Components/PaymentServices";
import { FlexDiv } from "../../Components/SignInForm/style";
import Suggestions from "../../Components/Suggestions";
import { Container } from "../../global/style";
import Discount from "../../Sections/Discount";
import { SectionTitle } from "../../Sections/Recommended";

export default function Cart() {
    return (
        <>
        <Container>
          <SectionTitle className="normal">My cart (3)</SectionTitle>
          <FlexDiv className="start">
            <CartItems />
            <Coupon/>
          </FlexDiv>
          <PaymentServices/>
        <Suggestions/>
        <Discount/>
      </Container>
        </>

    );
}

