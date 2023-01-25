import React from "react";

import Services from "../../Components/Services";
import { RecommendedContaner, SectionTitle } from "../Recommended";

import services1 from "../../Assetse/services1.png";
import services2 from "../../Assetse/services2.png";
import services3 from "../../Assetse/services3.png";
import services4 from "../../Assetse/services4.png";

export default function serviceses() {
  return (
    <section>
      <SectionTitle>Our extra services</SectionTitle>
      <RecommendedContaner>
        <Services src={services1} name="source from Industry Hubs" />
        <Services src={services2} name="Customize Your Products" />
        <Services
          src={services3}
          name="Fast, reliable shipping by ocean or air"
        />
        <Services src={services4} name="Product monitoring and inspection" />
      </RecommendedContaner>
    </section>
  );
}
