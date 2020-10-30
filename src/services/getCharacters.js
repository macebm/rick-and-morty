
const searchName = "rick"



export default function getCharacters() {
    return fetch('https://rickandmortyapi.com/api/character/?name=' + searchName) 
    .then(res => res.json())
}
