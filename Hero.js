
class Hero {
    constructor(x,y,r)
      {
          var options = { 
                density: 1, 
                frictionAir: 0,
                isStatic:false
            };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("Superhero-01.png");
          this.body=Bodies.circle(this.x, this.y, this.r, options)
          World.add(world, this.body);
  
      }
      display()
      {
              var angle=this.body.angle;
              var heroPos=this.body.position;		
              push()
              translate(heroPos.x, heroPos.y+54);
              rectMode(CENTER)
              rotate(angle);
              fill(255,0,255)
              imageMode(CENTER);
              //camera.position.x=this.body.position.x
              image(this.image, 0,30,this.r+50, this.r-50)
              pop()
              
      }
  };