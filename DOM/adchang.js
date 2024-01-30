// const newH1 = document.createElement("h1");
// newH1.textContent = "Prasikshya";
// document.body.prepend(newH1);
// newH1.id = 'myH1';
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// document.getElementById("box1").append(newH1);

// // const box2=document.getElementById("box2");
// // document.body.insertBefore(newH1,box2);


// // const boxes=document.querySelectorAll(".box");
// // document.body.insertBefore(newH1,box3);


// //..REMOVE HTML ELEEMTNS...////
// document.getElementById("box1").removeChild(newH1);

//Append element to DOM....///
const newListitem=document.createElement("li");
newListitem.textContent="coconut";
newListitem.id="coconut";
newListitem.style.fontWeight="bold";
newListitem.style.backgroundColor="lightgreen";
document.getElementById("fruits").append(newListitem);
// // document.getElementById("fruits").prepend(newListitem);
// const orange=document.getElementById("orangeee");
// document.getElementById("fruits").insertBefore(newListitem,orange);

///using queryselector all.....
// const listItems=document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListitem,listItems[2]);
document.getElementById("fruits").removeChild(newListitem);


