class Animal{


    constructor(name,age){
        this.name=name;
        this.age=age;

    }

    move(speed){
        console.log(`the ${this.name} moves at a speed of ${speed}mph`);

    }
}
class Rabbit extends Animal{

    constructor(name,age,runSpeed){
        super(name,age);

this.runSpeed=runSpeed;
    }
    run(){
        console.log(`this ${this.name} can run `);
        super.move(this.runSpeed);
    }

}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
       
        this.swimSpeed=swimSpeed;
            }
            swim(){
                console.log(`this ${this.name} can swim`);
                super.move(this.swimSpeed);
    }
            }
        
    

class Peacock extends Animal{
    constructor(name,age,danceSpeed){
        super(name,age);
    
        this.danceSpeed=danceSpeed;
            }
        
            dance(){
                console.log(`this ${this.name} can dance`);
                super.move(this.danceSpeed);
    }
            }
        

const rabbit=new Rabbit("rabbit",2,25);
const fish=new Fish("rohu",3,13);
const peacock=new Peacock("peacock",3,32);

rabbit.run();
