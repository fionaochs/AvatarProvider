// export const fetchCharacters = () => {
//   return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
//     .then(res => res.json())
//     .then(json => json.map(character => ({
//       id: character._id,
//       name: character.name,
//       allies: character.allies,
//       enemies: character.enemies,
//       affiliation: character.affiliation,
//       image: character.photoUrl
//     })));
// };
export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${5}?page=${1}')
    .then(res => res.json())
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      allies: character.allies,
      enemies: character.enemies,
      affiliation: character.affiliation,
      image: character.photoUrl
    })));
};
