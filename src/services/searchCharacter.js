export default function searchCharacters(name) {
    return fetch('https://rickandmortyapi.com/api/character/?name=' + name) 
    .then(res => res.json())
}
