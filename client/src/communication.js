const MilitaryResource = require("./militaryResource");
const Squad = require("./squad");

let firstMilitary = new MilitaryResource("BTR", 100, 200);
let secondMilitary = new MilitaryResource("Panzer", 300, 400);
let clone = firstMilitary.clone();

let firstSquad = new Squad(firstMilitary, secondMilitary);
firstSquad.squad[0].health = -20;
console.log(firstSquad.squad[0].health);
let secondSquad = firstSquad.clone();
firstMilitary.health = -40;
secondMilitary.distance = 0;
firstSquad.restore()
console.log(firstSquad);
console.log(firstSquad.isReadyToFight());