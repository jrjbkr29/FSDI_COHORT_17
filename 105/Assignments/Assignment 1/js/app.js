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
    pets:[]
}

var {name,address:{city,street,number}, hours: {open,close}} = salon;

function displayInfo(){
    document.getElementById('footer-info').innerHTML = `
    <p> ${name}</p>
    <p> ${street} ${number}, ${city}</p>
    <p> We're open ${open} to ${close} 7 days a week</p>
    `;
}
var c=0;
class Pet{
    constructor(name, age, gender, breed, service, owner, phoneNum, type){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.owner = owner;
        this.phoneNum = phoneNum;
        this.price = 0;
        this.type = type;
        this.id=c++;
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
var txtType = document.getElementById("type");

//initialized by form register button
function register(){
    if(txtName.value && txtAge.value && txtGender.value && txtBreed.value && txtService.value && txtOwner.value && txtPhone.value && txtType.value !== ""){    
        //create a generic thePet
        var thePet= new Pet(txtName.value, txtAge.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtPhone.value, txtType.value);
        console.log(thePet);
        //push thePet into the array
        salon.pets.push(thePet);
        displayTable(thePet);
        console.log(salon.pets);
        clear();
    }else{
        alert("Please fill out all fields");
    }
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
    txtType.value="";
}
function profitCalculation(){
    var sum = 0;
    for(var i=0;i<salon.pets.length;i++){
        sum += salon.pets[i].price;
        console.log(sum);
    } 
    document.getElementById('profits').innerHTML = `Profits: $${sum}`;
}

function deletePet(petId){
    //select the row with the pet
    var tr=$('#'+petId);
    var indexDelete;
    // search the pet
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    // delete the pet from the array
    salon.pets.splice(indexDelete,1);
    //delete the pet from the html
    tr.remove();
}

function searchPet(){
    var ss = $('#searchPet').val();
    var searchString=ss.toLowerCase();
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(searchString===selected.name.toLowerCase()||searchString===selected.service.toLowerCase() ){
            $('#'+selected.id).addClass('selected');
        }
    }
}

function init(){
    var scooby = new Pet("Scooby", 50, "Male", "Dane", "full", "Shaggy", "555-555-5555", "dog", "Cash");
    var scrapy = new Pet("scrapy", 30, "Male", "Bulldog", "nails", "Shaggy", "555-555-5555", "dog", "Cash");
    salon.pets.push(scooby);
    salon.pets.push(scrapy);
    //create pets
    displayTable(scooby);
    displayTable(scrapy);
    profitCalculation();
}

window.onload=init;


