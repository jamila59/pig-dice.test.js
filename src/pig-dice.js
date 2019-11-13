export function Player (name, isActive) {
  this.name = name,
  this.score = 0,
  this.totalScore = 0,
  this.number = 0,
  this.active = isActive
}

Player.prototype.roll = function () {
  return this.number = Math.ceil( Math.random() * 6 );
}

Player.prototype.addScore = function () {
  if (this.number !== 1 ){
    this.totalScore += this.number;
    console.log(this.totalScore);
  } else if (this.number === 1) {
    this.score = 0;
  }
}

Player.prototype.changeActive = function () {
  if (this.active === true) { //checks player is active, if active player is not set to inactive
    this.active = false;
  } else {                    //otherwise, inactive is now set to active
    this.active = true;
  }
}

Player.prototype.alert = function() {
  if (this.totalScore >= 100) {
    alert("Congrats! You have won the game!");
  }
}
Player.prototype.getName = function() {
  console.log("getName: " + this.name);
  return this.name;
}
