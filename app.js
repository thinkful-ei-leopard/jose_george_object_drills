function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      return 'hello';
    }
  };
}

console.log(createMyObject())

function updateObject (obj) {
  const newObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  }
  const obj3 = {...obj, ...newObj };
  return obj3;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  };
  return person;
}

function keyDeleter(obj) {
  // your code here
  delete obj.foo;
  delete obj.bar;
  return obj;
}