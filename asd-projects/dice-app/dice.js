$(document).ready(function () {
  // Your code goes here
$("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "#cfb53b")
  .css("position", "absolute")
  .css("top", 42.5)
  .css("left", 42.5)
  .appendTo("#die");
  function makeDot(top, left, elementID){

  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "#cfb53b")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(elementID)
  }
  function rollDie(){
    $("#die").empty();
    var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);
if (randomNum === 1) {
  makeDot(42.5, 42.5, "#die"); // middle middle
} else if (randomNum === 2) {
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(67.5, 67.5, "#die"); // bottom right
} else if (randomNum === 3) {
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(67.5, 67.5, "#die"); // bottom right
  makeDot(42.5, 42.5, "#die"); // middle middle
} else if (randomNum === 4) {
  makeDot(67.5, 67.5, "#die"); // bottom right
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(17.5, 67.5, "#die"); // bottom left
  makeDot(67.5, 17.5, "#die"); // top right
} else if (randomNum === 5) {
  makeDot(67.5, 67.5, "#die"); // bottom right
  makeDot(17.5, 67.5, "#die"); // bottom left
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(67.5, 17.5, "#die"); // top right
  makeDot(42.5, 42.5, "#die"); // middle 
 
} else if (randomNum === 6) {
  makeDot(42.5, 67.5, "#die"); // middle right
  makeDot(42.5, 17.5, "#die"); // middle left
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(67.5, 17.5, "#die"); // bottom left
  makeDot(17.5, 67.5, "#die"); // top right
  makeDot(67.5, 67.5, "#die"); // bottom right
}
 }
$("#die").on("click", rollDie);

});
