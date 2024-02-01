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
//...key EVENTS.....//
const ourBox=document.getElementById("ourBox");
const moveAmount=10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>{
if(event.key.startsWith("Arrow")){
    event.preventDefault();
    switch(event.key){
        case "ArrowUp":
            y-=moveAmount;
            break;
            case "ArrowDown":
            y+=moveAmount;
            break;
            case "ArrowLeft":
            x-=moveAmount;
            break;
            case "ArrowRight":
            x+=moveAmount;
            break;
    }
    ourBox.style.top=`${y}px`;
    ourBox.style.left=`${x}px`;
}

})
document.addEventListener("keydown",event=>{
    ourBox.textContent="😭";
    ourBox.style.backgroundColor="tomato";
});


document.addEventListener("keyup",event=>{
    ourBox.textContent="😆";
    ourBox.style.backgroundColor="lightskyblue";
});





