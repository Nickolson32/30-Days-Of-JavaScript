// /* Работа с обьектами */

// const playlist = {
//   name: "Мой список треков",
//   rating: 99,
//   tracks: ["first", "second", "third"],
//   trackCount: 3,
//   changeName(x) {
//     this.name = x;
//   },
//   addTracks(y) {
//     this.tracks.push(y);
//     this.trackCount = this.tracks.length;
//   },
//   updateRating(z) {
//     this.rating = z;
//   },
// };

// playlist.author = "nick";

// console.log(playlist);
// console.log(typeof playlist);

// console.log("чей плейлист?:", playlist.name);
// console.log(playlist.rating);
// playlist.updateRating(6);
// playlist.changeName("Kolya is best programist ever");
// playlist.addTracks("fourth");
// playlist.addTracks("five");
// console.log(playlist);

// /* Перебор обьекта */

// const feedback = {
//   good: 450,
//   neutral: 314,
//   bad: 213,
// };
// console.log(feedback);

// const keys = Object.keys(feedback);
// let totalCountFeedback = 0;

// for (let key of keys) {
//   let count = feedback[key];
//   console.log(count);

//   totalCountFeedback += count;
// }
// console.log("Сумма отзывов", totalCountFeedback);
// console.log(keys);

// console.log(typeof feedback);

//============================================Задача Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число.
// Это число должно быть первым параметром функции.

// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   //   console.log(firstNumber);
//   //   console.log(...args);
//   //   console.log(args[0]);

//   for (const arg of args) {
//     if (firstNumber < arg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// const r1 = addOverNum(50, 15, 27);
// const r2 = addOverNum(10, 12, 4, 11, 48, 10, 8);
// const r3 = addOverNum(20, 74, 11, 62, 46, 12, 36);
// console.log(r1);
// console.log(r2);
// console.log(r3);

//===============================================================

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (let firstEl of array) {
//     if (args.includes(firstEl)) {
//       matches.push(firstEl);
//     }
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }

// const r1 = findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// const r2 = findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// const r3 = findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// const r4 = findMatches([63, 11, 8, 29], 4, 7, 16);
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       console.log(potion);
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potion.name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// Change code above this line
// };

// const r1 = atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// const r2 = atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// const r3 = atTheOldToad.addPotion({ name: "Stone skin", price: 520 });
// const r4 = atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.table(atTheOldToad.potions);
// // console.log(r3);

// const r5 = atTheOldToad.removePotion("Dragon breath");
// const r6 = atTheOldToad.removePotion("Speed potion");
// console.log(r5);
// console.log(r6);
// =======================================================================

const a = "JavaSkript is sucks";

console.log(mulriply(345, 98, 2345));
function mulriply(a, b, c, d = 1, g) {
  return a * b * c - d;
}

console.log("result multyplay:", mulriply(345, 98, 2345, 3453676587));
console.log("result multyplay:", mulriply(345, 9856, 2345, 789809));
