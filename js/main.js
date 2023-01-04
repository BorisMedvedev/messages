"use strict";
//база данных
let listData = [
  {
    name: "Борис",
    surename: "Николаевич",
    lastname: "Медведев",
    age: 44,
    hobby: "верстка",
  },
  {
    name: "Василий",
    surename: "Петрович",
    lastname: "Иванов",
    age: 25,
    hobby: "математика",
  },
  {
    name: "Максим",
    surename: "Борисович",
    lastname: "Медведев",
    age: 11,
    hobby: "спорт",
  },
  {
    name: "Кирилл",
    surename: "Борисович",
    lastname: "Медведев",
    age: 17,
    hobby: "спорт",
  },
];

//создание элементов
const $app = document.getElementById("app");

const $table = document.createElement("table");
const $tableHead = document.createElement("thead");
const $tableBody = document.createElement("tbody");
const $tableHeadTr = document.createElement("tr");
const $tableHeadThFio = document.createElement("th");
const $tableHeadThAge = document.createElement("th");
const $tableHeadThYearBirth = document.createElement("th");
const $tableHeadThHobby = document.createElement("th");

$table.classList.add("table", "table-dark", "table-striped");

$tableHeadThFio.textContent = "ФИО";
$tableHeadThAge.textContent = "Возраст";
$tableHeadThYearBirth.textContent = "Дата рождения";
$tableHeadThHobby.textContent = "Хобби";

$tableHeadTr.append(
  $tableHeadThFio,
  $tableHeadThAge,
  $tableHeadThYearBirth,
  $tableHeadThHobby
);

$table.append($tableHead);
$table.append($tableBody);
$tableHead.append($tableHeadTr);
$app.append($table);

//рендер

//подготовка
const newListData = [...listData];

for (const oneUser of newListData) {
  oneUser.fio = oneUser.name + " " + oneUser.surename + " " + oneUser.lastname;
  oneUser.yearBirth = 2023 - oneUser.age - 1;
}

//отрисовка
for (const oneUser of newListData) {
  const $userTr = document.createElement("tr");
  const $userThFio = document.createElement("th");
  const $userThAge = document.createElement("th");
  const $userThYearBirth = document.createElement("th");
  const $userThHobby = document.createElement("th");

  $userThFio.textContent = oneUser.fio;
  $userThAge.textContent = oneUser.age;
  $userThYearBirth.textContent = oneUser.yearBirth;
  $userThHobby.textContent = oneUser.hobby;

  $userTr.append($userThFio, $userThAge, $userThYearBirth, $userThHobby);

  $tableBody.append($userTr);
}
