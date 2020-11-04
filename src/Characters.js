import { useEffect, useState } from "react";
import styled from "styled-components";
import Character from "./Character";
import ContainerSection from "./ContainerSection";
import getCharacters from "./services/getCharacters";
import getSearchedCharacters from "./services/getSearchedCharacter";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState([]);

  function handleCharacterSearch(event) {
    setSearchedCharacter(event.target.value);
    if (event.key === "Enter") {
      const searchedCharacter = event.target.value;
      getSearchedCharacters(searchedCharacter)
        .then((data) => setCharacters(data.results))
        .catch((error) => console.log(error.message));
    }
  }

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error.message));
  }, [searchedCharacter]);

  return (
    <ContainerSection>
      <CaracterSearchBox>
        <input
          type="text"
          placeholder="Write character name"
          onKeyDown={handleCharacterSearch}
          value={searchedCharacter}
          onChange={handleCharacterSearch}
        />
        {searchedCharacter !== "" && (
          <span onClick={() => setSearchedCharacter("")}>&times;</span>
        )}
      </CaracterSearchBox>

      {characters ? (
        characters.map(({ name, image, species, id }) => (
          <Character key={id} name={name} imgUrl={image} species={species} />
        ))
      ) : (
        <h3>No character found with this name</h3>
      )}

      {/* {characters.map(({ name, image, species, id }) => (
        <Character key={id} name={name} imgUrl={image} species={species} />
      ))} */}
    </ContainerSection>
  );
}

const CaracterSearchBox = styled.div`
  border: 1px solid black;
  max-width: 230px;
  display: flex;
  padding: 10px;
  background: blanchedalmond;
  margin-left: 10px;

  input {
    border: none;
    background: blanchedalmond;
  }

  span {
    color: red;
    margin-left: 5px;
  }
`;
