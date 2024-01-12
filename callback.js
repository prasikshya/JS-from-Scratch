

// hello(goodbye);


// function hello(callback) {
//     console.log("hello");
//     callback();
// }

// function goodbye() {
//     console.log("goodbye guys!!");
// }
sum(displayConsole,1,2);


function sum(callback,x,y){
    let result=x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("h1").textContent=result;
}