export function createForm() {
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
