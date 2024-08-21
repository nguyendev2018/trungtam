const barsMenu = document.querySelector(".navbar-toggle");
const menuMobile = document.querySelector(".navbar-menu")
const body = document.querySelector("body");
const overlayBlack = document.querySelector(".overlay-black");
const menuHeader = document.querySelector(".header-bottom");
const videoList = document.querySelectorAll(".video-small");
const iframe = document.querySelector(".video iframe");
const scrollUp = document.querySelector(".scroll-up");
const buttonsMore = document.querySelectorAll(".card-body--more");
const viewsMore = document.querySelectorAll(".card-body--list.view-more")
const btnFilter  = document.querySelectorAll("#btn-filter");
const tabButtons = document.querySelectorAll('.recruitment-option');
const tabContents = document.querySelectorAll('.recruitment .card-body');
barsMenu.addEventListener("click", () => {
  barsMenu.classList.toggle("active");
  menuMobile.classList.toggle("show");
});


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

function closeMenuMobile() {
  body.classList.remove("no-scroll");
  barsMenu.classList.remove("active");
  menuMobile.classList.remove("show");
}
buttonsMore.forEach((btnMore, index) => {
  btnMore.addEventListener("click", () => {
    viewsMore[index].classList.toggle("show");
    btnMore.classList.toggle("show");
  });
});
// scroll header
document.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    menuHeader.classList.add("header-bottom__scrollY");
    scrollUp.classList.add('active')
   
  } else {
    menuHeader.classList.remove("header-bottom__scrollY");
    scrollUp.classList.remove('active')
  }
});
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


  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Hide all tab contents
      tabContents.forEach(content => content.style.display = 'none');

      // Remove 'active' class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));

      // Show the clicked tab content and add 'active' class
      const nameCard = button.getAttribute('data-id');
      document.getElementById(nameCard).style.display = 'block';
      button.classList.add('active');
    });
  });
   // JavaScript để xử lý load item
   let items = document.querySelectorAll('.recruitment .card-item');
   let loadMoreBtn = document.getElementById('loadMoreBtn');
   let currentIndex = 0;
   const itemsPerPage = 5;

   function loadItems() {
       for (let i = currentIndex; i < currentIndex + itemsPerPage && i < items.length; i++) {
           items[i].style.display = 'list-item';
       }
       currentIndex += itemsPerPage;

       // Ẩn nút "Load More" nếu đã load hết item
       if (currentIndex >= items.length) {
           loadMoreBtn.style.display = 'none';
       }
   }

   // Load 5 item đầu tiên khi trang load
   loadItems();

   // Khi nhấn nút "Load More" thì load thêm item
   loadMoreBtn.addEventListener('click', loadItems);