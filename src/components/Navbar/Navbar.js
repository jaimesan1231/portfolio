import React from "react";
import { useLocation } from "@reach/router";
import {
  Logo,
  LinkLogo,
  Nav,
  NavbarContainer,
  LinkNavbar,
} from "./NavbarElements";
import LogoIMG from "../../images/icon.png";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <NavbarContainer>
      <LinkLogo to="/">
        <Logo>
          <img src={LogoIMG} alt="" />
        </Logo>
      </LinkLogo>
      <Nav>
        <ul>
          <li>
            <LinkNavbar to="/" $active={path === "/" ? true : false}>
              Inicio
            </LinkNavbar>
          </li>
          <li>
            <LinkNavbar
              to="/habilidades"
              $active={path === "/habilidades" ? true : false}
            >
              Habilidades
            </LinkNavbar>
          </li>
          <li>
            <LinkNavbar
              to="/proyectos"
              $active={path === "/proyectos" ? true : false}
            >
              Proyectos
            </LinkNavbar>
          </li>
        </ul>
      </Nav>
    </NavbarContainer>
  );
}

export default Navbar;
