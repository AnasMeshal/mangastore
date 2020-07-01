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
  background: ${(props) => props.theme.mainColor};

  p {
    color: ${(props) => props.theme.textColor};
    font-weight: Bolder;
    text-align: center;
    font-size: 20px;

    &.item-price {
      color: #27ae60;
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

const ButtonWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
margin-top: 3vh;
margin-bottom: 3vh;
`

const ThemeButton = styled.button`
font-size: 20px;
background: ${(props) => props.theme.mainColor};
color: ${(props) => props.theme.textColor};
border: ${(props) => props.theme.borderColor} solid;
border-radius: 10px;
padding: 10px 20px;
`

export {
  GlobalStyle,
  TitleWrapper,
  Title,
  Description,
  ListWrapper,
  ShopImage,
  ItemWrapper,
  ButtonWrapper,
  ThemeButton,
};
