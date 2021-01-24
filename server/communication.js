const MilitaryResource = require("../MilitaryResource");
const Squad = require("../Squad");

let firstMilitary = new MilitaryResource("BTR", 100, 200);
let secondMilitary = new MilitaryResource("Panzer", 300, 400);
let clone = firstMilitary.clone();
let array = [firstMilitary, secondMilitary, clone];
let firstSquad = new Squad(array);
firstSquad.squad[0].health = -20;
console.log(firstSquad.squad[0].health);
let secondSquad = firstSquad.clone();
firstMilitary.health = -40;
secondMilitary.distance = 0;
firstSquad.restore()
console.log(firstSquad);
console.log(firstSquad.isReadyToFight());