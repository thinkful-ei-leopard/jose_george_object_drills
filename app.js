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