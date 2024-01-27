// try {
//     console.log(x);
//     console.log("hello");
// }
// catch(error){
//     console.error(error);
// }

// finally{
//     console.log("this finally block always executes")
// }

// console.log("you've reached the end ofyour program");


try {
    const dividend = Number(window.prompt(`enter the dividend`));
    const divisor = Number(window.prompt(`enter the divisor`));
    if (divisor==0){
        throw new Error("You can't divide by zero");
    }
    if (isNaN(dividend)|| isNaN(divisor)){
        throw new Error("Values must be a number");
    }
    const result = dividend / divisor;
    console.log(result);
}

catch (error) {
    console.error(error);
}

console.log("end of the program...byee");

