module.exports = class MilitaryResource {
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