// const myBtn = document.getElementById("myBtn");
// const text = document.getElementById("text");

// myBtn.onclick = function() {
//     let para=paragraph.value;
//     let channel = text.value;

//     switch (channel) {
//         case "messi":
//             console.log("congratulations you understand football <33 ");
//             break;
//         default:
//             console.log("hey!you're in dilemaa..enter the real GOAT");
//     }

// };

let testGrade = 90;
let lettergrade;

switch (true) {
    case testGrade >= 90:
        lettergrade = "A";
        break;
    case testGrade >= 80:
        lettergrade = "B+";
        break;
    case testGrade >= 70:
        lettergrade = "B";
        break;
    case testGrade >= 60:
        lettergrade = "C";
        break;
    default:
        lettergrade = "F";
}

console.log(lettergrade);
