//Styled components
import styled from "styled-components";

export const ChangeViewButton = styled.h5`
  color: #2ecc72;
  font-size: 20px;
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  :hover {
    cursor: pointer;
    color: #26ae60;
  }
`;

export const MangaDetailWrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.mainColor};
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;
  border: ${({ theme }) => theme.borderColor} solid;
  width: 70%;
  border-radius: 30px;
  margin-bottom: 2em;
  h1 {
    font-size: 50px;
    font-weight: bold;
    margin-top: 0.2em;
    margin-bottom: 0.3em;
  }

  p {
    margin-top: 0.2em;
    font-size: 25px;
    font-weight: bold;

    &.description {
      font-weight: 400;
    }
  }

  img {
    border-radius: 10px;
    border-bottom: ${({ theme }) => theme.borderColor} solid;
    height: 400px;
  }
`;
