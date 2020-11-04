import { useEffect, useState } from "react";
import styled from "styled-components";
import Character from "./Character";
import ContainerSection from "./ContainerSection";
import getCharacters from "./services/getCharacters";
import getNextPageCharacters from "./services/getNextPageCharacters";
import getSearchedCharacters from "./services/getSearchedCharacter";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState([]);
  const [pageNumber, setPageNumber] = useState([1]);

  function handleCharacterSearch(event) {
    setSearchedCharacter(event.target.value);
    if (event.key === "Enter") {
      const searchedCharacter = event.target.value;
      getSearchedCharacters(searchedCharacter)
        .then((data) => setCharacters(data.results))
        .catch((error) => console.log(error.message));
    }
  }

  // function handlePageOfCharacters(operator) {
  //   const count = Number(pageNumber);
  //   if (operator === "-" && count > 1) {
  //     const counter = count - 1;
  //     setPageNumber(counter);
  //   } else if (operator === "+" && count < 20) {
  //     const counter = count + 1;
  //     setPageNumber(counter);
  //   } else {
  //     alert("There are only pages between 1 and 20");
  //   }
  // }

  function handlePageOfCharacters(operator) {
    const count = Number(pageNumber);
    if (operator === "-" && count > 1) {
      // const counter = count - 1;
      setPageNumber(count - 1);
    } else if (operator === "-" && count === 1) {
      setPageNumber(20);
    } else if (operator === "+" && count < 20) {
      //const counter = count + 1;
      setPageNumber(count + 1);
    } else if (operator === "+" && count === 20) {
      setPageNumber(1);
    }
  }

  useEffect(() => {
    getNextPageCharacters(pageNumber)
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error.message));
  }, [pageNumber]);

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error.message));
  }, [searchedCharacter]);

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error.message));
  }, []);

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
          <span
            onClick={() => {
              setSearchedCharacter("");
              setPageNumber(1);
            }}
          >
            &times;
          </span>
        )}
      </CaracterSearchBox>
      <Position>
        <button
          onClick={() => {
            handlePageOfCharacters("-");
          }}
        >
          Back
        </button>
        <h3>{pageNumber} of 20</h3>
        <button
          onClick={() => {
            handlePageOfCharacters("+");
          }}
        >
          Next
        </button>
      </Position>

      {characters ? (
        characters.map(({ name, image, species, id }) => (
          <Character key={id} name={name} imgUrl={image} species={species} />
        ))
      ) : (
        <NoCaracter>
          <h3>No character found with this name.</h3>
          <h3>Click on the button below to return!</h3>
          <button
            onClick={() => {
              setSearchedCharacter("");
              setPageNumber(1);
            }}
          >
            RETURN
          </button>
        </NoCaracter>
      )}
    </ContainerSection>
  );
}

const Position = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 300px;
  text-align: center;
  margin: 0 auto 30px auto;
  height: auto;

  button {
    border: none;
    background: #1f2151;
    border-radius: 6px;
    padding: 1rem 2rem;
    color: #f7f53f;
    height: auto;
  }
`;

const CaracterSearchBox = styled.div`
  border: 1px solid black;
  max-width: 230px;
  display: flex;
  padding: 10px;
  background: blanchedalmond;
  margin: 1rem auto 1rem auto;

  input {
    border: none;
    background: blanchedalmond;
  }

  span {
    color: red;
    margin-left: 5px;
  }
`;

const NoCaracter = styled.div`
  text-align: center;
  color: red;

  button {
    border: none;
    background: #1f2151;
    border-radius: 6px;
    padding: 1rem 2rem;
    color: #f7f53f;
    height: auto;
  }
`;
