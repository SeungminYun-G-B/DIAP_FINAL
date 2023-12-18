class Attractor2 {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.speed = 100;
      this.val = 1;
      this.power = 1500;
      this.mode;
    }
    
    apower(p){
      this.power = p;
    }

    atype(t){
      this.mode = t
    }

    move() {
      this.t =frameCount;
      this.position.y = this.speed * cos(this.t * 0.03) + height/2;
      this.position.x = this.speed * this.mode + width/2;
      this.speed += this.val
      if(this.speed>250 || this.speed <40){
        this.val*= -1;
      }
    }
    
    
  
    show(r,g,b) {
      // noStroke();
      // fill(200, 130, 50);
      // circle(this.position.x, this.position.y, 15);
      tint(r,g,b);
    imageMode(CENTER);
    image(img2,this.position.x,this.position.y,55,55);
    }
  
    pull(particle) {
      let force = p5.Vector.sub(this.position, particle.position);
      let distance = force.mag();
      distance = constrain(distance, 5, 50);
      let strength = this.power / (distance * distance);
      force.setMag(strength);
      return force;
    }
  }
  