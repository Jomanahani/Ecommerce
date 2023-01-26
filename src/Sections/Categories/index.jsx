import React from "react";
import Category from "../../Components/Category";
import { CategoryContaner, Intro, InerContaner, Source, Title } from "./style";

import home from "../../Assetse/home.png";
import Category1 from "../../Assetse/Category1.png";
import Category2 from "../../Assetse/Category2.png";
import Category3 from "../../Assetse/Category3.png";
import Category4 from "../../Assetse/category4.png";
import Category5 from "../../Assetse/Category5.png";
import Category6 from "../../Assetse/Category6.png";
import Category7 from "../../Assetse/Category7.png";
import Category8 from "../../Assetse/Category8.png";

import electronics from "../../Assetse/electronics.png";
import Category9 from "../../Assetse/Category9.png";
import Category10 from "../../Assetse/Category10.png";
import Category11 from "../../Assetse/Category11.png";
import Category12 from "../../Assetse/Category12.png";
import Category13 from "../../Assetse/Category13.png";
import Category14 from "../../Assetse/Category14.png";
import Category15 from "../../Assetse/Category15.png";
import Category16 from "../../Assetse/Category16.png";

export default function Categories() {
  return (
    <>
      <CategoryContaner>
        <Intro imgUrl={home}>
          <Title>Home and outdoor</Title>
          <Source>Source now</Source>
        </Intro>
        <InerContaner>
          <Category type="Soft chairs" from="From USD 19" src={Category1} />
          <Category type="Sofa & chair" from="From USD 19" src={Category2} />
          <Category type="Kitchen dishes" from="From USD 19" src={Category3} />
          <Category
            type="Smart watches"
            from="From USD 19"
            upRad="true"
            src={Category4}
          />
          <Category type="Kitchen mixer" from="From USD 100" src={Category5} />
          <Category type="Blenders" from="From USD 39" src={Category6} />
          <Category type="Home appliance" from="From USD 19" src={Category7} />
          <Category
            type="Coffee maker"
            from="From USD 10"
            downRad="true"
            src={Category8}
          />
        </InerContaner>
      </CategoryContaner>

      <CategoryContaner>
        <Intro imgUrl={electronics}>
          <Title>Home and outdoor</Title>
          <Source>Source now</Source>
        </Intro>
        <InerContaner>
          <Category type="Smart watches" from="From USD 19" src={Category9} />
          <Category type="Cameras" from="From USD 89" src={Category10} />
          <Category type="Headphones" from="From USD 10" src={Category11} />
          <Category
            type="Smart watches"
            from="From USD 90"
            upRad="true"
            src={Category12}
          />
          <Category type="Gaming set" from="From USD 35" src={Category13} />
          <Category type="Laptops & PC" from="From USD 340" src={Category14} />
          <Category
            type="Smartphones"
            from="From USD 19"
            downRad="true"
            src={Category15}
          />
          <Category
            type="Electric kattle"
            from="From USD 240"
            src={Category16}
          />
        </InerContaner>
      </CategoryContaner>
    </>
  );
}
