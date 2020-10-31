import { useEffect, useState } from "react";
import Character from "./Character";
import ContainerSection from "./ContainerSection";
import Footer from "./Footer";
import Header from "./Header";
import Location from "./Location"
import getCharacters from "./services/getCharacters";
import getLocations from "./services/getLocations";


export default function App() {

  const [characters, setCharacters] = useState([])
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error.message))
  }, [])

  useEffect(() => {
    getLocations()
    .then(data => setLocations(data.results))
    .catch(error => console.log(error.message))
  })

  return (
    <div className="App">
      <Header/>
        
        <ContainerSection id="charactersection">
          {characters.map(({name, image, species, id}) => 
            <Character key={id} name={name} imgUrl={image} species={species}/>)}
        </ContainerSection>

        <ContainerSection id="locationsection">
          {locations.map(({id, name, type, dimension}) => 
            <Location key={id} name={name} type={type} dimension={dimension}/>)}
        </ContainerSection>
      <Footer/>
    </div>
  );
}



