import styled from "styled-components"

export default Header;


function Header(){
    return <Wrapper>Rick and Morty</Wrapper>
}

const Wrapper = styled.header`
    background: #F7F53F;
    width: 100vw;
    text-align: center;
    padding: 20px;
    color: #1F2151;
    font-weight: bold;
    font-size: 1.4em;

`