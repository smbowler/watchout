// start slingin' some d3 here.

//data
var data = [20, 20, 20, 20, 20, 20, 20];
var colors = ['black', 'blue', 'orange', 'yellow', 'purple', 'green', 'pink'];

//set up board 
var board = d3.select('.container').append('svg').attr('width', 1000).attr('height',600);

var gameStats = {
  score: 0,
  highscore: 0,
  collision: 0
}
//CIRCLES
//turn data in a circle
var circles = board.selectAll('circle').data(data);

//ENEMY - move around randomly
//appending circle elements to the DOM with a class of enemy.
circles.enter().append('circle').attr('class', 'enemy');

//PLAYER - drag behavior
//var player = board.append('rect')

var drag = d3.behavior.drag()
  .on("drag", function(){
    var xPos = d3.event.x;
    var yPos = d3.event.y;
    if (xPos > 1000){
      xPos = 985;
    }
    if (xPos < 0){
      xPos = 15;
    }
    if (yPos > 600){
      yPos = 585;
    }
    if (yPos < 0){
      yPos = 15;
    }
    player.attr('cx', xPos)
          .attr('cy', yPos);
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
  .transition().duration(1500).ease('elastic')
  .attr('cx', function(){ return Math.floor(Math.random() * 1000 )})
  .attr('cy', function(){ return Math.floor(Math.random() * 600)})
  .attr('r', function(d){return d})
  .style("fill", function(d, i){ return colors[i % colors.length];});
};
enemy();
setInterval(enemy, 1000);

var hero = player[0];
console.log(hero[0]);
var checkCollision = function(){
d3.selectAll('circle.enemy').each(function(){
   var enemyX = parseInt(this.cx.animVal.value);
   var enemyY = parseInt(this.cy.animVal.value);
   var heroX = parseInt(hero[0].cx.animVal.value); 
   var heroY = parseInt(hero[0].cy.animVal.value);

   if(Math.hypot(enemyX - heroX, enemyY - heroY) <= 35){
      gameStats.collision++;
      d3.select('.collisions').text("Collisions: " + gameStats.collision);
      gameStats.score = 0;
      }
    })
};

setInterval(checkCollision, 50);

var keepScore = function(){
  gameStats.score++;
  d3.select('.current').text("Current score: " + gameStats.score);
  if (gameStats.score >= gameStats.highscore){
     gameStats.highscore = gameStats.score;
     d3.select('.high').text('High score: ' + gameStats.highscore);
  }
}

setInterval(keepScore, 500);



//Player should respond when touched by enemy
//Scoreboard 
//Different colors for enemies









