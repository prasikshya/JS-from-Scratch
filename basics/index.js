console.log("my name is prasikshya");
console.log(`it's  cold outside`)
console.log("\n");
console.log("something written in a new line");
// this is a comment
/* multi
comment*/
//variable
let firstName="prasikshya";
let age=19;
let agee="20";

age=age+1;
console.log(age);
console.log(firstName);

agee=agee+1;
console.log(agee);

console.log("hey",firstName)
console.log("you are",age,"years old");

// //DOM
// document.getElementById("p1").innerHTML="HELLO"+firstName;
// document.getElementById("p2").innerHTML="you are"+age+"years old";

//arithmetic expression:
let students=20;
students+=students;//augmented assignment operator..
console.log(students);

//learning precedence..
let result=(1+2*(2+3));
console.log("the result is \t",result);

//TAKING  user INPUT
let username=window.prompt("what's your name?");
console.log(username);

document.getElementById("myButton").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML="hello"+ username;
}

 


