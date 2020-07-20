//Global style
import { createGlobalStyle } from "styled-components";

//Styled components
// import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${({ theme }) => theme.backgroundImage});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    color: ${({ theme }) => theme.textColor};
    user-drag: none;
    user-select: none;
  }
`;
