export default function getSearchedCharacters(name) {
  return fetch("https://rickandmortyapi.com/api/character/?name=" + name)
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
}
