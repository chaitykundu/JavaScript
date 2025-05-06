/*create an array to store companies
a. remove the first company from the array
b. remove specific array and add item in it
c. add item at the end*/

let companies = ["Google", "Microsoft","Uber", "Samsung", "Apple"]
console.log(companies);
//remove first

companies.shift();
console.log(companies);

//remove specific
companies.splice(2, 1, "Ola");
console.log(companies);

//add item-end
let addCom = companies.push("Netflix");
console.log(addCom);
console.log(companies);


