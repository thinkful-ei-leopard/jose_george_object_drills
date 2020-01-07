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

function enrollInSummerSchool(students) {
  // your code here

  for (let i =0; i <students.length; i++){
    students[i].status = 'In Summer School';
  }
  return students;
}

function findById(items, idNum) {
  for(let i = 0; i < items.length; i++) {
    if(items[i].id === idNum) {
      return items[i]
    }
  }
}

function validateKeys(object, expectedKeys) {
  let newArr = Object.keys(object);

  for(let i = 0; i < expectedKeys.length; i++) { 
    for(let n = 0; n < newArr.length; i++) { 
      if(expectedKeys.length === newArr.length && expectedKeys[i] === newArr[n]) { 
        return true } else { 
        return false } } }

}