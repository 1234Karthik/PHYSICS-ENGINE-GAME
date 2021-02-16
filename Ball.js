class Ball {

    constructor(x, y, radius){
        this.trajectory = [];
        var options = {

            isStatic: false,
            restitution: 0.001,
            density: 3

        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);

    }
    display(color, border){

        var pos = this.body.position;
        var angle = this.angle;
        push();
        // if(this.body.velocity.x > 10 && this.body.position.x > 200){
        //     var position = [this.body.position.x, this.body.position.y];
        //     this.trajectory.push(position);
        //   }
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        //rotate(angle);
        fill("red");
        stroke(4);
        strokeWeight(4);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }

}