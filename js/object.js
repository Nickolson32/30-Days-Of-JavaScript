// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// user.location.city = "Mariupol";
// const {
//   name,
//   tag,
//   location: { country, city },
//   stats: { followers, views, likes },
// } = user;
// console.log(followers);
// console.log(city);
// // console.log(user.name);
// // user.name = "Nick";
// user.location.country = "Ukraine";
// // user.location.village = "moskva";
// // user.stats.followers = 67890;
// // console.log(user);
// // console.log(typeof user);
// console.log(name);
// console.log(city);

// console.log(city);
// // console.log(user.location.city);
// // console.log(user.sex);
// // console.log(user.location["city"]);
// ===============================================================================================
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   addBooks(bookTitle) {
//     this.title = ["The Last Kingdom"];
//     this.title.push(bookTitle);
//   },
// };
// book.title = "scmzlkmlzcml";
// console.log(book.title);
// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");
// book.genres.pop();
// book.genres.pop();
// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']
// // console.log(book[title]);

// book.addBooks("Bukvar");

// // console.log(book);

// ================================================================================================
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']
// for (const key of keys) {
//   console.log("name of key:", key);
// }

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
// ===============================================================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }
// ========================================================================================================
// Spread

// const a = "javascript is the best programming language";

// const b = a.split(" ");
// console.log(b);

// const c = ["Vova", "Sara", "Nick"];

// const d = [...c, ...b];
// console.log(d);

// rest====================================================================================
// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// console.log(multiply(1, 2, 3, 4));

// Destrucrion object=================================================================================
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9.45;
// book.author = "Nickolson";
// book.sex = true;
// const accessType = book.isPublic ? "публичном" : "закрытом";
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;

// destruction
// const {
//   title,
//   author,
//   genres: janre,
//   isPublic,
//   rating,
//   sex: nunsex = "false",
// } = book;
// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

// console.log(author);
// console.log(nunsex);
// console.log(title);
// console.log(accessType);
// console.log(message);
// console.log(janre);

// Deep destrucrion==============================================================================================

// const user = {
//   bookName: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// user.bookName = "Bukvar";
// user.tag = "bukvarenlr";

// const {
//   bookName,
//   tag: bukva,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(bookName); // Jacques Gluke
// console.log(bukva); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Array destruction================================

// const rgb = [345, 200, 255, 100, 234];

// const [red, ...colors] = rgb;

// const [, , , blue] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]
// console.log(rgb);
// console.log(blue);

// Паттерн «Объект параметров»=============================================================================

const message =
  "Declare variables to store your first name, last name, marital status, country and age in multiple lines";

const b = message.replaceAll("i", "");
console.log(b);
