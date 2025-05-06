let str ="JS Looping";
let size =0;
const student1 = {
    fullName: "Joy Kumar",
    age: 24,
    cgpa: 8.6,
    isPass: true,
};
for(let i of str)
{
    //iterator characters
    console.log("i=",i);
    size++;
}
console.log("here is my size:", size);

for(let j in student1)
{
    console.log("key=", j, " value=", student1[j] );
}
console.log("Java\nScript");
console.log(str.length);
