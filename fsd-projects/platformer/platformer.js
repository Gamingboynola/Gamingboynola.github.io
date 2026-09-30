const { createContext } = require("react");

$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms 

//function createPlatform(Xpos, Ypos, Width, Height, "Color")
//function createPlatform(Xpos, Ypos, Width, Height, "Color", minX, maxX, speedX, minY, maxY, speedY)
     createPlatform(300, 640, 75, 25, "black")

     createPlatform(450, 550, 75, 25, "black")

     createPlatform(600, 450, 75, 25, "black")

     createPlatform(700, 400, 35, 25, "navy")

     createPlatform(600, 300, 35, 25, "navy")

     createPlatform(700, 200, 35, 25, "navy")

    // TODO 3 - Create Collectables
    //createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber, minX, maxX, speed)
//createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber)
//createCollectable("Name", xPos, yPos)

     
    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
