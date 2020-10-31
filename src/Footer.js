import styled from "styled-components"

export default Footer;


function Footer(){
    return <Wrapper>
        <nav>
            <Anchor href="">Characters</Anchor>
            <Anchor href="">Locations</Anchor>
        </nav>
    </Wrapper>
}

const Wrapper = styled.footer`
    background: #F7F53F;
    width: 100vw;
    padding: 10px;
    color: #1F2151;
    position: fixed;
    bottom: 0;
    font-weight: bold;

    nav{
        display: flex;
        justify-content: space-evenly;
    }
`

const Anchor = styled.a`
    padding: 10px;
    text-decoration: none;


    :hover{
        color: red;
    }
`