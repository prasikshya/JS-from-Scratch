let username=window.prompt("enter your name");
// userName=userName.trim();
// let letter=userName.charAt(0);
// letter=letter.toUpperCase();
// let extraXhars=userName.slice(1);
// extraXhars=extraXhars.toLowerCase();
// userName=letter + extraXhars;
// console.log(userName);

username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase()
console.log(username)