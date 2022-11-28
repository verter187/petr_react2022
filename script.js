"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start() {
    while (!this.count)
      this.count = +prompt("Сколько фильмов вы уже посмотрели!");
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      let filmName = prompt("Один из последних просмотренных фильмов?").trim(),
        filmRating = prompt("На сколько оцените его?");
      if (!filmName || !filmRating || filmName.length > 50) {
        i--;
        continue;
      }
      this.movies[filmName] = filmRating;
    }
  },
  detectPersonalLevel() {
    if (this.count < 10) {
      alert("Просмотрено мало фильмов.");
    } else if (this.count >= 10 && this.count < 30) {
      alert("Вы классический зритель.");
    } else {
      alert("Вы киноман.");
    }
  },
  showMyDB() {
    if (!this.private) {
      console.log(this);
    }
  },
  writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (!genre) {
        i--;
        continue;
      }
      this.genres[i - 1] = genre;
    }
    this.genres.forEach((item, i) =>
      console.log(`Любимый жанр #${i + 1} - это ${item}`)
    );
  },
  toggleVisibleMyDB() {
    this.private = !this.private;
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();
