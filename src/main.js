import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Player } from './pig-dice';
// import { checkType } from './tracker';

var nameFirstPlayer = "";
var nameSecondPlayer = "";
$(document).ready(function() {

$("#formOne").submit(function(event){
    event.preventDefault();
     nameFirstPlayer = $("input#nameID").val();
     nameSecondPlayer = $("input#nameID7").val();
});
   var newPlayer  = new Player(nameFirstPlayer , true);
   var newPlayer2  = new Player(nameSecondPlayer , false);

    $("#roll").click(function(){
      if (newPlayer.active === true) {
        newPlayer.roll();
        newPlayer.addScore();
        newPlayer.alert();
        $(".scorePerThisTurn1").text(newPlayer.number);
        $(".overallScore1").text(newPlayer.totalScore);
      } else {
        console.log(newPlayer2);
        newPlayer2.roll();
        newPlayer2.addScore();
        newPlayer2.alert();
        $(".scorePerThisTurn2").text(newPlayer2.number);
        $(".overallScore2").text(newPlayer2.totalScore);
      }
    });

    // "HOLD" button functionality
    $("#pause").click(function() {
    newPlayer.changeActive();
    alert(" It is " + newPlayer2.getName() + "'s turn ")
    console.log(newPlayer2.getName());
    newPlayer2.changeActive();
  });

 });
