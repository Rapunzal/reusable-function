//1.Take an object and increment its age field.

let person = {};

function setTime() {
  return new Date();
}

function incrementAge(person) {
  if (person.age === undefined) {
    person.age = 0;
  }
  person.age++;
  person.updated_at = setTime();
  return person;
}

console.log(incrementAge(person));

//2.Take an object, make a copy, and increment the age field of the copy. Return the copy.

function copyObject(person) {
  if (person.age === undefined) {
    person.age = 0;
  }
  let obj = { ...person };
  obj.age++;
  obj.updated_at = setTime();
  return obj;
}

//console.log(copyObject(person));
console.log(person);
