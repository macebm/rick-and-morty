import styled from "styled-components"

export default NavButton;


function NavButton({children, onClick}){

    

    return <Wrapper onClick={onClick}>{children}</Wrapper>
       
}

const Wrapper = styled.button`
    padding: 10px;
    text-decoration: none;


    :hover{
        color: deepskyblue;
    }
`

