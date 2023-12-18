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
  likeabilityMin : 200,
  likeabilityMax : 2500,
  likeabilityStep : 10,

  type : ['Fleeting','Coexistence','Friction']
}

function preload() {
  img1 = loadImage('data/hand-01.png');
  img2 = loadImage('data/hand-02.png');
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
  gui.setPosition(1700, 160);
}

function draw() {
  background(255);
  repeller.move();
  repeller2.move();
  att.move();
  att2.move();

  if(params.type == 'Fleeting'){
    repeller.rtype(tan(frameCount * 0.03));
    repeller2.rtype(tan(frameCount * 0.03));
    att.atype(tan(frameCount * 0.03));
    att2.atype(tan(frameCount * 0.03));
  }else if(params.type == 'Coexistence'){
    repeller.rtype(sin(frameCount * 0.03));
    repeller2.rtype(sin(frameCount * 0.03));
    att.atype(sin(frameCount * 0.03));
    att2.atype(sin(frameCount * 0.03));
  }else if(params.type == 'Friction'){
    repeller.rtype(cos(frameCount * 0.03));
    repeller2.rtype(cos(frameCount * 0.03));
    att.atype(cos(frameCount * 0.03));
    att2.atype(cos(frameCount * 0.03));
  }

  repeller.rpower(params.unfavorability);
  repeller2.rpower(params.unfavorability);
  att.apower(params.likeability);
  att2.apower(params.likeability);


  for(let i=0; i<15; i++){
   emitter.addParticle();
  }
      

  emitter.applyRepeller(repeller);
  emitter.applyRepeller(repeller2);
  emitter.applyAttractor(att);
  emitter.applyAttractor(att2);
  emitter.run();
  
  c = map(params.unfavorability,200,2500,0,255);
  r = map(params.likeability,200,2500,0,255);
 

  repeller.show(20,20,c);
  repeller2.show(20,20,c);
  att.show(r,10,20);
  att2.show(r,10,20);
}
