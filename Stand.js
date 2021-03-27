class Stand{
    constructor(x,y){
        var options = {
            isStatic : true,
            density : 0.2,
            friction : 10
        }
        this.body = Bodies.rectangle(x,y,40,20,options)
        this.width = 250
        this.height = 20 
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(2)
        stroke("white")
        fill("yellow")
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    };
};