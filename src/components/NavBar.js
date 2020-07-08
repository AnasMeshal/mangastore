//React
import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import { ThemeButton, NavItem, NavStyled, NavTitle } from "../style";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <NavTitle>Welcome!</NavTitle>

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

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavItem className="nav-link" to="/">
              Home
            </NavItem>
          </li>
          <li class="nav-item active">
            <NavItem className="nav-link" to="/mangas">
              Mangas
            </NavItem>
          </li>
          <li class="nav-item active">
            <ThemeButton className="nav-link" onClick={props.toogleTheme}>
              {props.currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
