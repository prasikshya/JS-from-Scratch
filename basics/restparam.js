//rest parameters represent3ed as (...rest)


// function openfridge(...foods){
//     console.log(...foods);
// }

// function getfood(...foods){
//     return foods;
// }
// const food1="pizza";
// const food2="dal bhat";
// const food3="momo";
// const food4="ramen";
// const food5="burger";
// // openfridge(food1,food2,food3,food4);
// const foods=getfood(food1,food2,food3,food4,food5);
// console.log(foods);


// example 2:
// function sum(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }
// const total=sum(1,2,3,4,5);
// console.log(`your total is $${total}`);
//average:
// function getAverage(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result/numbers.length;
// }
// const total=getAverage(75,100,80,90);
// console.log(total);


//combining string..........
// function combonestring(...strings){
//     return strings.join(" ");
// }
// const fullName=combonestring("MR.","sponggebob","squarepants","III");
// console.log(fullName);


function subjects(...sub){
    const store = sub.join(', ').toUpperCase();
    return store;
 }
 
 const result = subjects("Dsa", "operating system", "oop", "linear algebra");
 console.log(result);
 