const myBox=document.getElementById("myBox");
const myButton=document.getElementById("myBtn");
// function changeColor(event){
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent="relaxx 💖 ";
// }
// myBox.addEventListener("click",changeColor);


//we can pass anonymous func too...
// myBox.addEventListener("click",function(event){
//     event.target.style.backgroundColor="beige";
//     event.target.textContent="RELAXX 💗";
// })

//with arrow func...
myButton.addEventListener("click",event=>{
    myBox.style.backgroundColor="beige";
    myBox.textContent="RELAXX 💗";
});

myButton.addEventListener("mouseover",event=>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="don't do it :(";

});
myButton.addEventListener("mouseout",event=>{
    myBox.style.backgroundColor="pink";
    myBox.textContent="CLICK ME💗";
})





