"use strict";

const urlCharacter = "https://rickandmortyapi.com/api/character";

const getCharacters = (url) => fetch(url).then(getJsonFromResponse);

const getJsonFromResponse = (response) => response.json();

getCharacters(urlCharacter).then(console.log);

let randomId = `/${Math.floor(Math.random() * 671)}`;

const getRandomCharacter = (url) =>
  fetch(url + randomId).then(getJsonFromResponse);

getRandomCharacter(urlCharacter).then(console.log);