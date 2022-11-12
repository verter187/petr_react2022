"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели!") || 0;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  let filmName = prompt("Один из последних просмотренных фильмов?"),
    filmRating = prompt("На сколько оцените его?");
  personalMovieDB.movies[filmName] = filmRating;
}

console.log(personalMovieDB);
