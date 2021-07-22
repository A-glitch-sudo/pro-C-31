class Particles{
    constructor(x,y,r){
    var options = {
        restitution: 1,
        friction: 1,
        isStatic:false
    }  
    this.r = r;
    this.body = Bodies.circle(x,y,this.r,options); 
    this.color = color(random(30,225), random(200,255), random(100,255));
    World.add(world,this.body)
    }

    display(){
    var pos =  this.body.position;
    var angle = this.body.angle;
    
    push(); // push ... save previous setting and apply new setting. 
    translate(pos.x,pos.y);
    rotate(angle)

    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);

    pop(); /// and pop function reaply previous setting

    }
}