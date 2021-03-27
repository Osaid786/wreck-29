class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution : 0.3,
            density : 0.3,
            friction : 0.4
            
        }
        
        this.body=Bodies.circle(x,y,20,options)
        this.radius=50
       
        World.add(world,this.body)

    }

    display(){
        var pos=this.body.position
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("pink")
        imageMode(CENTER)
        circle(pos.x,pos.y,this.radius)
        pop();
    }
}