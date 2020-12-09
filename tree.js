class Tree{
    constructor(x,y) {
        this.x = x;
        this.y= y;
        this.treeWidth = 450;
        this.treeHeight = 600;
        this.wallThickness = 10;

        this.image = loadImage("tree.png");

        this.width = 450;
        this.height = 600;
		this.thickness = 10;
		
        this.leftBody = Bodies.rectangle(0,this.y-this.height/2, this.thickness, this.height,{isStatic:true});
        this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
		this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
		
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        World.add(world,this.bottomBody);
  } 

  display(){

      var posBottom = this.bottomBody.position;
      
      push();
      translate(posBottom.x, posBottom.y+10);
      imageMode(CENTER);
      image(this.image, 0, -this.height/2, this.width, this.height);
      pop();
  }
}