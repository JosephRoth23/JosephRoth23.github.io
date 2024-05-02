var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
obstacleImage.x = -25;
obstacleImage.y = -25;
sawBladeHitZone.addChild(obstacleImage);
    }
    createSawBlade(400, 535)
    createSawBlade(600, 385)
    createSawBlade(750, 430)
function createEnemy(x, y){
var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = groundY - y;
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.rotationalVelocity = 100;
enemy.onPlayerCollision = function(){
  game.changeIntegrity(-10)
};
enemy.onProjectileCollision = function(){
  game.increaseScore(100);
enemy.shrink();
}
}
createEnemy(600, 50);
function createReward(x, y){
var reward = game.createGameItem("reward", 25);
var yellowSquare = draw.rect(50, 50, "yellow");
yellowSquare.x = -25;
yellowSquare.y = -25;
reward.addChild(yellowSquare);
reward.x = x;
reward.y = groundY - y;
reward.velocityX = -1;
game.addGameItem(reward);
reward.onPlayerCollision = function(){
  game.changeIntegrity(10)
}}
createReward(800, 50)

function createMarker(x, y){
  var marker = game.createGameItem("marker", 25);
  var greenSquare = draw.rect(50, 50, "green");
  greenSquare.x = -25;
  greenSquare.y = -25;
  marker.addChild(greenSquare);
  marker.x = x;
  marker.y = groundY - y
  marker.velocityX = -1
  game.addGameItem(marker)
  marker.onPlayerCollision = startLevel()
  marker.onProjectileCollision = startLevel()
}
createMarker(1000, 50)
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
