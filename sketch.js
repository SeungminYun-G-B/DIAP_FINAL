
let emitter;
let emitterDown;
let repeller;
let att;

function setup() {
  createCanvas(800, 1000);
  emitter = new Emitter(width / 2, 0);
  emitterDown = new EmitterDown(width/2,height);
 

}

function draw() {
  background(255);

  for(let i=0; i<10; i++){
   emitter.addParticle();
  }

  for(let i=0; i<10; i++){
    emitterDown.addParticle();
   }

   emitter.applyAttractor();
   emitterDown.applyAttractor();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  let gravityDown = createVector(0, -0.1);
  emitterDown.applyForce(gravityDown);


  emitter.run();
  emitterDown.run();

 

}
