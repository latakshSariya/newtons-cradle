class slingshot{
    constructor(bodyA , pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:500
          }
           this.body = Constraint.create(options);
           this.pointB = pointB 
           
           World.add(world ,this.body);  

                  
   }
    fly(){
        this.body.bodyA = null; 

    }


     display(){

        strokeWeight(10);

        if (this.body.bodyA !=null){
            var point1 = this.body.bodyA.position
            var point2 = this.pointB
            line(point1.x ,point1.y , point2.x-20, point2.y+30); 
            line(point1.x , point1.y , point2.x+30 , point2.y+40);
        } 
    }
}