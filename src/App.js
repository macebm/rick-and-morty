import { useEffect, useState } from "react";
import Character from "./Character";
import Header from "./Header";
import getCharacters from "./services/getCharacters";

export default function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Header/>
        {characters.map(({name, image, species, id}) => <Character key={id} name={name} imgUrl={image} species={species}/>)}

    </div>
  );
}



