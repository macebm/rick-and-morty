import { useEffect, useState } from "react";
import Character from "./Character";
import ContainerSection from "./ContainerSection";
import getCharacters from "./services/getCharacters";
import getSearchedCharacters from "./services/getSearchedCharacter";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <ContainerSection>
      <input
        type="text"
        placeholder="Write character name"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            const searchedCharacter = event.target.value;
            getSearchedCharacters(searchedCharacter)
              .then((data) => setCharacters(data.results))
              .catch((error) => console.log(error.message));
          }
        }}
      />

      {characters !== undefined
        ? characters.map(({ name, image, species, id }) => (
            <Character key={id} name={name} imgUrl={image} species={species} />
          ))
        : alert("Not a character")}

      {/* {characters.map(({ name, image, species, id }) => (
        <Character key={id} name={name} imgUrl={image} species={species} />
      ))} */}
    </ContainerSection>
  );
}
