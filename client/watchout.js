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


//Player should respond when touched by enemy
//Scoreboard 
//Different colors for enemies









