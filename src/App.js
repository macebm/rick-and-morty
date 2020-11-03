import { useEffect, useState } from "react";
import Character from "./Character";
import NavButton from "./NavButton";
import ContainerSection from "./ContainerSection";
import Footer from "./Footer";
import Header from "./Header";
import Location from "./Location";
import getCharacters from "./services/getCharacters";
import getLocations from "./services/getLocations";
import getEpisodes from "./services/getEpisodes";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    getLocations()
      .then((data) => setLocations(data.results))
      .catch((error) => console.log(error.message));
  });

  useEffect(() => {
    getEpisodes()
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.log(error.message));
  });

  return (
    <div className="App">
      <Header />

      <ContainerSection className="charactersection">
        {characters.map(({ name, image, species, id }) => (
          <Character key={id} name={name} imgUrl={image} species={species} />
        ))}
      </ContainerSection>

      <ContainerSection className="locationsection hidden">
        {locations.map(({ id, name, type, dimension }) => (
          <Location key={id} name={name} type={type} dimension={dimension} />
        ))}
      </ContainerSection>

      <ContainerSection className="episodesection hidden">
        {episodes.map(({ id, name, air_date, episode }) => (
          <Location
            key={id}
            name={name}
            air_date={air_date}
            episode={episode}
          />
        ))}
      </ContainerSection>
      <Footer>
        <nav>
          <NavButton onClick={ShowCharacters}>Characters</NavButton>
          <NavButton onClick={ShowLocations}>Locations</NavButton>
          <NavButton onClick={ShowEpisodes}>Episodes</NavButton>
        </nav>
      </Footer>
    </div>
  );

  function ShowCharacters() {
    document.querySelector(".episodesection").classList.add("hidden");
    document.querySelector(".charactersection").classList.remove("hidden");
    document.querySelector(".locationsection").classList.add("hidden");
  }
}

function ShowLocations() {
  document.querySelector(".episodesection").classList.add("hidden");
  document.querySelector(".charactersection").classList.add("hidden");
  document.querySelector(".locationsection").classList.remove("hidden");
}

function ShowEpisodes() {
  document.querySelector(".episodesection").classList.remove("hidden");
  document.querySelector(".charactersection").classList.add("hidden");
  document.querySelector(".locationsection").classList.add("hidden");
}
