// arrow func--> a consise way to write function expressions 
// good for simple functions that we use only once
// (parameters)=> Code

// const hello=(name,age)=>{console.log(`hello ${name}`);
// console.log(`age of ${name } is :${age}`);

// }
// hello("noone",100);

// setTimeout(() => console.log("hello"),3000);

const numbers=[1,2,3,4,5,6];
const squares=numbers.map((element)=>Math.pow(element,2));
const cubes=numbers.map((element)=>Math.pow(element,3));
const even=numbers.filter((element)=>element%2==0);
const total=numbers.reduce((accumulator,element)=>accumulator+element);

console.log(total);
console.log(even);
console.log(squares);
console.log(cubes);
