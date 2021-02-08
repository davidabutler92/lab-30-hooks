export const getCharacters = () => {
  return fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  ).then((res) => res.json());
};

export const getCharactersById = (id) => {
  return fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
  ).then((res) => res.json());
};
