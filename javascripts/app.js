//  Se trata de un programa que realiza el movimiento de un robot en el terreno de Marte
//  El terreno esta representado por una mátriz que lleva 10 lineas cada una con 10 columnas

/*
  [0,0],[0,1],[0,2]...
  [1,0],...
  [2,0],...

*/

//=====EXECUTING MISSION======
//-----Creating an instance of Rover
let rover = new Rover('N',0,0,'frffrfflfrff');
rover.executeCommands();
rover.printRoute();
