
let params = {
  rValue : 1000,
  rValueMin : 200,
  rValueMax : 2000,
  rValueStep : 10,
  
  atValue: 1000,
  atValueMin : 200,
  atValueMax : 2500,
  atValueStep : 10,

  rRot : 45,
  rRotMin : 0,
  rRotMax : 90,
  rRotStep : 0.1,

  atRot : 45,
  atRotMin : 0,
  atRotMax : 90,
  atRotStep : 0.1
}


let emitter;
let repeller;
let att;

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, 150);
  att = new Attractor(width/2, height-150);
  
  
  gui = createGui('power slider');
  gui.addObject(params);
  gui.setPosition(1000, 100);
}
function draw() {
  const a = params.atValue;
  const r = params.rValue;
  const b = params.rRot;
  const c = params.atRot;

  repeller.rpower(r);
  repeller.rrotate(b);
  att.apower(a);
  att.arotate(c);
  background(255);


  repeller.move();
  att.move();

  for(let i=0; i<10; i++){
   emitter.addParticle();
  }
      
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();

 
  repeller.show();
  att.show();
}