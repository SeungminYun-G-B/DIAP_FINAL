let emitter;
let repeller;
let repeller2;
let att;
let att2;

let params = {
  unfavorability : 1000,
  unfavorabilityMin : 200,
  unfavorabilityMax : 2500,
  unfavorabilityStep : 10,
  
  likeability: 1000,
  likeabilityeMin : 200,
  likeabilityMax : 2500,
  likeabilityStep : 10,

  type : ['fleeting','coexistence','friction']
}

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, height/2);
  repeller2 = new Repeller2(width / 2, height/2);
  att = new Attractor(width/2, height/2);
  att2 = new Attractor2(width/2, height/2);

  gui = createGui('Relationship');
  gui.addObject(params);
  gui.setPosition(1000, 100);
}

function draw() {
  background(255);
  repeller.move();
  repeller2.move();
  att.move();
  att2.move();

  if(params.type == 'fleeting'){
    repeller.rtype(tan(frameCount * 0.03));
    repeller2.rtype(tan(frameCount * 0.03));
    att.atype(tan(frameCount * 0.03));
    att2.atype(tan(frameCount * 0.03));
  }else if(params.type == 'coexistence'){
    repeller.rtype(sin(frameCount * 0.03));
    repeller2.rtype(sin(frameCount * 0.03));
    att.atype(sin(frameCount * 0.03));
    att2.atype(sin(frameCount * 0.03));
  }else if(params.type == 'friction'){
    repeller.rtype(cos(frameCount * 0.03));
    repeller2.rtype(cos(frameCount * 0.03));
    att.atype(cos(frameCount * 0.03));
    att2.atype(cos(frameCount * 0.03));
  }

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
