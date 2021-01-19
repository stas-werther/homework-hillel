class ControlPanel {

  isReadyToMove() {
    if (this.distance) {
          return this.distance > 0;
    } else if (this.squad) {
          return this.squad.every((item) => item.isReadyToMove());
    } throw "it is not MilitaryResource";
  };
  
  isReadyToFight() {
    if (this.health) {
          return this.health > 0;
    } else if (this.squad) {
          return this.squad.every((item) => item.isReadyToFight());
    } throw "it is not MilitaryResource";
  };
  
  restore() {
    this.restoreHealth();
    this.restoreMove();
  };
  
  restoreHealth() {
    if (this.health) {
          this.health = this.maxHealth;
    } else if (this.squad) {
          this.squad.forEach((item) => item.restoreHealth());
    }
  };
  
  restoreMove() {
    if (this.distance) {
        this.distance = this.maxDistance;
    } else if (this.squad)
      this.squad.forEach((item) => item.restoreMove());
  };
  
  clone() {
     const result = Object.create(
       Object.getPrototypeOf(this),
       Object.getOwnPropertyDescriptors(this)
      );
  
     if (result.squad) {
          result.squad = this.squad.map((element) => element.clone());
     }
     return result;
  }
}

class MilitaryResource extends ControlPanel {
    constructor(type, health, distance) {
        super();
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
    }
}
class Squad extends ControlPanel {
  constructor(defaultResources) {
      super();
      if (defaultResources) this.combineResources(defaultResources);
  }

  squad = [];


  getReadyToMoveResources() {
    return this.squad.map((element) => element.isReadyToMove && element);
  }
  
  combineResources(anyresourse) {
    this.squad.push(...anyresourse);
  }

}

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
