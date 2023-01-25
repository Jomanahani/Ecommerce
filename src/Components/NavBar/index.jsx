import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import Search from "../Search";

import profileSrc from "../../Assetse/Profile.png";
import MessageSrc from "../../Assetse/Message.png";
import HeartSrc from "../../Assetse/Heart.png";
import cartSrc from "../../Assetse/cart.png";

export const Navigation = styled.nav`
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.pallet.Lines};
`;
export const NavUl = styled.ul`
  display: flex;
  list-style: none;
`;
export const NavItem = styled.li`
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.primaryText};
  font-weight: 500;
`;
const NavName = styled.p`
  font-size: 0.7rem;
  text-align: center;
  padding-top: 0.3rem;
  color: ${(props) => props.theme.pallet.secondaryText};
`;
export default function NavBar() {
  return (
    <Navigation>
      <Logo />
      <Search />
      <NavUl>
        <NavItem>
          <img src={profileSrc} alt="profile" />
          <NavName>Profile</NavName>
        </NavItem>
        <NavItem>
          <img src={MessageSrc} alt="Messgae" />
          <NavName>Message</NavName>
        </NavItem>
        <NavItem>
          <img src={HeartSrc} alt="Heart" />
          <NavName>Orders</NavName>
        </NavItem>
        <NavItem>
          <img src={cartSrc} alt="cart" />
          <NavName>My cart</NavName>
        </NavItem>
      </NavUl>
    </Navigation>
  );
}
