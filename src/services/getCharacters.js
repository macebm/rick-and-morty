export default function getCharacters(){
    return fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .catch(err => console.log(err.message))
}