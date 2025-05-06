
let fruits = ["apple","mango","orange","banana"]
console.log(fruits[0]);
console.log(fruits[2]);
// for(let i=0; i<fruits.length; i++)
// {
//     console.log(fruits[i+1]);
// }

//for of
for( let fruit of fruits){
    console.log(fruit.toUpperCase())
}

// array marks addition
let marks=[56,87,70,89,95];
let sum = 0;
for(let val of marks){
    sum = sum+val;
}
let avg = sum/marks.length;
console.log(sum);
console.log(avg);