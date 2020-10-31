import styled from "styled-components";

export default ContainerSection;


function ContainerSection({children}){
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.section`
    background: whitesmoke;
    padding: 20px 0 80px 0;
    
`