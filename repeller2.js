class Repeller2 {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.speed = 250;
      this.val = 1;
      this.power = 1300;
    }
    
      rpower(f){
        this.power = f;
      }
    
      rrotate(s){
        this.s = s;
      }

      rrange(r){
        this.speed = r;
      }
    
    move() {
      this.t =frameCount;
      this.position.x = this.speed * sin(this.s * 0.06)+ width/2;
      this.position.y = this.speed * cos(this.s * 0.06)+ height/2;
    }
  
  
    show() {
      noStroke();
      fill(40,100,200);
      circle(this.position.x, this.position.y, 15);
    }
  
    repel(particle) {
      let force = p5.Vector.sub(this.position, particle.position);
      let distance = force.mag();
      distance = constrain(distance, 5, 50);
      let strength = (-1 * this.power) / (distance * distance);
      force.setMag(strength);
      return force;
    }
  }
  