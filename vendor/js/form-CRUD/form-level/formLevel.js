import { displayForm } from "./formDisplay.js";

const blockLevel = document.querySelector(".block-level");
let arrayLevel = [];
let idLevel = 0; // Biến đếm để tạo ID duy nhất cho mỗi block
let selectedAbility = "";

export function controlAddLevel(blockLevel, arrayLevel, selectedAbility) {
  idLevel++;
  displayForm(blockLevel, idLevel, arrayLevel, selectedAbility);
}
export function initializeFormLevel() {
  document
  .querySelector(".control-addLevel")
  .addEventListener("click", function (e) {
    e.preventDefault();
    controlAddLevel(blockLevel, arrayLevel, selectedAbility);
  });
}

