import './styles.css';
import {round} from './back-end.js';
import {Simon} from './back-end.js';
import {Player} from './back-end.js';
import {checkWin} from './back-end.js';


$(document).ready(function() {
  var game = new Simon(0, []);
  var player1 = new Player('Player 1', []);

  $(".numberButtons").click(function(){
    var currentNumber = ($(this).text());
    console.log(currentNumber);
  });

  // round(game, player1);

  // game.turn();
  //
  //
  // player1.play();
  // checkWin(game,player1);
});
