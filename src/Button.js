import styled from 'styled-components/macro';

export default function Button({next}){
    return <NextButton onSubmit={next}>Next Page</NextButton>
}

const NextButton = styled.button`
background-color: green;

`



