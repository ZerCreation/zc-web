// let squareColor;
// let wireTree;

function preload() {
	wireTree = loadModel('models/WireTree.obj');
}

function setup() {
  let canvas = createCanvas(650, 1000, WEBGL);
  canvas.position(0, 50);
  normalMaterial();
  squareColor = color(255, 255, 255);
  /*
  stroke(0, 0, 200);
  strokeWeight(1);
  
  squareColor = color(0, 0, 255);
  squareColor.setAlpha(140);
  */
}

function draw() {
  background(0);

  rotateX(-120);
  rotateY(180);
  
  push();
  //rotateZ(-frameCount * 0.0005);
  rotateY(frameCount * 0.00002);
  fill(squareColor);
/*    
  fill(squareColor);
  
  box(400);
  pop();
 */
 
  model(wireTree);
}