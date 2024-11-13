
function addModalDelete(blockName) {
    blockName.querySelector(".popup-delete").classList.add("show");
    document.querySelector(".overlay-black").classList.add("active");
  }
  function removeModalDelete(blockName) {
    blockName.querySelector(".popup-delete").classList.remove("show");
    document.querySelector(".overlay-black").classList.remove("active");
  }
export {addModalDelete,removeModalDelete}