/* KEYCODE: f 102 b 98 r 114 l 108 ENTER 13*/

/*
Pulsar teclas f, b, r, l y después al enter para ejecutar
*/

var myRover = {
  position: [0,0], 
  direction: 'N'
};
var commands = "";

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if(rover.position[1] === 9)
        rover.position[1] = 0;
      else
        rover.position[1]++;
      break;
    case 'E':
      if(rover.position[0] === 9)
        rover.position[0] = 0;
      else
        rover.position[0]++;
      break;
    case 'S':
      if(rover.position[1] === 0)
        rover.position[1] = 9;
      else
        rover.position[1]--;
      break;
    case 'W':
      if(rover.position[0] === 0)
        rover.position[0] = 9;
      else
        rover.position[0]--;
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBack(rover)
{
    switch(rover.direction) {
    case 'N':
      if(rover.position[1] === 0)
        rover.position[1] = 9;
      else
        rover.position[1]--;
      break;
    case 'E':
      if(rover.position[0] === 0)
        rover.position[0] = 9;
      else
        rover.position[0]--;
      break;
    case 'S':
      if(rover.position[1] === 9)
        rover.position[1] = 0;
      else
        rover.position[1]++;
      break;
    case 'W':
      if(rover.position[0] === 9)
        rover.position[0] = 0;
      else
        rover.position[0]++;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover)
{
    switch(rover.direction) {
    case 'N':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "N";
      break;
  }
  console.log("New Rover Direction: [" + rover.direction + "]");
}

function turnLeft(rover)
{
    switch(rover.direction) {
    case 'N':
      rover.direction = "W";
      break;
    case 'E':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "S";
      break;
  }
  console.log("New Rover Direction: [" + rover.direction + "]");
}

//va guardando los comandos
function saveCommands(e)
{
  var keyCode = e.keyCode;
  keyCode = String.fromCharCode(keyCode);
  if(keyCode === "f" || keyCode === "b" || keyCode === "r" || keyCode === "l")
    commands += keyCode;
}
function exeCommands(e)
{
  var keyCode = e.keyCode;
  if(keyCode === 13)
  {
    console.log("Enter")
    readCommands();
  }


}
function readCommands()
{
  for(var i = 0; i<commands.length; i++)
  {
    switch(commands.charAt(i))
    {
      case "f":
        goForward(myRover);
        break;
      case "b":
        goBack(myRover);
        break;
      case "r":
        turnRight(myRover);
        break;
      case "l":
        turnLeft(myRover);
        break;
    }
  }
  commands = "";
}
//ejecuta los comandos recibidos al pulsar enter

document.addEventListener("keypress", saveCommands);
document.addEventListener("keypress", exeCommands);
console.log("Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");