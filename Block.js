class Block
{
    constructor(x,y,w,h)
    {
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        var options={
            isStatic:false,
            restitution:0.03,
            friction:0.01
        }
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display()
    {
        push();
        translate();
        stroke(0);
        strokeWeight(2);
        fill("red");
        camera.position.x=this.body.position.x
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
};