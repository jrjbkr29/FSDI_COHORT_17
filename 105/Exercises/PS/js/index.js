
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

displayInfo();