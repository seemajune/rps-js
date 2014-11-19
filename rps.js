// Initialize

$(function() { // on document ready
  rpsGame = new Game();
  $('.computer-rock').hide();
  $('.computer-paper').hide();
  $('.computer-scissors').hide();
  rpsGame.play();

});

var choices;

function Game(){
 this.$humanPlayRock = $('.rock');
 this.$humanPlayPaper = $('.paper');
 this.$humanPlayScissors = $('.scissors');
 this.$computerPlayRock = $('.computer-rock');
 this.$computerPlayPaper = $('.computer-paper');
 this.$computerPlayScissors = $('.computer-scissors');
}

Game.prototype.play = function() {
  var _this = this;
  this.$humanPlayRock.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayPaper.hide();
    _this.$humanPlayScissors.hide();
    _this.computerTurn();
  });

  this.$humanPlayPaper.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayRock.hide();
    _this.$humanPlayScissors.hide();
    _this.computerTurn();
  });

  this.$humanPlayScissors.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayRock.hide();
    _this.$humanPlayPaper.hide();
    _this.computerTurn();
  });
};

Game.prototype.computerTurn = function() {
  var _this = this;
  choices = ["rock", "paper", "scissors"];
  this.computerPlay = choices[Math.floor(Math.random()*choices.length)];
    return this.computerPlay;
    if(this.computerPlay === "rock"){
    _this.$computerPlayRock.show();
  } else if (this.computerPlay === "paper"){
    _this.$computerPlayPaper.show();
  } else if (this.computerPlay === "scissors"){
   _this.$computerPlayScissors.show();
  }
};

