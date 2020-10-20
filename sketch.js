let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(600, 600);
  background(backgroundColor);

  strokeWeight(5);
  noFill();
}

function draw() {
  if(mouseIsPressed == true){
    backgroundColor -=2;
    background(backgroundColor);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
    //line(mouseX, mouseY, pmouseX, pmouseY);

    beginShape();
      for(let i = 0; i < array.length - 1; i++){
        //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
        curveVertex(array[i][0], array[i][1])
      }
        endShape();
  }
}

function keyType(){
  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    background(255);

    beginShape();
      for(let i = 0; i < array.length - 1; i++){
        //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
        curveVertex(array[i][0], array[i][1])
      }
        endShape();

  }
  return false;
  //saving image of canvas
}
