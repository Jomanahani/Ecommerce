import React from "react";
import styled from "styled-components";

import { Option } from "../SideBar/style";
import { FlexDiv } from "../SignInForm/style";

import { FaBars } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Filter = styled.div`
  width: 85%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => props.theme.pallet.primaryText};
  border-radius: 0.5rem;
  /* &.elec{
    width: 80%;
  } */
`;
const Featured = styled.div`
  width: 8rem;
  padding: 0 0.5rem;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  &.icons {
    width: 4rem;
    color: #8b96a5;
    padding: 0;
  }
`;
const IconDIV = styled.div`
  font-size: 1.5rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${(props) => props.theme.pallet.Lines};
  padding-right: 0.2rem;
  border-radius: 0.5rem 0 0 0.5rem;
  &.right {
    border: none;
    font-size: 1rem;
    padding-left: 0.2rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }
  &.selected {
    background-color: #e3e8ee;
  }
`;

export default function ItemFilter(props) {
  const navigate = useNavigate();
 
  return (
    <Filter>
      <p>
        12,911 items in
        <span style={{ fontWeight: "bold" }}> Mobile accessory </span>
      </p>
      <FlexDiv>
        <FlexDiv className="align">
          <input type="checkbox" value="Verified" />
          <Option className="checked">Verified only</Option>
        </FlexDiv>
        <Featured>
          <p>Featured</p>
          <RiArrowDownSLine />
        </Featured>
        <Featured className="icons">
          <IconDIV className={props.selected ? "selected" : ""} onClick={()=>{navigate("/SelectedItems");}}>
            <AiFillAppstore />
          </IconDIV>
          <IconDIV className={props.electronic ? "selected right" : "right"} onClick={()=>{navigate("/Electronics");}}>
            <FaBars />
          </IconDIV>
        </Featured>
      </FlexDiv>
    </Filter>
  );
}
