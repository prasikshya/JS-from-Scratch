let symbol=window.prompt("enter symbol to use");
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns");

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
        document.getElementById("myrec").innerHTML += symbol;
    }
    document.getElementById("myrec").innerHTML += "<br>";
}
