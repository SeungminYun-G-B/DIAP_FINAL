
let emitter;
let repeller;
let att;

function setup() {
  createCanvas(800, 1000);
  emitter = new Emitter(width / 2, 0);
  repeller = new Repeller(width / 2, 150);
  att = new Attractor(width/2, height-150);
}

function draw() {
  background(255);

  for(let i=0; i<10; i++){
   emitter.addParticle();
  }

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);


  emitter.run();

 

}
