const barsMenu = document.querySelector(".navbar-toggle");
const menuMobile = document.querySelector(".navbar-menu")
const body = document.querySelector("body");
const overlayBlack = document.querySelector(".overlay-black");
const menuHeader = document.querySelector(".header-bottom");
const videoList = document.querySelectorAll(".video-small");
const iframe = document.querySelector(".video iframe");
const scrollUp = document.querySelector(".scroll-up");
const btnFilter  = document.querySelectorAll("#btn-filter");

barsMenu.addEventListener("click", () => {
  barsMenu.classList.toggle("active");
  menuMobile.classList.toggle("show");
});



function closeMenuMobile() {
  body.classList.remove("no-scroll");
  barsMenu.classList.remove("active");
  menuMobile.classList.remove("show");
}
document.querySelectorAll(".card-body--more").forEach((btnMore, index) => {
  btnMore.addEventListener("click", () => {
    document.querySelectorAll(".card-body--list.view-more")[index].classList.toggle("show");
    btnMore.classList.toggle("show");
  });
});

// document.querySelector('.modal-login').addEventListener("")
// scroll header
// document.addEventListener("scroll", () => {
//   if (window.scrollY > 400) {
//     menuHeader.classList.add("header-bottom__scrollY");
//     scrollUp.classList.add('active')
   
//   } else {
//     menuHeader.classList.remove("header-bottom__scrollY");
//     scrollUp.classList.remove('active')
//   }
// });
videoList.forEach(video => {
  
  video.onclick = () =>{
    videoList.forEach(vid => {
      vid.classList.remove('show');
    });
    video.classList.add('show');
    if(video.classList.contains('show')){
      let src = `https://www.youtube.com/embed/${video.children[0].children[1].getAttribute('data-item')}?si=3Ez0x-ZeRH9Fvr4D`;
      iframe.src = src;
    }
  }
});
$(document).ready(function () {
  $("select.select2").each(function () {
    let elm = "";
    if (typeof $(this).data("wrapper") !== "undefined") {
      elm = $(this).parent();
    }
    $(this).select2({
      templateResult: function (data, container) {
        if (data.element) {
          $(container).addClass($(data.element).attr("class"));
        }
        return data.text;
      },
      dropdownParent: elm,
      minimumResultsForSearch: 10,
    });
  });

  const btnFilter = document.querySelectorAll("#btn-filter");

btnFilter.forEach(element => {    
    element.addEventListener("click", function () {
      document.querySelector("#collapse-btn").classList.toggle("active"); // toggle collapse
    });
});
});   