
let emitter;

let repeller;
let att;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, 0);
  repeller = new Repeller(width / 2, 0);
  att = new Attractor(width/2, height/2);
}

function draw() {
  background(255);
    
  repeller.move(0.005);
  att.move(0.005);
  
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();

  repeller.show();
  att.show();
}
