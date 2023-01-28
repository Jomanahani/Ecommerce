import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
background-color: ${(props) => props.theme.palleat.page};
}`;

export const Container = styled.div`
  width: 100%;
  padding: 0 6%;
  margin: 0 auto;
  background-color: #f7fafc;
`;
