class Ground{
    constructor(x,y){
        var options = {
            isStatic : true,
            friction : 0.4,
            density : 1.0
        }
        this.body = Bodies.rectangle(x,y,400,20,options)
        this.width = 800
        this.height = 40 
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(1)
        stroke("white")
        fill("green")
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    };
};