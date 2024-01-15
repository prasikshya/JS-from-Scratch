
//function expression-->a way to define functions as values or variables

const numbers=[1,2,3,4,5,6]
const sq=numbers.map(
    function (element){
        return Math.pow(element,2);
    });
const cube=numbers.map(function (element){
    return Math.pow(element,3);
})

const even=numbers.filter(function(element){
    return element%2==0;
})
console.log(`cube is : ${cube}`);
console.log(`square is : ${sq}`);
console.log(`even numbers in array are: ${even}`);