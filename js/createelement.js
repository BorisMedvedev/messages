export function createElement() {
  const $app = document.getElementById("app");

  const $table = document.createElement("table");
  const $tableHead = document.createElement("thead");

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

  $tableHead.append($tableHeadTr);
  $app.append($table);

  return $table;
}
