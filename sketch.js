let emitter;
let emitter2;
let repeller;
let repeller2;
let att;

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, height/2-70);
  emitter2 = new Emitter(width/2, height/2+70);
  repeller = new Repeller(width / 2, height/2);
  repeller2 = new Repeller2(width/2, height/2)
  att = new Attractor(width/2, height/2);
}

function draw() {
  background(255);
  repeller.move();
  repeller2.move();
  att.move();


  for(let i=0; i<10; i++){
   emitter.addParticle();
  }
  

    for(let i=0; i<10; i++){
   emitter2.addParticle();
  }
      

  emitter.applyRepeller(repeller);
  emitter.applyRepeller(repeller2);
  emitter.applyAttractor(att);
  emitter.run();
  emitter2.applyRepeller(repeller);
  emitter2.applyRepeller(repeller2);
  emitter2.applyAttractor(att);
  emitter2.run();
 

  repeller.show();
  repeller2.show();
  att.show();
}
