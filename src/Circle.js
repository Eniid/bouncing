
export default class Circle {
    constructor(canvas, colors, ctx) {
        this.ctx = ctx
        this.raduis = 10 + Math.round(Math.random()*30);
        this.possiblepixelsW = canvas.width - this.raduis
        this.possiblepixelsH = canvas.height - 2* this.raduis
        this.poseX = this.raduis + Math.floor(Math.random()*this.possiblepixelsW)
        this.poseY = - this.raduis
        this.color = colors[Math.floor(Math.random()*colors.length)]; 
        this.velocityX = 0;
        this.velocityY = 5 + Math.random()*2;
        this.canvas = canvas;
        this.gravity = 0.2;
        this.friction = 0.7;
    }

    updateCoordinates(){
        /* if(this.poseX >= this.canvas.width - this.raduis || this.poseX <= this.raduis){
            this.velocityX = this.velocityX * -1
        }
        if(this.poseY >= this.canvas.height - this.raduis || this.poseY <= this.raduis){
           this.velocityY = this.velocityY * -1
        } */
        // si je suis en vas de l'écrean j'inverse
        // Quel facteur je dois lui ajouter (gravitée ou friction + importente que la gravitée )
        // Si la citeste est faible / proche du bord -- Vitesse à 0
        if(this.poseY >= this.canvas.height - this.raduis ){
            this.velocityY = this.velocityY* -1; 
            this.velocityY -= this.friction
        } 

        if(this.poseX >= this.possiblepixelsW || this.poseX < 0 + this.raduis){
            this.velocityX = this.velocityX* -1
        }

        if (this.velocityY < 0) {
            this.velocityY += this.friction
        } else if (this.velocityY > 0){
            this.velocityY += this.gravity
        }
        else if (this.velocityY = 0) {
            this.canvas.height - this.raduis
        }


        
        

        this.poseY += this.velocityY
        this.poseX += this.velocityX

        
    }

    draw(){ 
        
        this.updateCoordinates();
        
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.poseX, this.poseY, this.raduis, 0, Math.PI*2)
        this.ctx.fill();
    }
}
