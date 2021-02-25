const { readJSON, writeJSON } = require('./utils');
const { join } = require('path');
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const usersAddr = join(__dirname, './users.json');


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  readJSON(usersAddr, (_, data) => {
    res.send(data);
  });
});

app.delete('/:id', ({ params }, res) => {
  const { id } = params;
  console.log(id);
  readJSON(usersAddr, (_, data) => {
    res.send('Deleted');
  });
});

app.patch('/:id', ({ body, params }, res) => {
  const { id } = params;
  console.log(id, body);
  res.send('Patched');
});

app.post('/', ({ body }, res) => {
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
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});
