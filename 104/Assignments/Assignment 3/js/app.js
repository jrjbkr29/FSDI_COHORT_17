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
            phoneNum: "555-555-5555",
            paymentMethod: "Online Payment"
        },
        {
            name: "Scrappy",
            age: 20,
            gender: "Male",
            breed: "Dane",
            service: "Nails cut",
            owner: "Shaggy",
            phoneNum: "555-555-5555",
            paymentMethod: "Cash/Card"
        },
        {
            name: "Rocco",
            age: 25,
            gender: "Male",
            breed: "Doberman",
            service: "Full Service",
            owner: "Shaggy",
            phoneNum: "555-555-5555",
            paymentMethod: "Online Payment"
        },
        {
            name: "Nala",
            age: 35,
            gender: "Female",
            breed: "Lion",
            service: "Full Service",
            owner: "Shaggy",
            phoneNum: "5555555555",
            paymentMethod: "Cash/Card"
        }
    ]
}
for(var i=0;i<salon.pets.length;i++){
    console.log(salon.pets[i]);
}
//update total
function totalPets(){
document.getElementById('registeredPets').innerHTML = `
Registered Pets Total: ${salon.pets.length} 
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
//initialized on load
totalPets();
displayInfo();

//object constructor
class Pet{
    constructor(name, age, gender, breed, service, owner, phoneNum, paymentMethod){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.owner = owner;
        this.phoneNum = phoneNum;
        this.paymentMethod = paymentMethod;
    }
}

//get the value from inputs and store them in vars
var txtName = document.getElementById("petName");
var txtAge = document.getElementById("petAge");
var txtGender = document.getElementById("petGender");
var txtBreed = document.getElementById("petBreed");
var txtService = document.getElementById("petService");
var txtOwner = document.getElementById("petOwner");
var txtPhone = document.getElementById("petNum");
var txtPay = document.getElementById("petPay");
var tableView = "off";
var toggleCounter = 0;
display();
toggleView();

//toggle views grid/table
function toggleView(){
    if(toggleCounter % 2 !== 0){
    document.getElementById('pet-table').style.display = 'grid';
    document.getElementById('pets').style.display = 'none';
    tableView = "on";
    toggleCounter++;
    console.log(`Table View set to: ${tableView}`);
    console.log(`ToggleCount: ${toggleCounter}`);
    displayTable();
    return;
    }else{
        document.getElementById('pets').style.display = 'grid';
        document.getElementById('pet-table').style.display = 'none';
        tableView = "off";
        toggleCounter++;
        console.log(`Table View set to: ${tableView}`);
        console.log(`ToggleCount: ${toggleCounter}`);
        display();
    }
}

//initialized by form register button
function register(){
    //create a generic thePet
    var thePet= new Pet(txtName.value, txtAge.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtPhone.value, txtPay.value);
    console.log(thePet);
    //push thePet into the array
    salon.pets.push(thePet);
    console.log(salon.pets);
    //update total of registered pets
    totalPets();
    display();
    //clear the form by calling the function clear()
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
    txtPay.value="";
}