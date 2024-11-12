import { displayForm } from "./formDisplay.js";

const blockLang = document.querySelector(".block-lang");
let arrayLang = [];
let idLang = 0; // Biến đếm để tạo ID duy nhất cho mỗi block
let selectedAbility = "";

export function controlAddLang(blockLang, arrayLang, selectedAbility) {
  idLang++;
  displayForm(blockLang, idLang, arrayLang, selectedAbility);
}
document
  .querySelector(".control-addLang")
  .addEventListener("click", function (e) {
    e.preventDefault();
    controlAddLang(blockLang, arrayLang, selectedAbility);
  });
