let pSlider;
let params = {
  rValue : 1000,
  rValueMin : 200,
  rValueMax : 2000,
  rValueStep : 10,
  
  atValue: 1000,
  atValueMin : 200,
  atValueMax : 2500,
  atValueStep : 10
}

let emitter;
let emitter2;
let repeller;
let att;

function setup() {
  createCanvas(400, 600);
  emitter = new Emitter(width / 2, 0);
  emitter2 = new Emitter(width/2,height);
  repeller = new Repeller(width / 2, 150);
  att = new Attractor(width/2, height-150);
  
  pSlider = createSlider(0,15,10);
  pSlider.position(500,520);
  
  gui = createGui('power slider');
  gui.addObject(params);
  gui.setPosition(420, 10);
}
function draw() {
  const a = params.atValue;
  const r = params.rValue;
  const p = pSlider.value();
  repeller.rpower(r);
  att.apower(a);
  background(255);


  repeller.move(1);
  att.move(1);

  for(let i=0; i<p; i++){
   emitter.addParticle();
  }
  for(let i=0; i<p; i++){
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