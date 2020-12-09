class Mango{
    constructor(x, y, r){
        var mango_options = {
            isStatic: true, 
            restitution: 0.6, 
            friction: 1.0,
            density: 0.5
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("mango.png");

        this.body = Bodies.circle(this.x, this.y, this.r, mango_options);
        World.add(world, this.body);
    }

    display(){
        var mangoPos = this.body.position;
        push();
        translate(mangoPos.x, mangoPos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }

}
