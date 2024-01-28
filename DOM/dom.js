//DOM
const username = "Prasikshya";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? 'Guest' : username;
