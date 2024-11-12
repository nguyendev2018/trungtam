
function addModalDelete() {
    document.querySelector(".popup-delete").classList.add("show");
    document.querySelector(".overlay-black").classList.add("active");
  }
  function removeModalDelete() {
    document.querySelector(".popup-delete").classList.remove("show");
    document.querySelector(".overlay-black").classList.remove("active");
  }
export {addModalDelete,removeModalDelete}