
let params = {
  rValue : 1000,
  rValueMin : 200,
  rValueMax : 2000,
  rValueStep : 10,
  
  atValue: 1000,
  atValueMin : 200,
  atValueMax : 2500,
  atValueStep : 10,

  rSpeed : 1,
  rSpeedMin : 0.1,
  rSpeedMax : 1.5,
  rSpeedStep : 0.1,

  atSpeed : 1,
  atSpeedMin : 0.1,
  atSpeedMax : 1.5,
  atSpeedStep : 0.1
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
  gui.setPosition(420, 10);
}
function draw() {
  const a = params.atValue;
  const r = params.rValue;

  repeller.rspeed(params.rSpeed);
  repeller.rpower(r);
  att.atspeed(params.atSpeed);
  att.apower(a);
  background(255);


  repeller.move(1);
  att.move(1);

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