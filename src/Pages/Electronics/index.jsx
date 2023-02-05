import React from "react";

import { PageContent, PageLayout } from "../SelectedItems/style";
import { Container } from "../../global/style";
import ElectronicsItem from "../../Components/ElectronicsItem";
import SideBar from "../../Components/SideBar";
import ItemPath from "../../Components/ItemPath";
import ItemFilter from "../../Components/ItemFilter";

import { RecommendedContaner } from "../../Sections/Recommended";

import stars4 from "../../Assetse/stars4.png";
import stars3 from "../../Assetse/stars3.png";
import select1 from "../../Assetse/select1.png";
import select2 from "../../Assetse/select2.png";
import select3 from "../../Assetse/select3.png";
import select4 from "../../Assetse/select4.png";
import select5 from "../../Assetse/select5.png";
import elect2 from "../../Assetse/elect2.png";
import elect5 from "../../Assetse/elect5.png";

export default function Electronics() {
  return (
    <>
      <Container>
        <ItemPath />
        <PageLayout>
          <SideBar />
          <PageContent>
          <ItemFilter electronic />
            <RecommendedContaner>
              <ElectronicsItem
                src={select1}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars4}
              />
              <ElectronicsItem
                src={elect2}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars3}
              />
              <ElectronicsItem
                src={select2}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars4}
              />
              <ElectronicsItem
                src={select3}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars4}
              />
              <ElectronicsItem
                src={elect5}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars4}
              />
              <ElectronicsItem
                src={elect2}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars4}
              />
              <ElectronicsItem
                src={select4}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars4}
              />
              <ElectronicsItem
                src={select5}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars4}
              />
              <ElectronicsItem
                src={select1}
                price="$99.50"
                desc="GoPro HERO6 4K Action Camera - Black"
                rate={stars4}
              />
            </RecommendedContaner>
          </PageContent>
        </PageLayout>
      </Container>
    </>
  );
}
