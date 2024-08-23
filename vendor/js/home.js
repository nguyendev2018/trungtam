const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];

  setTimeout(function () {
    modal.classList.add("show");
    body.classList.add("no-scroll");
    overlayBlack.classList.add("active");
  }, 1000);

  span.onclick = function () {
    closeModal();
  };
  window.onclick = function (event) {
    if (event.target == overlayBlack) {
      closeModal();
    }
  };

  document.onkeydown = function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
      closeModal();
    }
  };

  function closeModal() {
    modal.classList.remove("show");
    body.classList.remove("no-scroll");
    overlayBlack.classList.remove("active");
  

  }
});