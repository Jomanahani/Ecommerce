import { Container } from "@mui/system";
import React from "react";
import NavBar from "../../Components/NavBar";
import Suggestions from "../../Components/Suggestions";
import Discount from "../../Sections/Discount";
import Footer from "../../Sections/Footer";
import Subscribe from "../../Sections/Subscribe";

export default function Cart() {
    return (
        <>
      <NavBar />
        <Container>
        <Suggestions/>
        <Discount/>
      </Container>
      <Subscribe />
      <Footer />
        </>

    );
}

