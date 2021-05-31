class TIGER{
    constructor(x,y,w,h){

        var ops = {
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,w,h,ops);
        this.width = w
        this.height = h
        this.image = loadImage("Monster-01.png");
        this.image1 = loadImage("smoke.png");
        this.path = []
        World.add(world,this.body);
    }

    display(){
     

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

        if(this.body.velocity.x > 10 && this.body.position.x > 200){  
            var position = [this.body.position.x,this.body.position.y];
            this.path.push(position);
             }
        
            for(var i=0; i<this.path.length; i++){
            image(this.image1,this.path[i][0],this.path[i][1]);
            }

        
    }
}