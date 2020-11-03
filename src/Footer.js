import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default Footer;

function Footer() {
  return (
    <Wrapper>
      <nav>
        <NavLink style={{ textDecoration: "none" }} to="/">
          <NavButton>Characters</NavButton>
        </NavLink>
        <NavLink to="/episodes">
          <NavButton>Episodes</NavButton>
        </NavLink>
        <NavLink to="/locations">
          <NavButton>Locations</NavButton>
        </NavLink>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: #f7f53f;
  width: 100vw;
  padding: 20px;
  color: #1f2151;
  position: fixed;
  bottom: 0;
  font-weight: bold;
`;

const NavButton = styled.span`
  text-decoration: none !important;
  color: #1f2151;

  :hover {
    color: deepskyblue;
  }
`;
