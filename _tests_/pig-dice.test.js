import { Player } from './../src/pig-dice.js';

describe('Player', () => {

  test('should correctly create a Player object with 2 players names', () => {
    var player1 = new Player ("bob", true)
    expect(player1.getName()).toEqual("bob");
    var player2 = new Player ("tim", false)
    expect(player2.getName()).toEqual("tim");
  });

  test('should correctly roll a dice', () => {
    var player3 = new Player ("name", true);
    player3.roll();
    expect(player3.number).toBeLessThan(7);
  });

  test('should correctly add score', () => {
    var player4 = new Player ("name", true);
    player4.roll();
    player4.addScore();
    expect(player4.number).toBeGreaterThanOrEqual(2);
  });
});

  test('should correctly change active player', () => {
    var player5 = new Player ("name", true);
    player5.roll();
    player5.addScore();
    expect(player5.changeActive()).toBe(false);
  });
