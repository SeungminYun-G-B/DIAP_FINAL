
let emitter;
let emitter2;
let repeller;
let att;

function setup() {
  createCanvas(800, 1000);
  emitter = new Emitter(width / 2, 0);
  emitter2 = new Emitter(width/2,height);
  repeller = new Repeller(width / 2, 150);
  att = new Attractor(width/2, height-150);
}

function draw() {
  background(255);

  randomSeed(1);
  repeller.move(1);
  att.move(1);


  for(let i=0; i<10; i++){
   emitter.addParticle();
  }
  for(let i=0; i<10; i++){
    emitter2.addParticle();
   }
      

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  let gravity2 = createVector(0,-0.1);
   emitter2.applyForce(gravity2);

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();
  emitter2.applyRepeller(repeller);
  emitter2.applyAttractor(att);
  emitter2.run();
 

  repeller.show();
  att.show();
}
