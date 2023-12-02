let emitter;
let emitter2;
let repeller;
let repeller2;
let att;

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

  rRange : 250,
  rRangetMin : 30,
  rRangeMax : 500,
  rRangeStep : 10,
}

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, height/2-70);
  emitter2 = new Emitter(width/2, height/2+70);
  repeller = new Repeller(width / 2, height/2);
  repeller2 = new Repeller2(width/2, height/2)
  att = new Attractor(width/2, height/2);

  gui = createGui('power slider');
  gui.addObject(params);
  gui.setPosition(1000, 100);
}

function draw() {
  background(255);
  repeller.move();
  repeller2.move();
  att.move();


  repeller.rpower(params.rValue);
  repeller.rrotate(params.rRot);
  repeller.rrange(params.rRange);
  repeller2.rpower(params.rValue);
  repeller2.rrotate(params.rRange);
  repeller2.rrange(params.rRot);
  att.apower(params.atValue);


  for(let i=0; i<12; i++){
   emitter.addParticle();
  }
  

    for(let i=0; i<12; i++){
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
