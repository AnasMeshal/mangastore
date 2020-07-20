//Styled components
import styled from "styled-components";

export const TitleWrapper = styled.div`
  background: ${({ theme }) => theme.mainColor};
  width: 80%;
  border: ${({ theme }) => theme.borderColor} solid 2px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  font-family: Galada; cursive;
  font-size: 1.5em;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`;

export const Title = styled.h1`
  margin-top: auto;
  font-size: 3em;
  :hover {
    cursor: default;
  }
`;

export const Description = styled.h4`
  margin-bottom: auto;
  text-align: center;
  font-family: Fjalla One, sans-serif;
  font-size: 2em;
  :hover {
    cursor: default;
  }
`;
