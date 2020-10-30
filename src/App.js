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
      <form onSubmit={logName}>
        <label>
          Search:
        </label><br />
        <input type="text" name="searchName" />
      </form>
        {characters.map(({name, image, species, id}) => <Character key={id} name={name} imgUrl={image} species={species}/>)}
    </div>
  );

  function logName(event) {
    event.preventDefault()
    const search = event.target
    const searchedName = search.searchName
    console.log(searchedName.value)
  
  }
}



