//React
import React from "react";
import { observer } from "mobx-react";

//Components
import UserProfile from "../UserProfile";

//Stores
import authStore from "../../stores/authStore";

//Styles
import {
  ThemeButton,
  NavItem,
  NavStyled,
  WelcomeImgWrapper,
  WelcomeImage,
} from "./styles";

const NavBar = ({
  currentTheme,
  lightLogo,
  darkLogo,
  toggleTheme,
  userLight,
  userDark,
}) => {
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
        {authStore.user && authStore.user.role === "admin" && (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item m-auto">
              <NavItem className="nav-link" to="/vendors">
                Vendors <span className="sr-only">(current)</span>
              </NavItem>
            </li>
            <li className="nav-item m-auto">
              <NavItem className="nav-link" to="/mangas">
                Mangas <span className="sr-only">(current)</span>
              </NavItem>
            </li>
          </ul>
        )}
        <ul className="navbar-nav ml-auto">
          {authStore.user && <UserProfile />}

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

export default observer(NavBar);
