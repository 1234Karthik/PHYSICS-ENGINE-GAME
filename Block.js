class Block{

    constructor(x, y, width, height) {

        var options = {

            isStatic: false,
            //restitution: 0.75,
            //density: 1.2

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }
    display(){

        var pos = this.body.position;
        
        push();
      //  rectMode(CENTER);
        translate(pos.x, pos.y);
        //rotate(angle);
        fill("green");
        stroke(4);
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();

    }

}