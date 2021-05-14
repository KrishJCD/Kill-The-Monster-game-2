class Ground
{
    constructor(x,y,w,h,show)
    {
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.show=show;
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display()
    {
        if(this.show)
        {
            strokeWeight(4);
            fill(255);
            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,this.w,this.h);
        }
    }
};