let msg = "Welcome to the system in variable";
//alert(msg);
//let userName = prompt("Enter your name:");
//alert("You entered " + name);

//document.write(`<p>Welcome to the system <b>${userName}</b></p>`);
// functions for strings
let band = "Metallica", song = "Enter the sandman";
let spotify;
spotify = band + ":" + song;
console.log(spotify);
spotify = spotify.concat(" ", "is great!");

console.log(spotify);
console.log(spotify.toUpperCase);
console.log(spotify.length);

let email = prompt("Enter your email")
let flag = email.includes("@");
console.log(flag);

if(flag == true){
    console.log("The information is correct")
}
else{
    console.log("Enter a valid email.")
    alert("Please enter a valid email.")
};