"use strict";

let numberOfFilms;

const start = (numberOfFilms) => {
  while (!numberOfFilms)
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели!");
};

start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let filmName = prompt("Один из последних просмотренных фильмов?"),
      filmRating = prompt("На сколько оцените его?");
    if (!filmName || !filmRating || filmName.length > 50) {
      i--;
      continue;
    }
    personalMovieDB.movies[filmName] = filmRating;
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert("Просмотрено мало фильмов.");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель.");
  } else {
    alert("Вы киноман.");
  }
}

detectPersonalLevel();

function showMyDB(hidden, personalMovieDB) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private, personalMovieDB);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
