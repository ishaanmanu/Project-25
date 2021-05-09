class paper
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
            density:1,			
            friction:1
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y, r , options);
        this.image=loadImage ("paper.png")
 		World.add(world, this.body);


	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}