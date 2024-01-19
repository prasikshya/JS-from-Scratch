// ....example 1.....
// let a=2;
// let b=3;
// [a,b]=[b,a];
// console.log(`value if a:${a} and b :${b}`)
//...expample 2.....
// const colors=["red","green","lavendar","white","yellow","pink"];
// // [colors[0],colors[3]]=[colors[3],colors[0]];
// // console.log(colors);
// ...example 3....
// const[firstColor,secondColor,thirdColor,...extraColors]=colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// ...EXAMPLE 4....

function displayPerson({firstName,lastname,age,job="unemployed"}){
    console.log(`name:${firstName} ${lastname}`);
    console.log(`age : ${age} `);
    console.log(`job: ${job}`);

}
const person1={
    firstName:"prasikshya",
    lastname:"baral",
    age:100,
}

const person2={
    firstName:"hailey",
    lastname:"biber",
    age:30,
    job:"influencer",
}
// const {firstName,lastname,age,job="unemployed"}=person1;//extracted value can have default value 
// console.log(firstName);
// console.log(lastname);
// console.log(age);
// console.log(job);
    displayPerson(person2);
    displayPerson(person1);

