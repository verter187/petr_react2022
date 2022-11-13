"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели!") || 0;

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// for (let i = 0; i < 2; i++) {
//   let filmName = prompt("Один из последних просмотренных фильмов?"),
//     filmRating = prompt("На сколько оцените его?");
//   personalMovieDB.movies[filmName] = filmRating;
// }

// console.log(personalMovieDB);
// let length = 0;
// for (let i = 0; i < 6; i++) {
//   length += 1;

//   let result = "";
//   for (let j = 0; j < length; j++) {
//     result += "*";
//   }
//   console.log(result);
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// for (let i = ; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

const lines = 5;
let result = "";

let num = 1;
for (let i = 0; i <= lines; i++) {
  let space = "";
  for (let j = lines - i; j > 0; j--) {
    space += " ";
  }

  result += space;
  for (let k = 0; k < num; k++) {
    result += "*";
  }
  num += 2;

  result += "\n";
}
console.log(result);
