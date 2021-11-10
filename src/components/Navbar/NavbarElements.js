import { Link } from "gatsby";
import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  padding: var(--padding-page);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
`;

export const LinkLogo = styled(Link)`
  display: flex;
`;
export const Logo = styled.figure`
  display: flex;
  img {
    height: 4em;
  }
`;
export const Nav = styled.nav`
  min-width: 300px;
  width: 20%;
  display: flex;
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const LinkNavbar = styled(Link)`
  color: ${(props) =>
    props.$active ? "var(--main-color)" : "var(--text-color)"};
  text-decoration: none;
  font-size: 1.3rem;
`;
