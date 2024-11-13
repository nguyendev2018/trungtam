import { displayForm } from "./formDisplay.js";

const blockIT = document.querySelector(".blockIT");
let arrayIT = [];
let idIT = 0; // Biến đếm để tạo ID duy nhất cho mỗi block
let selectedAbility = "";

export function controlAddIT(blockIT, arrayIT, selectedAbility) {
  idIT++;
  displayForm(blockIT, idIT, arrayIT, selectedAbility);
}
export function initializeFormIT() {
  document
    .querySelector(".control-addIT")
    .addEventListener("click", function (e) {
      e.preventDefault();
      controlAddIT(blockIT, arrayIT, selectedAbility);
    });
}
