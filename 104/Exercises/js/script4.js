downloadUsers(20);


function downloadUsers(amount){
    const api = `https://randomuser.me/api/?nat=US&results=${amount}`;
    fetch(api)
        .then(response=>response.json())
        .then(data=>printHTML(data.results));
        console.log(amount);
        
}

function printHTML(data){
    data.forEach(user=>{
        console.log(user);
        const li = document.createElement('li');
        const {name:{first},name:{last},picture:{medium},login:{username},login:{password},id:{value}, nat} = user;
       
        li.innerHTML = `
            Name: ${first} ${last} <br><br>
            Country: ${nat} <br><br>
            Picture: <img src="${medium}"> <br><br>
            username: ${username} <br><br>
            password: ${password} <br><br>
            ssn #: ${value} <br><br>
        `;
        document.querySelector('#users').appendChild(li);
    });
}