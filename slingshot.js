class slingShot{
    constructor(bodyA, pointB){
        var options = {
            length : 8,
            stiffness:0.8,
            bodyA : bodyA,
            pointB :  pointB
        }
        //this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling)
    }

    attatch(bodyA){
        this.sling.bodyA = bodyA;
    }

    fly(){
        this.sling.bodyA = null;
    }
    display(){

        if(this.sling.bodyA){
        push()
        strokeWeight(4)
        line(this.sling.bodyA.x, this.sling.bodyA.y, this.pointB.x, this.pointB.y)
        pop()
    }
    }
}