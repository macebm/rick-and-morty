import styled from 'styled-components';

export default function Search() {

    return  <SearchStyled action="submit">
                <input name="thesearchbox"type="text" placeholder="Search name..."/>
                <button>Find</button>
            </SearchStyled>
}

const SearchStyled = styled.form`
    button {
        background-color: yellowgreen;
    }
`