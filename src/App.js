import {useEffect, useState} from "react";
import getCharacters from "./services/getCharacters";
import Character from './Character';
import getLocation from "./services/getLocation";
import Location from "./Location";


export default function App() {

  const [locations,setLocations] = useState([])

  useEffect(() => {
    getLocation()
    .then(data => setLocations(data.results))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      {locations.map(({name, id, type , dimension}) =>
        <Location key={id} name={name} type={type} dimension={dimension}/>)
      }
    </div>
  );
}

