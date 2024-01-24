function Car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive=function(){console.log(`you drive ${this.model}`)}

}

const car1=new Car("Ford","mustang",2025,"black");
car1.drive();
const car2=new Car("Dodge",'Charger',2028,"blue");
car2.drive();