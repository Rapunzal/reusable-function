let obj = [
  { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
  { id: "48", name: "Barry", occupation: "Runner", age: 25 },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
  { id: "7", name: "Bilbo", occupation: "None", age: 111 },
];

//1.Sort the array by age.

function sortByAge(person) {
  person.sort((a, b) => a.age - b.age);
  return person;
}

console.log(sortByAge(obj));

//2.Filter the array to remove entries with an age greater than 50.

function filterArray(persons) {
  persons = persons.filter((person) => person.age > 50);
  return persons;
}

console.log(filterArray(obj));

//3.Map the array to change the “occupation” key to “job”
//and increment every age by 1.

function mapKey(persons) {
  persons = persons.map((person) => {
    person["job"] = person["occupation"];
    delete person["occupation"];
    person["age"]++;
    return person;
  });
  return persons;
}
console.log(mapKey(obj));
console.log(obj, " =================");
//4.Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.

function sumOfAge(persons) {
  let initalValue = 0;
  let sum = persons.reduce((acc, curr) => {
    return acc + curr.age;
  }, initalValue);
  return sum;
}
console.log(sumOfAge(obj));
