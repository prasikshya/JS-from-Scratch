// class Products{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     displayProduct(){
//         console.log(`product:${this.name}`)
//         console.log(`product:${this.price}`)
//     }
//     calculateTotal(salesTax){
//         return this.price+(this.price*salesTax);
//     }
// }
// const salesTax=0.05;
// const product1=new Products("skirt",20.22);
// const product2=new Products("blazer",26.50);
// const product3=new Products("shoes",100.00);

// product3.displayProduct();
// const total=product3.calculateTotal(salesTax);
// console.log(`total price (with tax): $${total.toFixed(2)}`);

class College{
    constructor(stdname,id){
        this.stdname=stdname;
        this.id=id;
    }
display(){
    return `${this.stdname}'s id is ${this.id}`;
}
}

const std1=new College("prasikshya",99);
console.log(std1.display());