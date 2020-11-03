import { useEffect, useState } from "react";
import Character from "./Character";
import Header from "./Header";
import getCharacters from "./services/getCharacters";
import getCharactersByName from "./services/getCharactersByName";

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
      <form /*onSubmit={logName}*/>
        <label>
          Search Name:
        </label><br />
  <input type="text" name="searchName" onChange={logName1} />
      </form>
         {typeof characters !== "undefined" &&
          characters.map(({name, image, species, id}) => <Character key={id} name={name} imgUrl={image} species={species}/>)
         }
    </div>
  );

  // function logName(event) {
  //   event.preventDefault()
  //   const search = event.target
  //   const searchedName = search.searchName
  //   console.log(searchedName.value)
  //   getCharactersByName(searchedName.value)
  //   .then(namedata => setCharacters(namedata.results))
  //   .catch(error => console.log(error))
  // }

  function logName1(event) {
    event.preventDefault()
    const search = event.target
    // console.log(search.value)
    getCharactersByName(search.value)
    .then(namedata => setCharacters(namedata.results))
    .catch(err => console.log(err))
  }
}



