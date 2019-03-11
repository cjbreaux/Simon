import './styles.css';
import {Simon} from './back-end.js';
import {Player} from './back-end.js';
import {checkWin} from './back-end.js';


$(document).ready(function() {
  var game = new Simon(0, []);
  var player1 = new Player('Player 1', []);

  $("#start").click(function(){
    $("#start").hide();
    game.turn();
  });

  $(".numberButtons").click(function(){
    var currentNumber = ($(this).text());
    player1.inputs.push(currentNumber);
    checkWin(game, player1);
  });

  $("#startOver").click(function(){
    $("#lose").hide();
    $("#start").show();
    $(".container").show();
  });
});
