import {useEffect, useState} from "react";
import getCharacters from "./services/getCharacters";
import Character from './Character';
import searchCharacter from "./services/searchCharacter";



export default function App() {

  const [characters,setCharacters] = useState([])
  const [searchcharacters,setSearchCharacters] = useState([])

  const handleChange = event => {
    setSearchCharacters(event.target.value);
  };

  useEffect(() => {
    searchCharacter()
    .then(data => setSearchCharacters(data.results))
    .catch(error => console.log(error))
  },[])

  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <h1>Who is Who in Rick and Morty</h1>
      <form>
      <label>
        <input 
        type="text"
        placeholder="Search"
        value={searchcharacters}
        onChange={handleChange}

        />
        </label>
        </form>
      <ul>
      {function test(){
        characters.map(({name, id, image}) => (
          <li><Character key={id} name={name} imgUrl={image} /></li>
          ))
      }}
      </ul>
      {/* <ul>
      {searchcharacters.map(({name, id, image}) => (
      <li><Character key={id} name={name} imgUrl={image} /></li>
      ))}
      </ul> */}
    </div>
  );

  // function onSubmit(event){
  // const form = event.target
  // const input = form.searchbox
  // const name = input.value

  // searchCharacter(name)
  // }
}

