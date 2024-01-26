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
    const dividend = window.prompt(`enter the dividend`);
    const divisor = window.prompt(`enter the divisor`);
    const result = dividend / divisor;
    console.log(result);
}

catch (error) {
    console.error(error);
}

console.log("end of the program...byee");

