class Launcher{
        constructor(body,anchor){

            var l_options = {
                bodyA:body,
                pointB:anchor,
                stiffness:0.006,
                length:0.5
            }

            this.bodyA = body;
            this.pointB = anchor;
            this.launcher = Constraint.create(l_options);
            World.add(world,this.launcher);

        }

        attach(body) {
            this.launcher.bodyA = body;
        }

        fly(){
            this.launcher.bodyA = null;
        }

        display(){
            if(this.launcher.bodyA){
                var pointA = this.bodyA.position;
                var pointB = this.pointB;

                strokeWeight(2);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }
}