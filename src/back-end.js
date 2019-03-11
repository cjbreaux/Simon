export function Simon(round, memory) {
  this.round = round;
  this.memory = memory;
}

Simon.prototype.turn = function() {
  var number = Math.floor(Math.random() * 4) + 1;
  this.memory.push(number);
  this.round++;
  console.log(`The round is ${this.round}`);
};

export function Player(name, inputs) {
  this.name = name;
  this.inputs = inputs;
}

Player.prototype.play = function(Simon) {
  this.inputs = [];
  var memoryLength = Simon.memory.length;
  // while (this.inputs.length < memoryLength){
  //
  // }
  // var answer = parseInt(prompt('Enter numbers:'));
  this.inputs.push();
  console.log();
}

// export function round(Simon, Player){
//   Simon.turn();
//   console.log(Simon.memory);
//   Player.play(Simon);
//   console.log(Player.inputs);
//   var winning = checkWin(Simon, Player);
//   console.log(winning);
//   if (winning == false){
//     console.log("You Lose!");
//   } else {
//     console.log(`Next round!`);
//     round(Simon, Player);
//   }
// }


export function checkWin(Simon, Player) {
  for (var i=0; i<Player.inputs.length; i++){
    if (Simon.memory[i] === Player.inputs[i]){
      return true;
    } else {
      return false;
    }
  }
  // if (Simon.memory[0] == Player.inputs[0]) {
  //   console.log("winning");
  // } else {
  //   console.log("not winning");
  // }
}
