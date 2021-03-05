var userDB = "123@sdgku.edu";
var passDB = "232323";

var userPrompt = prompt("Enter your user name:");
var passPrompt = prompt("Enter your password: ");

console.log(userPrompt);
console.log(passPrompt);

if(userPrompt == userDB && passPrompt == passDB){
    document.write(`<p>Welcome to the system ${userPrompt} </p>`);
}
else{
    document.write(`<p class="alert">Invalid username!</p>`)
};

