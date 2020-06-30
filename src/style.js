//Global style
import { createGlobalStyle } from "styled-components";

//Styled components
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const TitleWrapper = styled.div`
  background: #FFF;
  width: 80%;
  border: black solid 2px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  margin-top: 20px;
  font-family: Galada; cursive;
  font-size: 25px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 15px;
`;

const Description = styled.h4`
  text-align: center;
  font-family: Fjalla One, sans-serif;
  font-size: 20px;
`;

const ItemWrapper = styled.div`
  border: ${(props) => props.theme.borderColor} solid 3px;
  margin: 4px;
  border-radius: 10px;
  background: #f1f2f6;

  p {
    color: black;
    font-weight: Bolder;
    text-align: center;
    font-size: 20px;

    &.item-price {
      color: blue;
      font-weight: bold;
      text-align: center;
      font-size: 20px;
    }
  }

  
`;

const ShopImage = styled.img`
  height: 400px;
  border-radius: 10px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: Wrap;
`;

export {
  GlobalStyle,
  TitleWrapper,
  Title,
  Description,
  ListWrapper,
  ShopImage,
  ItemWrapper,
};
