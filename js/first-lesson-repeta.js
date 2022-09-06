// for (let i = -22; i < 5000; i += 33) {
//   console.log(i);
// // }
// const age = 32;
// let message;
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   }
//   message = "You are a minor";
//   return;
// }
// console.log(message);

// Тернарный оператор
// const age = 16;
// let message = age >= 18 ? "You are an adult" : "You are a minor";

// console.log(message);

// const age = 18;
// let message;

// if (age >= 18) {
//   message = "You are an adult";
// } else {
//   message = "You are a minor";
// }
// console.log(message);

// const fruits = ["apple", "peach", "pear", "banana", "plum"];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);
// const name = "Mango";
// console.log(name.split(""));

// const message = "JavaScript это интересно";
// const bn = console.log(message.split(" "));

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("dfs")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"

/* Задача Написать скрипт поиска логина */

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "poly1scute";
let message = "";
//   1. for

// for (let i = 0; i < logins.length; i += 1) {
//   console.log(logins[i]);

//   if (logins[i] === loginToFind) {
//     message = `пользователь найден ${loginToFind}`;
//     break;
//   }
//   message = `пользователь не найден ${loginToFind}`;
// }
// console.log(message);

// 2. for ... of
// for (const login of logins) {
//   //   console.log(login);
//   if (login === loginToFind) {
//     message = `пользователь найден ${loginToFind}`;
//     break;
//   }

//   message = `пользователь не найден ${loginToFind}`;
// }
// console.log(message);

// 3. Метод includes и тернарный оператор
console.log(logins.includes(loginToFind));

const login = logins.includes(loginToFind)
  ? `пользователь найден ${loginToFind}`
  : `пользователь не найден ${loginToFind}`;
console.log(login);

/* Написать скрипт нахождения самого маленького числа */

const numbers = [87, 65, 5, 13, 18, 34, 22];
let theSmallest = numbers[0];
for (const number of numbers) {
  if (theSmallest > number) theSmallest = number;
}
console.log(theSmallest);

// const order = [12, 85, 37, 4];
// let total = 0;
// for (let i = 0; i < order.length; i += 1) {
//   console.log(order[i]);
//   total += order[i];
//   console.log(total);
// }

const string = "The quick brown fox jumped over the lazy dog";

let array = string.split(" ");
console.log(array);
let bigWord = array[0];
for (let word of array) {
  // let num = word;
  if (bigWord.length < word.length) {
    bigWord = word;
  }
}
console.log(bigWord);

// }
// console.log(bigWord);
