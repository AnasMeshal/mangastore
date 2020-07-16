//React
import React from "react";

//Styles
import {
  ThemeButton,
  NavItem,
  NavStyled,
  WelcomeImgWrapper,
  WelcomeImage,
} from "../styles";

const NavBar = ({ currentTheme, lightLogo, darkLogo, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <WelcomeImgWrapper to="/">
        <WelcomeImage
          src={currentTheme === "darkTheme" ? lightLogo : darkLogo}
          alt="logo"
        />
      </WelcomeImgWrapper>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item m-auto">
            <NavItem className="nav-link" to="/mangas">
              Mangas <span className="sr-only">(current)</span>
            </NavItem>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item m-auto mr-auto">
            <ThemeButton className="nav-link" onClick={toggleTheme}>
              {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
