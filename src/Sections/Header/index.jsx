import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import NavBar from "../../Components/NavBar";
import { Navigation, NavUl, NavItem } from "../../Components/NavBar";
import germany from "../../Assetse/germany.png";

const FlexNavItem = styled(NavItem)`
  flex-direction: row;
  align-items: center;
`;
export const Country = styled.img`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;


export default function Header() {
  return (
    <>
      <NavBar />
      <Navigation>
        <NavUl>
          <FlexNavItem>
            <FaBars /> All category
          </FlexNavItem>
          <NavItem>Hot offers</NavItem>
          <NavItem>Gift boxes</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Menu item</NavItem>
          <FlexNavItem>
            Help <MdKeyboardArrowDown />
          </FlexNavItem>
        </NavUl>
        <NavUl>
          <NavItem>English, USD</NavItem>
          <FlexNavItem>
            Ship to <Country src={germany} alt="germany" />
            <MdKeyboardArrowDown />
          </FlexNavItem>
        </NavUl>
      </Navigation>
    </>
  );
}
