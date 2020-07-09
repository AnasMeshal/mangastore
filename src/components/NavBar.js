//React
import React from "react";

//Styles
import {
  ThemeButton,
  NavItem,
  NavStyled,
  WelcomeImgWrapper,
  WelcomeImage,
} from "../style";

const NavBar = ({ currentTheme, lightLogo, darkLogo, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <WelcomeImgWrapper to="/">
        <WelcomeImage
          src={currentTheme === "darkTheme" ? lightLogo : darkLogo}
          alt="logo"
        />
      </WelcomeImgWrapper>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item m-auto">
            <NavItem className="nav-link" to="/mangas">
              Mangas <span class="sr-only">(current)</span>
            </NavItem>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item m-auto mr-auto">
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
