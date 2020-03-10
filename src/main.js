import Circle from "./Circle"; 

const animation = {
    canvasElt: null, 
    ctx: null, 
    circles: [],
    nbCircle : 20, 
    colors : ['#A5CBCE', '#DA6A74', '#3C3A5D' ],

    init(){
        
        this.canvasElt = document.createElement("canvas")
        document.body.insertAdjacentElement("afterbegin", this.canvasElt);
        this.resize(); 
        window.addEventListener('resize', e => {
            this.resize();
        }, false)
        this.ctx = this.canvasElt.getContext("2d")
        for(let i = 0; i < this.nbCircle; i++){
            this.circles.push(new Circle(this.canvasElt, this.colors, this.ctx));
        }
        this.draw()
        this.animate()
        document.addEventListener("click", e=>{this.circles.push(new Circle(this.canvasElt, this.colors, this.ctx)) }, false)
    },
    draw(){
        for(let i = 0; i < this.circles.length; i++){
            const currentCircle = this.circles[i]; 
            currentCircle.draw()
            for(let j = 0; j < this.circles.length; j++) {
                if (i === j) continue; // Sa veux dire que quand on arrive dans la boucle à la boule de la boucle précédente, on ignore et on continue.
                const otherCircle = this.circles[j]; 
                const a = currentCircle.poseX - otherCircle.poseX;
                const b = currentCircle.poseY - otherCircle.poseY;
                const h = Math.sqrt((a*a) + (b*b)); // Comme a2 + b2 = h2 on doit faire une racine carré Math.sqrt 
                const angle = Math.atan2(b, a);         
                const vx = Math.cos(angle); //! In need of explanation! :( 
                const vy = Math.sin(angle);
                if(h <= currentCircle.raduis + otherCircle.raduis){
                    console.log('toto');
                    otherCircle.velocityX = -vx; 
                    otherCircle.velocityY = -vy; 
                    currentCircle.velocityX = vx; 
                    currentCircle.velocityY = vy; 
                }
            }
        

        }   
    },
    animate(){
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); // les arrow function permettes que le this reste le bon. 
        });

    },
    resize(){
        
        this.canvasElt.height = window.innerHeight;
        this.canvasElt.width = window.innerWidth;
        
    }
}


animation.init()


