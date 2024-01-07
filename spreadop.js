//Spread operator represented as ...
//array:
// let numbers=[1,2,3,4,5];
// let maximum=Math.max(...numbers);
// let minimum=Math.min(...numbers);
// console.log(minimum);
// console.log(maximum);



// //string
// let username="prasikshya";
// let letters=[...username].join('-');
// console.log(letters);

let fruits=["apple","mango","orange"];
let vegetables=["potato","brinjal","cauliflower"];

let foods=[...fruits,...vegetables,"eggs","milk"];
console.log(foods);
