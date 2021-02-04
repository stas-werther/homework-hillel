module.exports = class Squad {
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
