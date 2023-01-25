import React from "react";
import { Container } from "../../global/style";

import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";
import Recommended from "../../Sections/Recommended";
import Serviceses from "../../Sections/Serviceses";
import Subscribe from "../../Sections/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Recommended />
        <Serviceses />
      </Container>
      <Subscribe />
      <Footer />
    </>
  );
}
