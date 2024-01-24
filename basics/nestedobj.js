// const person={
//     fullName:"motupatlu",
//     age:11,
//     isCartoon:true,
//     hobbies:["dwelling","brainstorming"],
//     address:{
//         street:"furfuri nagar",
//         city:"toonpoor",
//         country:"nowhere",
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isCartoon);
// console.log(person.hobbies[1]);
// console.log(person.address.country);


class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address= new Address(...address);

    }
}
class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country;
    }
}

const person1=new Person("motupatlu",12,"furfuri nagar",
"toonpur",
"nowhere");

const person2=new Person("moomin",14,"kainakai",
"kathmandu",
"Nepal");


console.log(person2.address.city);

