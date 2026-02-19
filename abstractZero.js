
var game = 0 ;

while( game!=1 && game!=-1 )
{
  playerOneChooses();
  game = checkWin(1);
  systemChooses();
  game = checkWin(-1); 
}

animateVictory(game);
