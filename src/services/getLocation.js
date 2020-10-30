export default function getLocations(){
    return fetch('https://rickandmortyapi.com/api/location/')
    .then (res => res.json())
}