import { displayForm } from "./formDisplay.js";

const blockEXP = document.querySelector(".blockEXP");
let arrayEXP = [];
let idEXP = 0;
let selectedAbility = "";

export function controlAddEXP(blockEXP, arrayEXP, selectedAbility) {
  idEXP++;
  displayForm(blockEXP, idEXP, arrayEXP, selectedAbility);
}
export function initializeFormEXP(){
  document
  .querySelector(".control-addEXP")
  .addEventListener("click", function (e) {
    e.preventDefault();
    controlAddEXP(blockEXP, arrayEXP, selectedAbility);
  });

}
