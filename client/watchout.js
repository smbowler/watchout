// start slingin' some d3 here.

//data
var data = [20, 20, 20, 20, 20, 20, 20];
var colors = ['red', 'blue', 'orange', 'yellow', 'purple', 'green', 'white'];

//set up board 
var board = d3.select('.container').append('svg').attr('width', 1000).attr('height',600);

//CIRCLES
//turn data in a circle
var circles = board.selectAll('circle').data(data);

//ENEMY - move around randomly
//appending circle elements to the DOM with a class of enemy.
circles.enter().append('circle').attr('class', 'enemy');

//PLAYER - drag behavior
//var player = board.append('rect')

var drag = d3.behavior.drag()
  //.origin(function(d){return d})
  .on("drag", function(player){
    d3.select(this)
    .attr('cx', function(player){
      return d3.event.x;
    })
    .attr('cy', function(player){
      return d3.event.y;
    })
  });
  

var player = board.append('circle')
  .attr("cx", 500)
  .attr("cy", 300)
  .attr("r", 15)
  .attr('class', 'player')
  .style("fill", "red")
  .call(drag)



// var drag = d3.behavior.drag()
//   .on('drag', function(player){
//     d3.select(this)
//     .attr('x', function(player){
//       return d3.event.x
//     })
//     .attr('y', function(player){
//       return d3.event.y
//     })
//   });



// var playerMove = function(player){
//   d3.select(this)  
//     .attr('x', player.x = d3.event.x)
//     .attr('y', player.y = d3.event.y);
// };
  

//ATTRIBUTES

//d3.select('.container').selectAll('circles').
var enemy = function(){
var enemyMove = circles
  .transition().duration(1500)
  .attr('cx', function(){ return Math.floor(Math.random() * 1000 )})
  .attr('cy', function(){ return Math.floor(Math.random() * 600)})
  .attr('r', function(d){return d})
  .style("fill", "black");
};
enemy();

setInterval(enemy, 1000);

//Drag Behavior for Player
//Player should respond when touched by enemy
//Scoreboard 
//Different colors for enemies









//define circle attributes
//turn this into a function that updates position
//use .transition, .duration and for attr, pass in Math.floor(Math.random() * 1000) 
//since our width is 1000, the above will give us a random number between 1 and 1000
//attr the random number generating function to cx and cy
//for them to change location again, use setTimeout???







//circles.enemy

//circle.player



//BASIC REQUIREMENTS
  //create player

  //make board

  //drag behavior

  //make enemy

  //make enemy move??


