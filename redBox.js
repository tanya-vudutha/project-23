class RedBox
{
    constructor(x,y,width,height)
    {
        var p=
        {
            isStatic:true
        }
        this.redBox=Bodies.rectangle(x,y,width,height,p);
        this.width=width;
        this.height=height;
        World.add(world, this.redBox);
    }

    display(){
        var pos = this.redBox.position;
        var angle= this.redBox.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}