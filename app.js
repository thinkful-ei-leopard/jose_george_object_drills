'use strict'
// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello() {
//       return 'hello';
//     }
//   };
// }

// console.log(createMyObject())

// function updateObject (obj) {
//   const newObj = {
//     foo: 'foo',
//     bar: 'bar',
//     bizz: 'bizz',
//     bang: 'bang',
//   }
//   const obj3 = {...obj, ...newObj };
//   return obj3;
// }

// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   };
//   return person;
// }

// function keyDeleter(obj) {
//   // your code here
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }

// function makeStudentsReport(data) {
//   let newArr = [];

//   for(let i = 0; i < data.length; i++) {
//     newArr.push(`${data[i].name}: ${data[i].grade}`)
//   }
//   return newArr
// }

// function enrollInSummerSchool(students) {
//   // your code here

//   for (let i =0; i <students.length; i++){
//     students[i].status = 'In Summer School';
//   }
//   return students;
// }

// function findById(items, idNum) {
//   for(let i = 0; i < items.length; i++) {
//     if(items[i].id === idNum) {
//       return items[i]
//     }
//   }
// }

// function validateKeys(object, expectedKeys) {
//   let newArr = Object.keys(object);

//   for(let i = 0; i < expectedKeys.length; i++) { 
//     for(let n = 0; n < newArr.length; i++) { 
//       if(expectedKeys.length === newArr.length && expectedKeys[i] === newArr[n]) { 
//         return true } else { 
//         return false } } }

// }

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration() {
//     return (this.water / this.flour) * 100
//   }
// };

// console.log(loaf.flour)

// console.log(loaf.hydration())

// const bob = {
//   foo: 1,
//   bar: 2,
//   fum: 3,
//   quux: 4,
//   spam: 5,
// }
// for (let key in bob) {
//   console.log(`${key} ${bob[key]}`)
// }

// const mcds = {
//   meals: ['breakfast', 'second breakfast',
//     'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(mcds.meals[3]);

// const jobs = [{name: 'Chandler', jobTitle: 'Accountant', boss: 'steve'}, {name: 'Phoebe', jobTitle: 'masseuss', boss: 'jose'}, {name: 'Joey', jobTitle: 'Actor', boss: 'will'}, {name: 'Monica', jobTitle: 'Chef'}];
// // jobs.forEach(element => console.log(`${element.name} ${element.jobTitle}`));

// jobs.forEach(element => !element.boss ? console.log(`${element.jobTitle} ${element.name} doesn't report to anybody`) : console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`));

function decode(word) {
  const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
  };
  const newArr = word.split(' ');
  let decoded = [];
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++){
    if (Object.keys(cipher).indexOf(newArr[i][0]) !== -1) {
      decoded.push(newArr[i][cipher[newArr[i][0]]-1])     
    }
    else {
      decoded.push(' ');
    }
  }
 console.log(decoded.join(''));

}
decode('craft block argon meter bells brown croon droop');

// function decode2(word) {
//   if (word[0].toLowerCase() === 'a') {
//     return word[1];
//   } else if (word[0].toLowerCase() === 'b') {
//     return word[2];
//   } else if (word[0].toLowerCase() === 'c') {
//     return word[3];
//   } else if (word[0].toLowerCase() === 'd') {
//     return word[4];
//   } else {
//     return ' ';
//   }
// }



