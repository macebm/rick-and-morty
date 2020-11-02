import { useEffect, useState } from "react";
import Button from "./Button";
import Character from "./Character";
import Header from "./Header";
import getCharacters from "./services/getCharacters";

export default function App() {

  const [characters, setCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    getCharacters()
    .then(data => setInfos(data.info))
    .catch(error => console.log(error))
  },[])

  const changePage = infos.next

  console.log(changePage)

  function handleChange(event) {
  setSearchTerm(event.target.value);
}
 
  useEffect(() => {
    const results = characters.filter(person =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [characters, searchTerm]);

 

  return (
    <div className="App">
      <button>Next page</button>
      {/* <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button/> */}
      <Header/>
      {characters.map(({name, image, species, id}) => <Character key={id} name={name} imgUrl={image} species={species}/>)}
        {searchResults.map(({name, image, species, id}) => <Character key={id} name={name} imgUrl={image} species={species}/>)}
    
    </div>
  );
}



