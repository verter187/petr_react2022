"use strict";

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
  "Somebody",
];

function sortStudentsByGroups(arr) {
  let newArr = arr.sort(),
    team1 = newArr.slice(0, 3),
    team2 = newArr.slice(3, 6),
    team3 = newArr.slice(6, 9),
    others = `Оставшиеся студенты: ${
      newArr.slice(9).length ? newArr.slice(9).join(", ") : "-"
    }`;
  return [team1, team2, team3, others];
}

console.log(sortStudentsByGroups(students));
// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough({ height, moneyPer1m3, budget, shops }) {
//   let allShopsArea = shops.reduce(
//     (accum, value) => (accum += value.width * value.length),
//     0
//   );

//   let allShoppingCenterArea = allShopsArea * height;

//   let requiredBudget = allShoppingCenterArea * moneyPer1m3;
//   return requiredBudget <= budget
//     ? "Бюджета достаточно"
//     : "Бюджета недостаточно";
// }

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//     },
//     exp: "1 month",
//   },
//   showAgeAndLangs(personalPlanPeter) {
//     return `Мне ${
//       personalPlanPeter.age
//     } и я владею языками: ${personalPlanPeter.skills.languages
//       .join(" ")
//       .toUpperCase()}`;
//   },
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience({ skills: { exp } }) {
//   return exp;
// }
// // "Язык js изучен на 20% Язык php изучен на 10%"
// function showProgrammingLangs({ skills: { programmingLangs } }) {
//   let exp = "";
//   for (let key in programmingLangs) {
//     exp += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//   }

//   return exp;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//   return arr.length ? `Семья состоит из: ${arr.join(" ")}` : "Семья пуста";
//   // 'Семья состоит из: Peter Ann Alex Linda'
// }
// console.log(showFamily([]));

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
//   return arr.map((i) => i.toLowerCase()).join("\n");
// }

// console.log(standardizeStrings(favoriteCities));

// const someString = "This is some strange string";

// function reverse(str) {
//   return typeof str === "string"
//     ? str
//         .split(" ")
//         .reverse()
//         .map((i) => i.split("").reverse().join(""))
//         .join(" ")
//     : "Ошибка!";
// }

// console.log(reverse(7));

// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY"];

// function availableCurr(arr, missingCurr) {
//   return arr.length
//     ? `Доступные валюты:\n${arr.filter((i) => i !== missingCurr).join("\n")}`
//     : "Нет доступных валют";
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));
// Доступные валюты:
// UAH
// RUB

// const arr = [2, 13, 26, 8, 10];
// arr.sort((a, b) => b - a);
// console.log(arr);

// arr.pop();
// arr.push(10);

// for (let value of arr) {
//   console.log(value);
// }

// arr.map((item) => console.log(item));
// let a = arr.forEach((item, i, arr) => (arr[i] = item + 1));
// console.log(a);

// function first() {
//   setTimeout(() => console.log(1), 1000);
// }

// function second() {
//   console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log("Я прошёл этот урок!");
// }

// learnJS("JavaScript", done);

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest() {
//     console.log("test");
//   },
// };

// for (let key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border, bg);

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join("; ").sort());

// let obj1 = {
//   a: 7,
//   b: 9,
//   c: { m: 10, l: 11 },
//   d: function () {
//     console.log("test");
//   },
// };

// console.log(obj1);

// let obj2 = structuredClone(obj1);

// console.log(obj2);

// obj2.c.m = 8;
// console.log(obj2);
// console.log(typeof obj1.a);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {

// }
