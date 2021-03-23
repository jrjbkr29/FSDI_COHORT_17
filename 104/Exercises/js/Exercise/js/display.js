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