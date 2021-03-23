function display(aPet){
    document.getElementById("pets").innerHTML = "";
    //for (var i=0;i<salon.pets.length;i++){
       // var aPet = salon.pets[i];
        var tmp =  `
        <div class="pet"> 
            <h3>${aPet.name}</h3>
            <p> Age: ${aPet.age}</p>
            <p> Gender ${aPet.gender}</p>
            <p> Breed ${aPet.breed}</p>
            <p> Service ${aPet.service}</p>
            <p> Owner ${aPet.owner}</p>
            <p> Phone ${aPet.number}</p>
        </div>
        `;
        document.getElementById("pets").innerHTML+=tmp;
    //}
}
//display();

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
    </tr>    
    `;
    document.getElementById('pet-table').innerHTML+=row;
}