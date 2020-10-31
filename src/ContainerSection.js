import styled from "styled-components";

export default ContainerSection;


function ContainerSection({children, newClass}){
    return <Wrapper  className={newClass} >{children}</Wrapper>
}

const Wrapper = styled.div`
    background: whitesmoke;
    padding: 20px 0 80px 0;
    
`