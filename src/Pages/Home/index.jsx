import React from "react";
import { Container } from "../../global/style";

import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";
import Recommended from "../../Sections/Recommended";
import Subscribe from "../../Sections/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Recommended />
      </Container>
      <Subscribe />
      <Footer />
    </>
  );
}
