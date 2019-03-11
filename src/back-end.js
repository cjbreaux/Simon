export function Simon(round, memory) {
  this.round = round;
  this.memory = memory;
}

// Simon.prototype.pattern = function(){
//  for the length of this.memory{
//    set interval: 500?{
//      if this is 1; flash button 1
//      ect.
//    }
//   }
// }

// Simon.prototype.pattern = function(){
//   var numTest = 0;
//   function test() {
//     console.log('test' + numTest);
//     numTest++;
//   }
//
//  for (var i = 0; i < this.memory.length; i++) {
//   setTimeout(test, 1000);
//   }
// };

Simon.prototype.pattern = function(){
  var memory = this.memory
  for(var i = 0; i < this.memory.length; i++){
      (function(memory){
          setTimeout(function(){
              console.log(memory);
          }, 1000 * (i + 1));
      })(memory[i]);
  }
};

Simon.prototype.turn = function() {
  var number = Math.floor(Math.random() * 4) + 1;
  this.memory.push(number);
  this.round++;
  this.pattern();
  console.log(this.memory);
  console.log(`The round is ${this.round}`);
};

export function Player(name, inputs) {
  this.name = name;
  this.inputs = inputs;
}

export function checkWin(Simon, Player) {
    for (var i=0; i<Player.inputs.length; i++){
        if (Simon.memory[i] == Player.inputs[i]){
          Player.win = true;
        } else {
          Player.win = false;
        }
        console.log(Player.win);
      if (Player.win === false){
        console.log("You Lose!");
        return;
      }
    }
  if (Player.inputs.length == Simon.memory.length){
    if (Player.win === true){
      console.log("Next Round!");
      Player.inputs = [];
      Simon.turn();
    }
  }
}
