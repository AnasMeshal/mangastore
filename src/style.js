//Global style
import { createGlobalStyle } from "styled-components";

//Styled components
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;

export const TitleWrapper = styled.div`
  background: ${(props) => props.theme.title};
  width: 80%;
  border: ${(props) => props.theme.borderColor} solid 2px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  margin-top: 20px;
  font-family: Galada; cursive;
  font-size: 25px;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  :hover {
    cursor: default;
  }
`;

export const Description = styled.h4`
  text-align: center;
  font-family: Fjalla One, sans-serif;
  font-size: 20px;
  :hover {
    cursor: default;
  }
`;

export const ItemWrapper = styled.div`
  border: ${(props) => props.theme.borderColor} solid 3px;
  margin: 4px;
  border-radius: 10px;
  background: ${(props) => props.theme.mainColor};

  p {
    color: ${(props) => props.theme.textColor};
    font-weight: Bolder;
    text-align: center;
    font-size: 20px;
    :hover {
      cursor: default;
    }
  }

  .item-price {
    color: #27ae60;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
  }
`;

export const ShopImage = styled.img`
  height: 400px;
  border-radius: 10px;
  border-bottom: ${(props) => props.theme.borderColor} solid 3px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: Wrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

export const ThemeButton = styled.button`
  font-size: 20px;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.textColor};
  border: ${(props) => props.theme.borderColor} solid;
  border-radius: 10px;
  padding: 10px 20px;
  :hover {
    cursor: pointer;
    opacity: 0.4;
    transition: ease-out 300ms;
  }
`;

export const DeleteButtonStyled = styled.h5`
  color: #e74c3c;
  font-size: 15px;
  text-align: center;
  :hover {
    cursor: pointer;
    color: #c0392b;
  }
`;

export const ChangeViewButton = styled.h5`
  color: #2ecc72;
  font-size: 15px;
  text-align: center;
  :hover {
    cursor: pointer;
    color: #26ae60;
  }
`;

export const MangaDetailWrapper = styled.div`
  display: block;
  background-color: ${(props) => props.theme.mainColor};
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;
  border: ${(props) => props.theme.borderColor} solid;
  width: 80%;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  p {
    font-size: 25px;
    font-weight: bold;

    &.description {
      font-weight: 400;
    }
  }

  img {
    border-radius: 10px;
    border-bottom: ${(props) => props.theme.borderColor} solid;
    height: 400px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Search = styled.input`
  margin-top: 2em;
  margin-bottom: 2em;
  width: 30%;
  font-size: 18px;
  padding: 11px;
  border : ${(props) => props.theme.borderColor} solid;
  border-radius: 15px;
`;
