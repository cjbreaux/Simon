export function Simon(round, memory) {
  this.round = round;
  this.memory = memory;
}


Simon.prototype.pattern = function(){
  var memory = this.memory;
  for(var i = 0; i < this.memory.length; i++){
    (function(memory){
      setTimeout(function(){
        $("#" + memory).css("opacity", ".5");
        $("#" + memory)
          .delay(800)
          .queue(function (next) {
            $(this).css('opacity', 'initial');
            next();
          });
      }, 900 * (i + 1));
    })(memory[i]);
  }
};

Simon.prototype.turn = function() {
  var number = Math.floor(Math.random() * 4) + 1;
  this.memory.push(number);
  this.round++;
  this.pattern();
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
    if (Player.win === false){
      $("#start").hide();
      $(".container").hide();
      $("#lose").show();
      $("#lastScore").text(`Your last score was ${Simon.round}`);
      Simon.memory = [];
      Simon.round = 0;
      return;
    }
  }
  if (Player.inputs.length == Simon.memory.length){
    if (Player.win === true){
      Player.inputs = [];
      Simon.turn();
    }
  }
}
