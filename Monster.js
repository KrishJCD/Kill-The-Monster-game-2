class Monster
{
    constructor(x,y,w,h)
    {
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.image=loadImage("Monster-01.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        camera.position.x=this.body.position.x
        image(this.image,0,0,this.w,this.h);
        pop();
    }
};