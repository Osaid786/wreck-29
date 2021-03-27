class Box{
    constructor(x,y,angle){
        var options={
           isStatic:false,
           restitution : 0.1,
           density : 0.1,
           friction : 0.2
        }
        this.body = Bodies.rectangle(x,y,100,20,options)
        this.width=20
        this.height=50
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,20,50)
        pop();
    };
};