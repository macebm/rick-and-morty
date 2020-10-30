import styled from "styled-components"

export default Header;


function Header(){
    return <Wrapper>Characters</Wrapper>
}

const Wrapper = styled.header`
    background: green;
    width: 100vw;
    text-align: center;
    padding: 20px;
    color: white;
`