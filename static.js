//static

// class Mathutl{
//     static PI=3.14123;
//     static getDiameter(radius){
//         return radius *2;
//     }
//     static getCircumference(radius){
//         return 2* this.PI*radius;
//     }
//     static getArea(radius){
//         return this.PI *radius*radius
//     }
// }
// console.log(Mathutl.PI);
// console.log(Mathutl.getDiameter(10));
// console.log(Mathutl.getCircumference(12));
// console.log(Mathutl.getArea(10));


class User{
     static userCount=0;
    
    constructor(username){
        this.username=username;
        User.userCount++;
    }
    sayHello(){
        console.log(`hello my username is ${this.username}`);
    }

    static getuserCount(){
        console.log(`there are ${User.userCount}  users online`);
    }
}

const user1=new User("ram");
const user2=new User("shyam");
const user3=new User("Hari");


user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getuserCount();


