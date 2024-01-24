//.filter()
//example1:
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNum = numbers.filter(isOdd);

// console.log(evenNum);
// function isOdd(element) {
//     return element % 2 !== 0;
//EXAMPLE:2
// const ages=[16,17,18,18,19,20,60,10,9,2,4];
// const iseligible=ages.filter(eligible)
// const isnotEligible=ages.filter(notEligible)

// console.log(iseligible);
// console.log(isnotEligible);

// function eligible(element){
//     return element >=18;
// }

// function notEligible(element){
//     return element <18;
// }
//EXAMPLE:3..........
const words = ["happy", "sad", "excited","mitochondria", "confused", "lost","photosynthesis"];
const shortword=words.filter(short);
const longword=words.filter(longer);

console.log(`words having length 5 or less :${shortword} and more than 5 is: ${longword}`);


function short(element) {
    return element.length <=5;
}
function longer(element) {
    return element.length >5;
}