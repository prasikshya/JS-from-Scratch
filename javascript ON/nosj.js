
// //JSON

// const jsonNames=`["prasikshya","Bill Gates","Steve Jobs","Elon Musk"]`;
// const jsonPeople=`[
//     { "name": "prasikshya","age": 100,"isEmployed": true},
//     {"name": "Bill Gates","age": 65,"isEmployed": true},
//     { "name": "Steve Jobs", "age": 70, "isEmployed": false},
//     {"name": "Elon Musk","age": 40,"isEmployed": false }
// ]`;
// const jsonPerson=`{"name": "prasikshya", "age": 100, "isEmployed": true, "hobbies":["wandering","exploring"]}`;
// // const jsonString=JSON.stringify(person);
// const parsedData=JSON.parse(jsonPeople);
// console.log(parsedData);


//.......FETCH........//
// fetch("person.json")
// .then(response=>response.json())//response object it also returns a promise..
// .then(value=>console.log(value))

fetch("people.json")
.then(response=>response.json())
.then(values=>values.forEach(value=>console.log(value.name)))
.catch(error=>console.error(error));