//object literal
const person = {
    userName: "John",
    age: 80
}
console.log(person.userName);

const client = {
    clientName: "Alex",
    type: "Premium",
    data:{
        address:{
            country: "Mex",
            city: "Tijuana"
        },
        account:{
            date:"10-12-20",
            points:400
        }
    },
    hobbies:{
        music:['coldplay', 'oasis','beatles','rolling stones']
    }
}
//challenge: Display Oasis on the console
console.log(client.hobbies.music[0]);

//canvas simulator
var as1 = "github/as1.com";
var as2 = "github/as2.com";
var as3 = "github/as3.com";
var as4 = "github/as4.com";
var df1 = "github/df1.com";
var df2 = "github/df2.com";
var df3 = "github/df3.com";
var ex = ["a", "b", "b", "c", "a"]

const student1 = {
    studentName:'Laura',
    email: 'lauraliber@gmail.com',
    passWord: '123456',
    assignments: [as1, as2, as3, as4, df1, df2, df3, ex],
    totalPoints: 950,
    grade: "A"
}

console.log(student1);

document.getElementById('generic-info').innerHTML = `
<p> Name: ${student1.studentName}</p>
<p> Email: ${student1.email}</p>
`;

var tmp = "";
for(var i=0; i<student1.assignments.length;i++){
tmp =`<p> Assignment ${i+1}: <a href="${student1.assignments[i]}">${student1.assignments[i]}</a> </p>}`; 
document.getElementById('assignments-info').innerHTML = tmp;
// `<p> Assignment 1: <a href="${student1.assignments[0]}">${student1.assignments[0]}</a> </p>`
;
}
