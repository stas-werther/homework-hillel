const { readJSON, writeJSON } = require('./utils');
const { readFile } = require('fs');
const { resolve } = require('path');
const http = require('http');
const { join } = require('path');

const usersAddr = join(__dirname, './users.json');
const levelsAddr = join(__dirname, './levels.json');

// patchUser

const patchUser = (idUser, propertyUser, value) => {
  readJSON(usersAddr, (err, data) => {
    const indexUser = data.findIndex((item) => item.id == idUser);
    data[indexUser][propertyUser] = value
    writeJSON(usersAddr, data, () => { });
  });
};

// deleteUser

const deleteUser = (idUser) => {
  readJSON(usersAddr, (err, data) => {
    const newListUsers = data.filter((item) => item.id != idUser);
    writeJSON(usersAddr, newListUsers, () => { });
  });
};

const route = (req, res, data) => {
  const parsedUrl = req.url.split('/').filter((part) => part);

  switch (parsedUrl[0]) {
    case 'delete':
      deleteUser(parsedUrl[1]);
      console.log('Deleted');
      break;
    case 'patch':
      patchUser(parsedUrl[1],parsedUrl[2],parsedUrl[3]);
      console.log('Patched');
    default:
      res.end('Hi there!');
  }
};

const server = http.createServer((req, res) => {
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      route(req, res, body ? JSON.parse(body) : undefined);
    });
});

server.listen(8080, () => {
  console.log('You can reach the server here http://localhost:8080');
}); 

