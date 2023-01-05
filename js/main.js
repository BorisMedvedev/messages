let listData = [
  {
    name: "Борис",
    surename: "Николаевич",
    lastname: "Медведев",
    age: 44,
    hobby: "верстка",
  },
];

function createForm() {
  const $container = document.querySelector(".form-wrapper");
  const $form = document.createElement("form");
  const $btn = document.createElement("button");
  const $inputname = document.createElement("input");
  const $inputsurename = document.createElement("input");
  const $inputlastname = document.createElement("input");
  const $inputage = document.createElement("input");
  const $inputhobby = document.createElement("input");

  $form.classList.add("mb-3");

  $inputname.classList.add("form-control", "mb-3");
  $inputsurename.classList.add("form-control", "mb-3");
  $inputlastname.classList.add("form-control", "mb-3");
  $inputage.classList.add("form-control", "mb-3");
  $inputhobby.classList.add("form-control", "mb-3");
  $btn.classList.add("btn", "btn-primary");

  $inputage.type = "number";
  $inputname.placeholder = "имя";
  $inputsurename.placeholder = "отчество";
  $inputlastname.placeholder = "фамилия";
  $inputage.placeholder = "возраст";
  $inputhobby.placeholder = "хобби";

  $btn.textContent = "Добавить пользователя";

  $form.append(
    $inputname,
    $inputsurename,
    $inputlastname,
    $inputage,
    $inputhobby,
    $btn
  );
  $container.prepend($form);

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    listData.push({
      name: $inputname.value,
      surename: $inputsurename.value,
      lastname: $inputlastname.value,
      age: parseInt($inputage.value),
      hobby: $inputhobby.value,
    });

    createUserTr();
  });
  console.log(listData);
  return {
    $form,
    $inputname,
    $inputsurename,
    $inputlastname,
    $inputage,
    $inputhobby,
    $btn,
  };
}
createForm();

function createElement() {
  const $app = document.getElementById("app");

  const $table = document.createElement("table");
  const $tableHead = document.createElement("thead");
  const $tablBody = document.createElement("tbody");

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

  $table.append($tableHead, $tablBody);

  $tableHead.append($tableHeadTr);
  $app.append($table);

  return { $table };
}
createElement();

function createUserTr() {
  const newListData = [...listData];
  for (const oneUser of newListData) {
    oneUser.fio =
      oneUser.name + " " + oneUser.surename + " " + oneUser.lastname;
    oneUser.yearBirth = 2022 - oneUser.age;
  }

  //отрисовка
  for (const oneUser of newListData) {
    const $body = document.querySelector("tbody");
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
    $body.append($userTr);
    return { $userTr };
  }
}
createUserTr();
