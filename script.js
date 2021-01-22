class MilitaryResource {
    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
    }

    isReadyToMove() {
      return this.distance > 0;
    }

    isReadyToFight() {
      return this.health > 0;
    }

    restore() {
      this.restoreHealth();
      this.restoreMove();
    }

    restoreHealth() {
      this.health = this.maxHealth;
    }

    restoreMove() {
      this.distance = this.maxDistance;
    }

    clone() {
      return new MilitaryResource(this.type, this.health, this.distance);
    }
}
class Squad {
  constructor(defaultResources) {
      if (defaultResources) this.combineResources(defaultResources);
  }

  squad = [];

  isReadyToMove() {
    this.squad.every((item) => item.isReadyToMove());
  }

  isReadyToFight() {
    this.squad.every((item) => item.isReadyToFight());
  }

  restore() {
    this.restoreHealth();
    this.restoreMove();
  }

  restoreHealth() {
    this.squad.forEach((item) => item.restoreHealth());
  }

  restoreMove() {
    this.squad.forEach((item) => item.restoreMove());
  }

  clone() {
    return new Squad(this.squad.map((element) => element.clone()));
  }

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
