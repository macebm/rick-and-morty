import styled from "styled-components"

export default function Location({name, type, dimension}){
    return <Wrapper>
        <h3>Name of Location:</h3>
        <p>{name}</p>
        <h3>Type of Location:</h3>
        <p>{type}</p>
        <h3>Dimension of Location:</h3>
        <p>{dimension}</p>
    </Wrapper>
}

const Wrapper = styled.section`
    margin: 0 auto 30px auto;
    width: 300px;
    text-align: center;
    background: #1F2151;
    padding: 5px;    
    color: #F7F53F;
    

    p{
        color: white;
    }
`