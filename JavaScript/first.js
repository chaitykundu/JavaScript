const student = {
    fullName: "Joy Kumar",
    age: 24,
    cgpa: 8.6,
    isPass: true,
};
console.log(student.age);
student["age"] = student["age"] ;
console.log(student["age"]+1);
console.log(student["cgpa"]);

const product ={
    proName: "CT Ball Pen",
    color: "black",
    price: 270,
    rating:7002,
    discount: "5%",

};
console.log(product);
// console.log(product["proName"]);
// console.log(product["color"]);
// console.log(product["price"]);
// console.log(product["rating"]);
// console.log(product["discount"]);

let a= 8;
let b= "8";
console.log("a == b" , a==b); //"==" checks statement and "===" check also datatype
console.log("9>b" , 9>b)
