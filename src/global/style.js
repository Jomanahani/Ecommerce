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
  padding: 0 3%;
  display: flex;
  margin: auto;
  background-color: transparent;

  @media screen and (min-width: 500px) {
    /* padding: 0 10%;   */
  }
`;
