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
        data[indexUser, propertyUser] = value;
        writeJSON(usersAddr, data, () => { });
    });
};

// for test patchUser

// deleteUser

const deleteUser = (idUser) => {
    readJSON(usersAddr, (err, data) => {
        const indexdeleteUser = data.findIndex((item) => item.id == idUser);
        delete data[indexdeleteUser];
        writeJSON(usersAddr, data.filter(Object), () => { });
    });
};

// for test deleteUser

 

const get = (req, res) => {
    
    res.writeHead(200, {
        ['Content-Type']: 'application/json',
    });

    readJSON(usersAddr, (_, data) => {
        res.end(JSON.stringify(data));
    });
};

const add = (req, res, body) => {
    res.writeHead(200, {
        ['Content-Type']: 'application/json',
    });
    readJSON(usersAddr, (_, data) => {
        const lastUser = data[data.length - 1];
        const newData = [
            ...data,
            {
                ...body,
                id: ((lastUser && lastUser.id) || 0) + 1,
            },
        ];
        writeJSON(usersAddr, newData, () => {
            res.end(JSON.stringify(newData));
        });
    });
};

const route = (req, res, data) => {
    const parsedUrl = req.url.split('/').filter((part) => part);

    switch (parsedUrl[0]) {
        
        case 'get':
            get(req, res, parsedUrl);
            break;
        case 'add':
            add(req, res, data);
            break;
        case 'patchUser':
            patchUser(2, 'name', 'Sas');
            break;
        case 'deleteUser':
            deleteUser(1);
            break;
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



