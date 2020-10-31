import styled from "styled-components";

export default ContainerSection;


function ContainerSection({children, className}){
    return <Wrapper  className={className} >{children}</Wrapper>
}

const Wrapper = styled.div`
    background: whitesmoke;
    padding: 20px 0 80px 0;
    
`