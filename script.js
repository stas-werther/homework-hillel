function ControlPanel() {}

ControlPanel.prototype.isReadyToMove = function () {
  if (this.distance) {
        return this.distance > 0;
  } else if (this.squad) {
        return this.squad.every((item) => item.isReadyToMove());
  } throw "it is not MilitaryResource";
};

ControlPanel.prototype.isReadyToFight = function () {
  if (this.health) {
        return this.health > 0;
  } else if (this.squad) {
        return this.squad.every((item) => item.isReadyToFight());
  } throw "it is not MilitaryResource";
};

ControlPanel.prototype.restore = function () {
  this.restoreHealth();
  this.restoreMove();
};

ControlPanel.prototype.restoreHealth = function () {
  if (this.health) {
        this.health = this.maxHealth;
  } else if (this.squad) {
        this.squad.forEach((item) => item.restoreHealth());
  }
};

ControlPanel.prototype.restoreMove = function () {
  if (this.distance) {
      this.distance = this.maxDistance;
  } else if (this.squad)
    this.squad.forEach((item) => item.restoreMove());
};

ControlPanel.prototype.clone = function () {
   const result = Object.create(
     Object.getPrototypeOf(this),
     Object.getOwnPropertyDescriptors(this)
    );

   if (result.squad) {
        result.squad = this.squad.map((element) => element.clone());
   }
   return result;
};

function MilitaryResource(type, health, distance) {
  this.type = type;
  this.health = this.maxHealth = health;
  this.distance = this.maxDistance = distance;
}
MilitaryResource.prototype = Object.create(ControlPanel.prototype);
MilitaryResource.prototype.constructor = MilitaryResource;

function Squad(defaultResources) {
  this.squad = [];
  if (defaultResources) this.combineResources(defaultResources);
}

Squad.prototype = Object.create(ControlPanel.prototype);
Squad.prototype.constructor = Squad;

Squad.prototype.getReadyToMoveResources = function () {
  return this.squad.map((element) => element.isReadyToMove && element);
};

Squad.prototype.combineResources = function (anyresourse) {
  this.squad.push(...anyresourse);
};

// Testing
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
