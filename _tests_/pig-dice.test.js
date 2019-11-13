import { Player } from './../src/pig-dice.js';

describe('Player and all its prototypes', () => {

test('should correctly create a Player object with 2 players names', () => {
  var player1 = new Player ("bob", true)
  expect(player1.getName()).toEqual("bob");
  var player2 = new Player ("tim", false)
  expect(player2.getName()).toEqual("tim");
});

test('should correctly roll a dice'), () => {
  var diceRoll = new Player(2)
  expect(diceRoll.roll()).toEqual(this.number);
};

});








//   test('should correctly create a Player object with 2 players', () => {
//     var newPlayer  = new Player(newPlayer, true);
//     var newPlayer2  = new Player(newPlayer2, false);
//     expect(newPlayer.changeActive()).toEqual(newPlayer, true);
//     expect(newPlayer2.changeActive()).toEqual(newPlayer2, false);
//   });
