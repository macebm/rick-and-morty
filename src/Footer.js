import styled from "styled-components"

export default Footer;


function Footer({children}){

    

    return <Wrapper>{children}
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

    
`
