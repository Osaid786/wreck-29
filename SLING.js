class launcher{
	constructor(body,anchor)
	{
		
		var options={ 
			bodyA:body,			 
			pointB:anchor, 
			stiffness:0.4, 
			length:50
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(10);
            stroke(220)		
			line(pointA.x+150,pointA.y+100,pointB.x+150,pointB.y+100);
		}
	}
}