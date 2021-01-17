function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = this.maxHealth = health;
    this.distance = this.maxDistance = distance;
 }
 
 MilitaryResource.prototype.isReadyToMove = (distance) => {
    if(distance > 10 && distance <= 50) {
        return true;
    } else {
        return false;
    }
 };
 MilitaryResource.prototype.isReadyToFight = (health) => {
     if(health >= 25) {
         return true;
     } else {
         return false;
     }
 };
 MilitaryResource.prototype.restore;
 MilitaryResource.prototype.clone;
 
 
 function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
 }
 Squad.prototype = Object.create(MilitaryResource.prototype);
 Squad.prototype.constructor = Squad;
 const gun = new Squad();
 console.log(gun);
 
 
 Squad.prototype.isReadyToMove;
 Squad.prototype.isReadyToFight;
 Squad.prototype.restore;
 Squad.prototype.getReadyToMoveResources;
 Squad.prototype.combineResources;
 Squad.prototype.clone;