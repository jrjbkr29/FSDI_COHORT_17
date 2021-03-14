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
class Pet{
    constructor(name, age, gender, breed, service, owner, phone){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.owner = owner;
        this.phone = phone;
    }
}

//create pets
var scooby = new Pet("Scooby", "40", "Male", "Dane", "Full service", "Shaggy", "222-222-2222");
var scrappy = new Pet("Scrappy", "30", "Male", "Dane", "", "Shaggy", "222-222-2222");
//create register function
function register(){

}