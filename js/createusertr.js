import { listData } from "./main.js";
export function createUserTr() {
  const newListData = [...listData];

  for (const oneUser of newListData) {
    oneUser.fio =
      oneUser.name + " " + oneUser.surename + " " + oneUser.lastname;
    oneUser.yearBirth = 2022 - oneUser.age;
  }

  //отрисовка
  for (const oneUser of newListData) {
    const $table = document.querySelector(".table");
    const $tableBody = document.createElement("tbody");
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
    $table.append($tableBody);

    return { $userTr };
  }
}
