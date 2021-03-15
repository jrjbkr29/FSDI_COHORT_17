function display(aPet){
    document.getElementById("pets").innerHTML = "";
    for (var i=0;i<salon.pets.length;i++){
       var aPet = salon.pets[i];
        var tmp =  `
        <div class="pet"> 
            <h3>${aPet.name}</h3>
            <p> Age: ${aPet.age}</p>
            <p> Gender: ${aPet.gender}</p>
            <p> Breed: ${aPet.breed}</p>
            <p> Service: ${aPet.service}</p>
            <p> Owner: ${aPet.owner}</p>
            <p> Phone: ${aPet.number}</p>
            <p> Payment Method: ${aPet.pay}</p>
        </div>
        `;
        document.getElementById("pets").innerHTML+=tmp;
    }
}


function displayTable(aPet){
    var row=`
    <tr>
        <td>${aPet.name}</td>
        <td>${aPet.age}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.owner}</td>
        <td>${aPet.phone}</td>
        <td>${aPet.pay}</td>
    </tr>    
    `;
    document.getElementById('pet-table').innerHTML+=row;
}
/*
toggleCounter = 0;
function toggleView(){
    if(toggleCounter % 2 !== 0){
    document.getElementById('pet-table').style.display = 'grid';
    tableView = true;
    toggleCounter++;
    console.log(`Table View set to: ${tableView}`);
    console.log(`ToggleCount: ${toggleCounter}`);
    displayTable(aPet);
    }else{
        document.getElementById('pet-table').style.display = 'none';
        tableView = false;
        toggleCounter++;
        console.log(`Table View set to: ${tableView}`);
        console.log(`ToggleCount: ${toggleCounter}`);
        display(aPet);
    }
}
*/








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
            phone: "555-555-5555",
            paymentMethod: "Online Checkout"
        },
        {
            name: "Scrappy",
            age: 20,
            gender: "Male",
            breed: "Dane",
            service: "Nails cut",
            owner: "Shaggy",
            phone: "555-555-5555",
            paymentMethod: "Cash"
        },
        {
            name: "Rocco",
            age: 25,
            gender: "Male",
            breed: "Doberman",
            service: "Full Service",
            owner: "Shaggy",
            phone: "555-555-5555",
            paymentMethod: "Online Checkout"
        },
        {
            name: "Nala",
            age: 35,
            gender: "Female",
            breed: "Lion",
            service: "Full Service",
            owner: "Shaggy",
            phone: "555-555-5555",
            paymentMethod: "Cash"
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
display();

//object constructor
class Pet{
    constructor(name, age, gender, breed, service, owner, phone, paymentMethod){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.owner = owner;
        this.phone = phone;
        this.paymentMethod = paymentMethod;
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
var txtPay = document.getElementById("petPay");
var tableView = false;
//initialized by form register button
function register(){
    //create a generic thePet
    var thePet= new Pet(txtName.value, txtAge.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtPhone.value, txtPay.value);
    console.log(thePet);
    //push thePet into the array
    salon.pets.push(thePet);
    if(tableView === true){
    displayTable();
    }else{
    display();
    };
    console.log(salon.pets);
    //update total of registered pets
    totalPets();
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