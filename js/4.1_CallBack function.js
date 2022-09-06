// Функция высшего порядка - принимает другую функцию как параметр
// const fnA = function (message, callback) {
//   console.log(message);
//   callback("7:00");
// };

// // callback функция - передается другой функции как аргумент
// const fnB = function (time) {
//   console.log("You should wake up", time);
// };

// fnA("Good day", fnB);
// fnA("Good morning", fnB);
// fnA("Good evening", fnB);

// ===========================================================

// const DoMath = function (a, b, c, callback) {
//   const result = callback(a, b, c);
//   // console.log(Math.round(result));
//   console.log(result);
// };

// const multiply = function (x, y, z) {
//   return (result = x * y * z);
// };
// DoMath(9, 4, 5, multiply);
// DoMath(90, 42, 5, multiply);

// const Dev = function (x, y, z) {
//   return (result = x / y / z);
// };

// DoMath(900, 10, 3, Dev);
// DoMath(9456, 768, 3, Dev);

// =================================================================================================

// const resulti = function (a, callback) {
//   const result = callback(a);
//   console.log("Самое маленькое число в массиве", result);
// };

// const arrayMin = function (x) {
//   return Math.min(...x);
// };

// const a = [12, 45, 76, 89, 3];
// // resulti(a, arrayMin);

// const arrayMax = function (x) {
//   return Math.max(...x);
// };

// // resulti(a, arrayMax);

// ===============================================================================================================
// Инлайновая записьфункции, если функцию не нужно переиспользовать
// const a = [12, 45, 76, 89, 3];
// resulti(a, function (x) {
//   return Math.min(...x);
// });
// resulti(a, function (x) {
//   return Math.max(...x);
// });

// Примеры=======================================
// console.log("Отчет времени пошел");
// const callback = function () {
//   console.log("Время задержки 3,5 секунды");
// };

// setTimeout(callback, 3500);

// =========================================================

// const filter = function (array, test) {
//   const filterdArray = [];
//   const sum = 0;
//   for (const element of array) {
//     // console.log(element);
//     const yes = test(element);
//     if (yes) {
//       filterdArray.push(element);
//       // sum += Number(element);
//     }
//   }
//   return filterdArray;
//   // return sum;
// };

// // console.log(filter([1, 3, 5, 6, 8]));

// const callback = function (value) {
//   return value <= 3;
// };

// const r1 = filter([1, 2, 3, 45, 6, 7, 8], callback);
// console.log(r1);

// const r2 = filter([1, 45, 6, 78, 97, 6, 9], function (value) {
//   return value >= 33;
// });
// console.log(r2);

//
// // ===========================================================================
// const numbers = [5, 10, 15, 20, 25];

// // // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }

    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment`
    );
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
