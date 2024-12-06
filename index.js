//1.Take an array of numbers and return the sum.
let arr = [1, 2, 3, 4, 5];
const arraySum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(arraySum(arr));

//2.Take an array of numbers and return the average.

const arrayAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(arrayAvg(arr));

//3.Take an array of strings and return the longest string.

let strArray = ["hello", "world", "happy", "and", "wonderful", "people"];

function longestString(strArray) {
  let longeststr = strArray[0];
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longeststr.length) {
      longeststr = strArray[i];
    }
  }
  return longeststr;
}
console.log(longestString(strArray));

//4.Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function stringsLongerThan(strArr, num) {
  let longeststr = strArr[num],
    str = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longeststr.length && strArr != longeststr) {
      str += strArr[i] + " ";
    }
  }
  return str;
}

console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

//5.Recursion
//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// function recNum(num) {
//   if (num == 0) return;
//   return recNum(num--);
// }
// console.log(recNum(10));
