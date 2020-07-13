//Global style
import { createGlobalStyle } from "styled-components";

//React
import { NavLink, Link } from "react-router-dom";

//Styled components
import styled from "styled-components";

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

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border: ${({ theme }) => theme.borderColor} solid 3px;
  margin: 4px;
  border-radius: 10px;
  background: ${({ theme }) => theme.mainColor};

  p {
    color: ${({ theme }) => theme.textColor};
    margin-top: 1em;
    font-weight: Bolder;
    text-align: center;
    font-size: 1.5em;
    :hover {
      cursor: default;
    }
  }

  .item-price {
    color: #27ae60;
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 1.5vh;
    margin-top: 0vh;
  }
`;

export const ShopImage = styled.img`
  height: 400px;
  width: 250px;
  border-bottom: ${({ theme }) => theme.borderColor} solid 3px;
  border-radius: 1vw;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: Wrap;
  margin-bottom: 2vh;
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
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.textColor};
  border: ${({ theme }) => theme.borderColor} solid;
  border-radius: 1vw;
  padding: 1vh 2vw;
  margin=right: 2vw;
  margin-left: 2vw;
  :hover {
    cursor: pointer;
    opacity: 0.4;
    transition: ease-out 300ms;
  }
`;

export const DeleteButtonStyled = styled.h5`
  color: #e74c3c;
  font-size: 20px;
  text-align: center;
  margin-top: .5vh;
  margin-bottom: 5vh;
  :hover {
    cursor: pointer;
    color: #c0392b;
  }
`;

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
  border: ${({ theme }) => theme.borderColor} 3px solid;
  border-radius: 15px;
  outline: none;
`;

export const NavStyled = styled.nav`
  border-bottom: ${({ theme }) => theme.borderColor} solid 1px;
  background-color: ${({ theme }) => theme.navColor};
`;

export const WelcomeImgWrapper = styled(Link)`
  &:hover: {
    text-direction: none;
    color: red;
  }
`;

export const WelcomeImage = styled.img`
  width: 250px;
`;
export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.textColor};
  line-height: 40px;
  margin-left: 0.5em;
  font-size: 20px;
  padding: 10px 30px;

  &.active {
    text-decoration: underline;
  }
`;

export const NavTitle = styled.h1`
  font-size: 35px;
  color: ${({ theme }) => theme.textColor};
`;

export const TitleDarkTheme = styled.label`
  font-size: 20px;
`;

export const AddButtonStyled = styled.button`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 1vh 3vw;
`;

export const UpdateButtonStyled = styled.h5`
  color: #e74c3c;
  font-size: 20px;
  text-align: center;
  margin-top: .5vh;
  margin-bottom: 1vh;
  :hover {
    cursor: pointer;
    color: #c0392b;
  }
`;
