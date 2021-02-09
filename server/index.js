const { readJSON, writeJSON } = require('./utils/index');
const { readFile } = require('fs');
const { resolve } = require('path');
const http = require("http");
const { join } = require('path');
const cors = require('cors');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const usersAddr = join(__dirname, './users.json');
const levelsAddr = join(__dirname, './levels.json');


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/get', (req, res) => {
    readJSON(usersAddr, (_, data) => {
        res.send(data);
    });
});


app.delete("/:id", ({ params }, res) => {
    const { id } = params;
    readJSON(usersAddr, (_, data) => {
        const obj = data.find(el => el.id == id);
        const newArr = [...data].filter(el => el !== obj);
        writeJSON(usersAddr, newArr, () => {
            res.end(JSON.stringify(newArr));
        });
    });
    readJSON(usersAddr, (_, data) => {
        res.send("Deleted!");
    });
});

app.patch('/:id', ({ body, params }, res) => {
    const { id } = params;
    readJSON(usersAddr, (_, data) => {
        const index = data.findIndex(el => el.id == id);
        if(body.name) {
            data[index].name = body.name;
        } if(body.level) {
            data[index].level = body.level;
        }
        data[index].id = Number(id);
        writeJSON(usersAddr, data, () => {
            res.end(JSON.stringify(data));
        });
    });
    res.send('Patched');
});

app.post('/add', ({ body }, res) => {
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
            res.send(newData);
        });
    });
});

app.get('/', (req, res) => {
    res.send('Hello man!');
});

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
});