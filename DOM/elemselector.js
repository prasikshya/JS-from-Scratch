const myHeading=document.getElementById("my-heading");
myHeading.style.backgroundColor="lavender";
myHeading.style.textAlign="center";

const fruits=document.getElementsByClassName("fruits");
//html collections are iterable

// for(let fruit of fruits){

// fruit.style.backgroundColor='pink';

// }

Array.from(fruits).forEach(fruit=>{
    fruit.style.backgroundColor='beige';
    fruit.style.textAlign="center";
})
//limited utility methods so forach can't be used with html collectioons..
//however,after typecasting to array froeach can be used....
const liElements=document.getElementsByTagName("li");
const h4Elements=document.getElementsByTagName("h4");
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor='yellow';
}
// for (let liElement of liElements){
//     liElement.style.backgroundColor="lightgreen";
// }
Array.from(liElements).forEach(liElement=>{
    liElement.style.backgroundColor="lightblue";
    liElement.style.textAlign="center";
});

//queryselector...
const element=document.querySelector(".fruits");
element.style.backgroundColor="pink";


//querySelectorAll()...has bultin foreach method..
const fruitss=document.querySelectorAll("li");
// fruitss[4].style.backgroundColor="grey";
// console.log(fruitss);
fruitss.forEach(foo=>{
    foo.style.backgroundColor="orange";
})

