let emitter;
let repeller;
let att;

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, 150);
  att = new Attractor(width/2, height-150);
}

function draw() {
  background(255);


  repeller.move(1);
  att.move(1);


  for(let i=0; i<10; i++){
   emitter.addParticle();
  }
      

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();
 

  // repeller.show();
  // att.show();
}
