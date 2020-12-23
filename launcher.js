class Launcher{
    constructor(body,anchor){
    var options= {
        bodyA: body,
    pointB: anchor,
    length: 1,
    stiffness: 0.04
    }
    this.bodyA = body;
    this.pointB = anchor;
    this.launcher = Constraint.create(options);
    World.add(world,this.launcher);
    
    }

fly(){
this.launcher.bodyA = null;


}





    display(){
    if(this.launcher.bodyA){
    
       var pointA = this.bodyA.position;
       var pointB = this.pointB;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y); 
    }
    }
    
    }