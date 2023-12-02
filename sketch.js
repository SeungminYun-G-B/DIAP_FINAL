let emitter;
let repeller;
let repeller2;
let att;
let att2;

let params = {
  rValue : 1000,
  rValueMin : 200,
  rValueMax : 2500,
  rValueStep : 10,
  
  atValue: 1000,
  atValueMin : 200,
  atValueMax : 2500,
  atValueStep : 10
}

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, height/2);
  repeller2 = new Repeller2(width / 2, height/2);
  att = new Attractor(width/2, height/2);
  att2 = new Attractor2(width/2, height/2);

  gui = createGui('power slider');
  gui.addObject(params);
  gui.setPosition(1000, 100);
}

function draw() {
  background(255);
  repeller.move();
  repeller2.move();
  att.move();
  att2.move();

  repeller.rpower(params.rValue);
  repeller2.rpower(params.rValue);
  att.apower(params.atValue);
  att2.apower(params.atValue);


  for(let i=0; i<15; i++){
   emitter.addParticle();
  }
      

  emitter.applyRepeller(repeller);
  emitter.applyRepeller(repeller2);
  emitter.applyAttractor(att);
  emitter.applyAttractor(att2);
  emitter.run();
 

  repeller.show();
  repeller2.show();
  att.show();
  att2.show();
}
