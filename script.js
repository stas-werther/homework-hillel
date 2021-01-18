function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = this.maxHealth = health;
    this.distance = this.maxDistance = distance;
 }
 
 MilitaryResource.prototype.isReadyToMove = (distance) => {
    if(distance > 10 && distance <= 50) {
        console.log('Готов двигаться!');
        return true;
    } else {
        console.log('Движение невозможно...');
        return false;
    }
 };
 MilitaryResource.prototype.isReadyToFight = (health) => {
     if(health >= 25) {
        console.log('К бою готов :)');
         return true;
     } else {
         console.log('Слишком мало хп для сражение (');
         return false;
     }
 };
 MilitaryResource.prototype.restore = (maxHealth, maxDistance) => {
    if((health = 0) && (distance = 0)) {
        health =+ maxHealth;
        distance =+ maxDistance;
    };
 };
 MilitaryResource.prototype.clone = (oneSquad, copy) => {
    copy = Object.assign({}, oneSquad);
 };
 
 
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