function MilitaryResource(type, health, distance) {
  this.type = type;
  this.health = this.maxHealth = health;
  this.distance = this.maxDistance = distance;
}

  MilitaryResource.prototype.isReadyToMove = function() {
    return this.distance > 0;
  };

  MilitaryResource.prototype.isReadyToFight = function() {
    return this.health > 0;
  };

  MilitaryResource.prototype.restore = function() {
    this.restoreHealth();
    this.restoreMove;
  };

  MilitaryResource.prototype.restoreHealth = function() {
    this.health = this.maxHealth;
  };

  MilitaryResource.prototype.restoreMove = function() {
    this.distance = this.maxDistance;
  };

  MilitaryResource.prototype.clone = function() {
    return new MilitaryResource(this.type, this.health, this.distance);
  };


function Squad(defaultResources) {
  this.squad = [];
  if (defaultResources) this.combineResources(defaultResources);
}

Squad.prototype = Object.create(MilitaryResource.prototype);
Squad.prototype.constructor = Squad;

Squad.prototype.isReadyToMove = function() {
  return this.squad.every((item) => item.isReadyToMove());
};

Squad.prototype.isReadyToFight = function() {
  return this.squad.every((item) => item.isReadyToFight());
};

Squad.prototype.restore = function() {
  this.restoreHealth();
  this.restoreMove();
};

Squad.prototype.restoreHealth = function() {
  this.squad.forEach((item) => item.restoreHealth());
};

Squad.prototype.restoreMove = function() {
  this.squad.forEach((item) => item.restoreMove());
};

Squad.prototype.clone = function() {
  return new Squad(this.squad.map((el) => el.clone()));
};

Squad.prototype.getReadyToMoveResources = function () {
  return this.squad.map((element) => element.isReadyToMove && element);
};

Squad.prototype.combineResources = function (anyResources) {
  this.squad.push(...anyResources);
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
