import { useEffect, useState } from "react";
import Character from "./Character";
import ContainerSection from "./ContainerSection";
import getCharacters from "./services/getCharacters";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <ContainerSection>
      {characters.map(({ name, image, species, id }) => (
        <Character key={id} name={name} imgUrl={image} species={species} />
      ))}
    </ContainerSection>
  );
}
