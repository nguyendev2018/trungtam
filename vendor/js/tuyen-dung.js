const tabButtons = document.querySelectorAll(".recruitment-option");
const tabContents = document.querySelectorAll(".recruitment .card-body");
const itemsToShow = 5;
tabContents.forEach((element) => {
  if (element.classList.contains("active")) {
    let loadMoreBtn = element.querySelector(".load-more");
    let currentItem = 3;
    loadMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const itemContent = element.querySelectorAll(".card-item");
      for (let i = currentItem; i < currentItem + 3; i++) {
        itemContent[i].classList.add("show");
      }
      currentItem += 3;
      if (currentItem >= itemContent.length) {
        loadMoreBtn.style.display = "none";
      }
    });
  }
});
tabButtons.forEach((itemTab) => {
  itemTab.addEventListener("click", () => {
    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabButtons.forEach((element) => {
      element.classList.remove("active");
    });
    const nameCard = itemTab.getAttribute("data-id");
    const activeContent = document.getElementById(nameCard);
    activeContent.classList.add("active");
    itemTab.classList.add("active");
    // Handle "Load More" functionality
    let loadMoreBtn = activeContent.querySelector(".load-more");
    let currentItem = 3;
    loadMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const itemContent = activeContent.querySelectorAll(".card-item");
      for (let i = currentItem; i < currentItem + 3; i++) {
        itemContent[i].classList.add("show");
      }
      currentItem += 3;
      if (currentItem >= itemContent.length) {
        loadMoreBtn.style.display = "none";
      }
    });
  });
});
var acc = document.getElementsByClassName("accordion");
        var i;

        for ( i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function(){
                var panel = this.nextElementSibling;
                if (panel.classList.contains('active')){
                  panel.classList.remove("active");
                   this.classList.remove('active')
                }
                else {
                  panel.classList.add("active");
                   this.classList.add('active')
                }
            });
        }