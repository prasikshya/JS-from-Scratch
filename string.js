// string metods and string slicing
// let userName="Prasikshya";
// // userName=userName.trim();
// // userName=userName.toUpperCase();

// let phoneNumber="123-45-67";
// // phoneNumber=phoneNumber.replaceAll("-","");
// phoneNumber=phoneNumber.padEnd(15,"0");
// console.log(phoneNumber);

const email="prasikshya1@gmail.com";
let username=email.slice(0,email.indexOf("@"));
let extension=email.slice(email.indexOf("@")+1)
console.log(username);
console.log(extension);

