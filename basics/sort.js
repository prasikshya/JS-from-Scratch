  //..............SORT METHOD.......
  // let numbers=[1,2,3,4,11,6,7,8];
// numbers.sort((a,b)=>a-b);
// numbers.sort((a,b)=>b-a);
// // console.log(numbers);

// const people=[{name:"hawa",age:20,gpa:3.0},
// {name:"patrick",age:19,gpa:1.5},
// {name:"sandy",age:29,gpa:4.0}]

// people.sort((a,b)=>a.age-b.age);//ascending order
// people.sort((a,b)=>b.age-a.age);//descending order
// console.log(people);


const practiceArray = [
    { name: "John Doe", age: 28, city: "Example City", country: "Sample Country", score: 75 },
    { name: "Jane Smith", age: 35, city: "Testville", country: "Exampleland", score: 92 },
    { name: "Bob Johnson", age: 22, city: "Practiceburg", country: "Testland", score: 85 },
    { name: "Alice Williams", age: 30, city: "Skilltown", country: "Learningland", score: 88 },
  ];
  
  console.log(practiceArray);

  practiceArray.sort((a,b)=>a.name.localeCompare(b.name));
//   practiceArray.sort((a,b)=>b.name.localeCompare(a.name));
  console.log(practiceArray);

  



