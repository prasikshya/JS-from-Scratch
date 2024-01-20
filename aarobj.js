// const fruits=[{name:"apple",color:"red",calories:95},
// {name:"orange",color:"orange",calories:45},
// {name:"banana",color:"yellow",calories:105},
// {name:"coconut",color:"white",calories:159},
// {name:"pineapple",color:"yellow",calories:37} ];

// console.log(fruits[0].calories);

// fruits.splice(2,1);

// fruits.push({name:"grapes",color:"black",calories:63});
// console.log(fruits);

// fruits.forEach(fruit=>console.log(fruit.name));
// const fruitNames=fruits.map(fruit=>fruit.name);
// const fruitColors=fruits.map(fruit=>fruit.color);
// console.log(fruitNames);
// console.log(fruitColors);

// const yellowFruits=fruits.filter(fruit=>fruit.color==="yellow");
// const lowCal=fruits.filter(fruit=>fruit.calories<100);
// const highCal=fruits.filter(fruit=>fruit.calories>100);
// console.log(yellowFruits);
// console.log(lowCal);
// console.log(highCal);

/////REDUCE METHOD...
// const maxFruit=fruits.reduce((max,fruit)=>
// fruit.calories >max.calories?
// fruit:max);
// console.log(maxFruit);


// const minFruit=fruits.reduce((min,fruit)=>
// fruit.calories <min.calories?
// fruit:min);
// console.log(minFruit)

const children = [
    { name: "ram", age: 25},
    { name: "shyam", age: 29 },
    { name: "hari", age: 50}
  ];
  
  const maxAge = Math.max(...children.map(child => child.age));
  
  const childwithMaxage = children.filter(child => child.age === maxAge);
  console.log(childwithMaxage);