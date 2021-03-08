function assignedGrade(score){
    if(score>=90){
        return "A";
    }else if(score>=80){
        return "B";
    }else if(score>=70){
        return "C";
    }else if(score>=65){
        return "D";
    }else{
        return "F";
    }
};

var name = 0;
name
//console.log(assignedGrade(prompt("What is your score")));
var studentName = prompt("Enter students Name: ");
var points = prompt("Enter the score: ");

document.write(`<p> Student: ${studentName} </p> <p> Grade:${assignedGrade(points)}</p>`);