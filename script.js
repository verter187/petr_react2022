"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели!") || 0;

// if (numberOfFilms < 10) {
//   alert("Просмотрено мало фильмов.");
// } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//   alert("Вы классический зритель.");
// } else {
//   alert("Вы киноман.");
// }
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// // while (true) {
// //   let filmName = prompt("Один из последних просмотренных фильмов?");

// //   if (!filmName || filmName.length > 50) {
// //     continue;
// //   }
// //   let filmRating = prompt("На сколько оцените его?");
// //   personalMovieDB.movies[filmName] = filmRating;
// //   break;
// // }

// for (let i = 0; i < 2; i++) {
//   let filmName = prompt("Один из последних просмотренных фильмов?"),
//     filmRating = prompt("На сколько оцените его?");
//   if (!filmName || !filmRating || filmName.length > 50) {
//     i--;
//     continue;
//   }
//   personalMovieDB.movies[filmName] = filmRating;
// }

// console.log(personalMovieDB);

// function returnNeighboringNumbers(num) {
//   return (numbers = [num - 1, num, num + 1]);
// }

// console.log(returnNeighboringNumbers(5));

// function getMathResult(base, num) {
//   if (typeof num === "string" || num <= 0) {
//     return base;
//   }
//   let res = "",
//     sum = 0;
//   for (let i = 0; i < num; i++) {
//     sum = sum + base;
//     res = res + (res ? "---" : "") + String(sum);
//   }
//   return res;
// }

// console.log(getMathResult(5, 3));

const arr = [1, 2, 3, , , , 7];
arr[100] = 100;
console.log(arr);
const str = "test";
console.log(str.indexOf("e"));

const logg = "Hello world!";
// console.log(logg.slice(6, 12));
// console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2255;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
