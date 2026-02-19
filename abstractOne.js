
var grid = []; 
initMat(grid);

var profit = []; 
initMat(profit);

var punish = [];
initMat(punish)

var available = [] ;
populate(available); //fill the array with all available positions

function playerOneChooses()
{
  var p_pos = getPosition(); //returns [x,y] of div chosen
  placeOnGrid( p_pos );
  changeStyle( p_pos );
  initMat( profit ); 
  initMat( punish );
  available.remove( p_pos );
}

function systemChooses()
{
  checkGrid( available );
  var sys_pos = fetchBest( available );
  placeOnGrid( sys_pos );
  changeStyle( sys_pos );
  available.remove( sys_pos );
}

function checkWin()
{
  let cR = checkRows();      if( cR!=0 )  return cR;
  let cC = checkColumns();   if( cC!=0 )  return cC;
  let cD = checkDiag();      if( cD!=0 )  return cD;
  let cCD =checkCrossDiag(); if( cCD!=0 ) return cCD;
}

function animateVictory()
{ 
  //          same value as "game"
  //                   |
  blinkElementsOf(winning_color);
}
