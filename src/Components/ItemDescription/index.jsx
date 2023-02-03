import React from "react";
import styled from "styled-components";

import { BsCheck2 } from "react-icons/bs";

export const DescriptionDiv = styled.div`
  width: 70%;
  height: 36rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 0.5rem;
  color: #505050;
  margin: 0.5rem 0;
  & > div {
    padding: 1rem 5rem 1rem 1rem;
    text-align: left;
    line-height: 1.5;
  }
`;
export const DescList = styled.ul`
  list-style: none;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.pallet.Lines};
  padding: 0 1rem;
  font-size: 1rem;
  color: #8b96a5;
  font-weight: 500;
  text-align: center;
  & li {
    padding: 0.8rem 1rem;
    cursor: pointer;
  }
  & > :first-child {
    color: ${(props) => props.theme.pallet.primary};
    border-bottom: 3px solid ${(props) => props.theme.pallet.primary};
  }
`;
export const CheckList = styled.ul`
  list-style: none;
  color: #8b96a5;
  & > li {
    display: flex;
    align-items: center;
    padding-top: 0.4rem;
  }
  & > li > p {
    color: #505050;
    padding: 0 0.6rem;
  }
`;
export const Table = styled.table`
  width: 65%;
  margin: 0.7rem 0;
  border-collapse: collapse;
`;
export const TData = styled.td`
  padding: 0.3rem 0.5rem;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  margin: 0;
  &.type {
    background-color: #eff2f4;
  }
  &.info {
    background-color: #ffffff;
  }
`;

export default function ItemDescription() {
  return (
    <DescriptionDiv>
      <DescList>
        <li>Description</li>
        <li>Reviews</li>
        <li>Shipping</li>
        <li>About company</li>
      </DescList>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Table>
          <tr>
            <TData className="type">Model</TData>
            <TData className="info">#8786867</TData>
          </tr>
          <tr>
            <TData className="type">Style</TData>
            <TData className="info">Classic style</TData>
          </tr>
          <tr>
            <TData className="type">Certificate</TData>
            <TData className="info">ISO-898921212</TData>
          </tr>
          <tr>
            <TData className="type">Size</TData>
            <TData className="info">34mm x 450mm x 19mm</TData>
          </tr>
          <tr>
            <TData className="type">Memory</TData>
            <TData className="info">36GB RAM</TData>
          </tr>
        </Table>
        <CheckList>
          <li>
            <BsCheck2 />
            <p> Some great feature name here</p>
          </li>
          <li>
            <BsCheck2 />
            <p> Lorem ipsum dolor sit amet, consectetur</p>{" "}
          </li>
          <li>
            <BsCheck2 /> <p>Duis aute irure dolor in reprehenderit</p>
          </li>
          <li>
            <BsCheck2 /> <p>Some great feature name here</p>
          </li>
        </CheckList>
      </div>
    </DescriptionDiv>
  );
}
