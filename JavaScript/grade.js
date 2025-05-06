//check greade

let score= prompt("enter your score(0-100):");
let grade;

if(score>=90 && score<=100)
    grade = "A";
if(score>=70 && score<=89)
    grade = "B";
if(score>=60 && score<=69)
    grade = "C";
if(score>=50 && score<=59)
    grade = "D";
if(score>=0 && score<=49)
    grade = "F";
console.log("According to your scores, your grade is: ", grade);