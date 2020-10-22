
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowWidth);
  background(3, 132, 252);



}

function draw() {
    background(3, 132, 252, 20);
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

//  return false;
//}
