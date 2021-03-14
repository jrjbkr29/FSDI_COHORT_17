//object literal
const taskL = {
    description: "Do Hw",
    priority: "High"
}

//object constructor
class Task{
    constructor(a,b){
        this.description = a;
        this.taskLpriority = b;
    }
}

const task1 = new Task("Play Zelda", "High");

console.log(task1.description);
console.log(task1.priority);

class Bird{
    constructor(mass, sound, color){
        this.mass=mass;
        this.sound = sound;
        this.color = color;
        this.display=function(){
            return `<img src="${this.mass}" alt="bird image">`;
        }
    }
}



var red = new Bird("img/red.png", "yeeeelll", "red");
var black = new Bird("img/black.png", "yeeeelll", "black");
console.log(red.display());

document.getElementById('bird1').innerHTML = red.display();
document.getElementById('bird2').innerHTML = black.display();

