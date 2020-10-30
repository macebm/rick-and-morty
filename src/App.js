import {useEffect, useState} from "react";
import getCharacters from "./services/getCharacters";


export default function App() {

  const [characters,setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
    .then (data => setCharacters(data.results))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <ul>
      {characters.map(characters => <li>{characters.name}</li>)}
      </ul>
        
    </div>
  );
}

