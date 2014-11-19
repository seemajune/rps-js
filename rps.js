// Initialize

$(function() { // on document ready
  rpsGame = new Game();
  $('.computer-rock').hide();
  $('.computer-paper').hide();
  $('.computer-scissors').hide();
  $('.play-again').hide();
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
 this.$playAgain = $('.play-again');
}

Game.prototype.play = function() {
  var _this = this;
  this.$humanPlayRock.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayPaper.hide();
    _this.$humanPlayScissors.hide();
    _this.$humanPlayRock.unbind();
    setTimeout(function() {
      _this.computerTurn();}, 2000);
   
  });

  this.$humanPlayPaper.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayRock.hide();
    _this.$humanPlayScissors.hide();
    _this.$humanPlayPaper.unbind();
      setTimeout(function() {
      _this.computerTurn();}, 2000);
  });

  this.$humanPlayScissors.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayRock.hide();
    _this.$humanPlayPaper.hide();
    _this.$humanPlayScissors.unbind();
     setTimeout(function() {
      _this.computerTurn();}, 2000);
  });

};

Game.prototype.computerTurn = function() {
  var _this = this;
  choices = ["rock", "paper", "scissors"];
  this.computerPlay = choices[Math.floor(Math.random()*choices.length)];
    if(this.computerPlay === "rock"){
    _this.$computerPlayRock.show();
  } else if (this.computerPlay === "paper"){
    _this.$computerPlayPaper.show();
  } else if (this.computerPlay === "scissors"){
   _this.$computerPlayScissors.show();
  }
   setTimeout(this.$playAgain.show(), 2000);
   this.restartGame();
};

Game.prototype.restartGame = function() {

};
