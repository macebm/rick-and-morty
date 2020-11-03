import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default Footer;

function Footer() {
  return (
    <Wrapper>
      <nav>
        <NavLinkStyled to="/">Characters</NavLinkStyled>
        <NavLinkStyled to="/episodes">Episodes</NavLinkStyled>
        <NavLinkStyled to="/locations">Locations</NavLinkStyled>
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

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #1f2151;

  :hover {
    color: deepskyblue;
  }
`;
