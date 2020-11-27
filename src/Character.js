import styled from "styled-components"

export default function Character({name, imgUrl, species}){
    return <Wrapper>
        <h3>{name}</h3>
        <img src={imgUrl} alt=""/>
        <p>{species}</p>
    </Wrapper>
}

const Wrapper = styled.section`
    margin: 0 auto 30px auto;
    width: 300px;
    text-align: center;
    background: #1F2151;
    padding: 5px;
    color: #F7F53F;   

    img{
        width: 200px;
    }
`