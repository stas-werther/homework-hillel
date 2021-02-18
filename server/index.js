const { readJSON, writeJSON } = require('./utils');
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

app.delete('/:id', ({ params }, res) => {
  const { id } = params;
  readJSON(usersAddr, (err, data) => {
    const newListUsers = data.filter((item) => item.id != id);
    writeJSON(usersAddr, newListUsers, () => { });
    res.send(newListUsers);
  });
});

app.patch('/:id', ({ body, params }, res) => {
  const { id } = params;
  let keysBody=Object.keys(body);
  let valuesBody=Object.values(body);
  readJSON(usersAddr, (err, data) => {
    let index=data.findIndex((item)=>item.id==id);
    for(let i=0;i<keysBody.length;i++){
      data[index][keysBody[i]] = valuesBody[i];
    }
    writeJSON(usersAddr, data, () => {});
    res.send(data);
  });

});

app.get('/get', (req, res) => {
  readJSON(usersAddr, (_, data) => {
    res.send(data);
  });
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

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});
