// let area;
// let width;
// let height;

// width=window.prompt("enter width");
// height=window.prompt("enter height");


// area=getArea(width,height);

// console.log("the area is : ",area)
// function getArea(width,height){

//     let result=width*height;
//     return result;
// }

let a;
let b;
let sum;

a=window.prompt("enter the value of a");
b=window.prompt("enter the value of b");
sum=getSum(a,b);
console.log("sum of",a, "and",b, "is:",sum);
function getSum(a,b){
    return a+b;
}