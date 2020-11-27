export default function getNextPageCharacters(pageNumber) {
  return fetch("https://rickandmortyapi.com/api/character/?page=" + pageNumber)
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
}
