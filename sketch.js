
let noiseOffset = 0.0;
let array = [];
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowWidth);
  //background(3, 132, 252);

  drawGrid();
  noFill();

}

function draw() {
    //background(3, 132, 252, 20);
    strokeWeight(strokeWidth);

    noiseOffset += 0.05;
    strokeWidth = noise(noiseOffset) * 100;


    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

function keyType(){

  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'c') { //clear
    clear();


    // beginShape();
    //   for(let i = 0; i < array.length - 1; i++){
    //     //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //     curveVertex(array[i][0], array[i][1])
    //   }
    //     endShape();
  }
}

  function drawGrid(){
    numCells = 20;
    fillColor =  255;
    noStroke();

    for (let i = 0; i <= width; i += width / numCells){
      for (let j = 0; j <= height; j += height / numCells){
        if (fillColor === 255){
          fillColor = 200;
        } else {
          fillColor = 255;
        }
        fill(fillColor);
        rect(i, j, width / numCells, height / numCells);

      }
    //  rect(i, 50, width / numCells, height / numCells);
    }

    strokeWeight(5);
  }
//  return false;
//}
