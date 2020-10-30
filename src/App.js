import {useEffect, useState} from "react";
import getCharacters from "./services/getCharacters";
import Character from './Character';


export default function App() {

  const [characters,setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <h1>Who is Who in Rick and Morty</h1>
      <form onSubmit={onSubmit}>
      <label>
        <input 
        name="searchbox"
        type="text"
        placeholder="Search"
        />
        </label>
        </form>
      <ul>
      {characters.map(({name, id, image}) => (
      <li><Character key={id} name={name} imgUrl={image} /></li>
      ))}
      </ul>
    </div>
  );

  function onSubmit(event){
  const input = event.target
  const name = input.searchbox
  console.log(name)
  return name
  }
}

