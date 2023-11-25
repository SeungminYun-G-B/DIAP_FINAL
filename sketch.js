
let emitter;
let emitter2;
let emitter3;
let repeller;
let att;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, 0);
  emitter2 = new Emitter(100, 0);
  emitter3 = new Emitter(width-100,0);
  repeller = new Repeller(width / 2, 0);
  att = new Attractor(width/2, height/2);
}

function draw() {
  background(255);
  randomSeed(2);
  repeller.move(0.003);
  att.move(0.005);

  for(let i = 0; i<5; i++){
  emitter2.addParticle();
  }

  for(let i = 0; i<5; i++){
    emitter3.addParticle();
    }

  for(let i = 0; i<5; i++){
      emitter.addParticle();
      }

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter2.applyForce(gravity);
  emitter3.applyForce(gravity);

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();
  emitter2.applyRepeller(repeller);
  emitter2.applyAttractor(att);
  emitter2.run();
  emitter3.applyRepeller(repeller);
  emitter3.applyAttractor(att);
  emitter3.run();

  repeller.show();
  att.show();
}
