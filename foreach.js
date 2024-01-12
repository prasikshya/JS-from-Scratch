let fruits = ["apple", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function display(element) {
    console.log(element);
}

function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function lowercase(element, index, array) {
    array[index] = element.toLowerCase();
}
