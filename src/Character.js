import styled from "styled-components"

export default function Character({name, imgUrl, species}){
    return <Wrapper>
        <h3>{name}</h3>
        <p>{species}</p>
        <img src={imgUrl} alt=""/>
    </Wrapper>
}

const Wrapper = styled.section`
    margin: 10px auto;
    width: 200px;
`