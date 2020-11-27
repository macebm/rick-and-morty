export default function getEpisodes(){
    return fetch("https://rickandmortyapi.com/api/episode/")
    .then(res => res.json())
    .catch(err => console.log(err.message))
}