//React
import { NavLink, Link } from "react-router-dom";

//Styled components
import styled from "styled-components";

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
