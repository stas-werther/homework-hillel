const { dataOfUser } = require('./dataUser');

const app = document.getElementById('app');

dataOfUser()
  .then(function (resultOfGet) {
    resultOfGet.forEach((el) => {
        const card = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardBody = document.createElement('div');
        card.className = "card";
        cardHeader.className = "card__header";
        cardBody.className = "card__body";
        cardBody.innerText = `${el.level}`;
        cardHeader.innerText = `${el.name}`;
        app.appendChild(card);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
    });
  });