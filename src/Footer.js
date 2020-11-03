import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default Footer;

function Footer() {
  return (
    <Wrapper>
      <nav>
        <NavLink to="/">Characters</NavLink>
        <NavLink to="/episodes">Episodes</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: #f7f53f;
  width: 100vw;
  padding: 10px;
  color: #1f2151;
  position: fixed;
  bottom: 0;
  font-weight: bold;
`;
