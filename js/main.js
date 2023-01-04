import { createForm } from "./createform.js";
import { createElement } from "./createelement.js";
import { createUserTr } from "./createusertr.js";
//база данных
let listData = [
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
createUserTr(listData);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("gggggg");
});
