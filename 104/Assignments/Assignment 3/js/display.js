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
    for (var i=0;i<salon.pets.length;i++){
        var aPet = salon.pets[i];
        var tmp=`
            <tr id="pet-table-info">
                <td class="pet-table-cell">${aPet.name}</td>
                <td class="pet-table-cell">${aPet.age}</td>
                <td class="pet-table-cell">${aPet.gender}</td>
                <td class="pet-table-cell">${aPet.breed}</td>
                <td class="pet-table-cell">${aPet.service}</td>
                <td class="pet-table-cell">${aPet.owner}</td>
                <td class="pet-table-cell">${aPet.phone}</td>
                <td class="pet-table-cell">${aPet.pay}</td>
            </tr>    
            `;
            document.getElementById('pet-table').innerHTML+=tmp;
    }
}
