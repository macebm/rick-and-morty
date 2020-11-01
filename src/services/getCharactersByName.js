
export default function getCharactersByName(searchedName){
    return fetch("https://rickandmortyapi.com/api/character/?name=" + searchedName)
    .then(res => res.json())
    .catch(err => console.log(err))
}