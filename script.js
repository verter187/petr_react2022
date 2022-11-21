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

function calculateVolumeAndArea(base) {
  return typeof base === "number" && base % 1 === 0 && base >= 0
    ? `Объем куба: ${Math.pow(base, 3)}, площадь всей поверхности: ${
        Math.pow(base, 2) * 6
      }`
    : "При вычислении произошла ошибка";
}

console.log(calculateVolumeAndArea(15));

// Место для второй задачи
function getCoupeNumber(cNum) {
  if (typeof cNum !== "number" || cNum % 1 !== 0 || cNum < 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (cNum === 0 || cNum > 36) {
    return "Таких мест в вагоне не существует";
  } else {
    return Math.ceil(cNum / 4);
  }
}

console.log(getCoupeNumber(39));

function getTimeFromMinutes(minutes) {
  if (typeof minutes !== "number" || minutes % 1 !== 0 || minutes < 0) {
    return "Ошибка, проверьте данные";
  } else {
    let hours = Math.floor(minutes / 60),
      mins = minutes - hours * 60,
      nameMins = "минут",
      nameHours = "часов";
    if (String(mins).slice(-1) === "1") {
      nameMins = "минута";
    } else if (["2", "3", "4"].includes(String(mins).slice(-1))) {
      nameMins = "минуты";
    }

    if (String(hours).slice(-1) === "1") {
      nameHours = "час";
    } else if (["2", "3", "4"].includes(String(hours).slice(-1))) {
      nameHours = "часа";
    }
    return `Это ${hours} ${nameHours} и ${mins} ${nameMins}`;
  }
}

console.log(getTimeFromMinutes(-150));

function findMaxNumber(...args) {
  if (
    args.length !== 4 ||
    args.filter((arg) => typeof arg !== "number").length > 0
  ) {
    return 0;
  } else {
    return Math.max(...args);
  }
}

console.log(findMaxNumber(1, 5, "6", "10"));

function fib(counter) {
  if (typeof counter !== "number" || counter % 1 !== 0 || counter < 0) {
    return "";
  }

  let str = " ";
  let arr = [];
  for (let i = 0; i < counter; i++) {
    if (i === 0) {
      arr[i] = 0;
      str = str + " 0";
    } else if (i === 1) {
      arr[i] = 1;
      str = str + " 1";
    } else {
      arr[i] = arr[i - 2] + arr[i - 1];
      str = str + ` ${arr[i]}`;
    }
  }
  return str.trim();
}
fib(0);
