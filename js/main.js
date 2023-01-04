import { createForm } from "./createform.js";
import { createElement } from "./createelement.js";
import { createUserTr } from "./createusertr.js";
//база данных
export let listData = [
  {
    name: "Борис",
    surename: "Николаевич",
    lastname: "Медведев",
    age: 44,
    hobby: "верстка",
  },
];

const form = createForm();
createElement();
createUserTr();

form.$form.addEventListener("submit", (e) => {
  e.preventDefault();

  listData.push({
    name: form.$inputname.value,
    surename: form.$inputsurename.value,
    lastname: form.$inputlastname.value,
    age: form.$inputage.value,
    hobby: form.$inputhobby.value,
  });
  form.$form.reset();
  createUserTr();
});
