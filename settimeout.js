

// function sayHello(){
//     window.alert("hello");
// }

// // setTimeout(()=>window.alert("Hello"),3000);

let timeoutId;

function startTimer(){
   timeoutId= setTimeout(()=>window.alert("hello"),3000);
   console.log("started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}