const salon = {
    name: 'The Pet Salon',
    address: {
        city: 'Los Angeles',
        street: 'Av. Univseridad',
        number: '12345'
    },
    hours: {
        open: '9:00am',
        close: '5:00pm'
    },
    pets:[
        {
            name: "Scooby",
            age: 50,
            gender: "Male",
            breed: "Dane",
            service: "Shower",
            owner: "Shaggy",
            phone: "555-555-5555"
        },
        {
            name: "Scrappy",
            age: 20,
            gender: "Male",
            breed: "Dane",
            service: "Nails cut",
            owner: "Shaggy",
            phone: "555-555-5555"
        },
        {
            name: "Rocco",
            age: 25,
            gender: "Male",
            breed: "Doberman",
            service: "Full Service",
            owner: "Shaggy",
            phone: "555-555-5555"
        },
        {
            name: "Nala",
            age: 35,
            gender: "Female",
            breed: "Lion",
            service: "Full Service",
            owner: "Shaggy",
            phone: "555-555-5555"
        }
    ]
}

document.getElementById('registeredPets').innerHTML = `
Registered Pets Total: ${salon.pets.length} 
`;

for(var i=0;i<salon.pets.length;i++){
    console.log(salon.pets[i]);
    document.getElementById('registeredPetNames').innerHTML += ` 
    ${salon.pets[i].name} <br>
    `; 
}

//Object desctructering
var {name,address:{city,street,number}, hours: {open,close}} = salon;
function displayInfo(){
    document.getElementById('footer-info').innerHTML = `
    <p> ${name}</p>
    <p> ${street} ${number}, ${city}</p>
    <p> We're open ${open} to ${close} 7 days a week</p>
    `;
}

displayInfo();

//object constructor
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
//create register function

//get the value from inputs and store them in vars
var txtName = document.getElementById("petName");
var txtAge = document.getElementById("petAge");
var txtGender = document.getElementById("petGender");
var txtBreed = document.getElementById("petBreed");
var txtService = document.getElementById("petService");
var txtOwner = document.getElementById("petOwner");
var txtPhone = document.getElementById("petNum");

function register(){
    //create a generic thePet
    var thePet= new Pet(txtName.value, txtAge.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtPhone.value);
    console.log(thePet);
    
    //pass as parameters the  values

    //push thePet into the array
    salon.pets.push(thePet);
    displayTable(thePet);
    console.log(salon.pets);
    clear();

}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";

}