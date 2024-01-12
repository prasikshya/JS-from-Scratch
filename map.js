// const numbers=[1,2,3,4,5];
// const squares=numbers.map(square);
// const cubes=numbers.map(cube);
// console.log(`cube of given element is ${cubes}`);
// console.log(`square of given element is ${squares}`);


// function square(element){
//     return Math.pow(element,2);
// }
// function cube(element){
//     return Math.pow(element,3);
// }

// const students=["motu","patlu","tom","jerry"];
// const studentsUpper=students.map(uppercase);

// console.log(studentsUpper);

// function uppercase(element){
//     return element.toUpperCase();
// }


const dates=["2024-1-15","2024-2-14"];
const formattedDates=dates.map(formatDates);
console.log(formattedDates);
function formatDates(element){
    const parts=element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}