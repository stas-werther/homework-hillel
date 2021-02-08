const fetch = require('node-fetch');


const get = () => fetch('http://localhost:8080/get');
const patchUser = (body) =>
  fetch('http://localhost:8080/patch', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body, {name:'Stas'}),
  });
const getJsonFromResponse = (response) => response.json();

get().then(getJsonFromResponse).then(last);
patchUser().then(getJsonFromResponse).then(last);

module.exports = {
    get,
    patchUser,
}
