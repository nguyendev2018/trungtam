
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url =
  proxyUrl +
  "https://vieclambinhduong.vn/Content/Upload/News_Img/d3fd3e2a-23e2-43ab-a5dd-1a9b2328ca0e.pdf";

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

let scale = 1;
const canvas = document.getElementById("pdf-render"),
  ctx = canvas.getContext("2d");

const pdfContainer = document.getElementById("pdf-container");
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

const renderPage = (num) => {
  pageIsRendering = true;

  pdfDoc.getPage(num).then((page) => {
    const viewport = page.getViewport({ scale: 2 }); // Tăng scale để hình ảnh nét hơn

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderCtx = {
      canvasContext: ctx,
      viewport,
    };

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    document.getElementById("page-input").value = num;
  });
};

const queueRenderPage = (num) => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};

const zoomIn = () => {
  if (scale < 3) {
    scale += 0.2;
    canvas.style.transform = `scale(${scale})`;
  }
};

const zoomOut = () => {
  if (scale > 0.5) {
    scale -= 0.2;
    canvas.style.transform = `scale(${scale})`;
  }
};

const goToPage = () => {
  const pageNumInput = parseInt(
    document.getElementById("page-input").value
  );
  if (pageNumInput >= 1 && pageNumInput <= pdfDoc.numPages) {
    pageNum = pageNumInput;
    queueRenderPage(pageNum);
  } else {
    alert("Invalid page number");
  }
};

const downloadPDF = () => {
  const a = document.createElement("a");
  a.href = url;
  a.download = "downloaded-pdf.pdf";
  a.click();
};

pdfContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  pdfContainer.classList.add("dragging");
  startX = e.pageX - pdfContainer.offsetLeft;
  startY = e.pageY - pdfContainer.offsetTop;
  scrollLeft = pdfContainer.scrollLeft;
  scrollTop = pdfContainer.scrollTop;
});

pdfContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - pdfContainer.offsetLeft;
  const y = e.pageY - pdfContainer.offsetTop;
  const walkX = (x - startX) * 1.5;
  const walkY = (y - startY) * 1.5;
  pdfContainer.scrollLeft = scrollLeft - walkX;
  pdfContainer.scrollTop = scrollTop - walkY;
});

pdfContainer.addEventListener("mouseup", () => {
  isDragging = false;
  pdfContainer.classList.remove("dragging");
});

pdfContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  pdfContainer.classList.remove("dragging");
});

// Thêm sự kiện cảm ứng
pdfContainer.addEventListener("touchstart", (e) => {
  isDragging = true;
  pdfContainer.classList.add("dragging");
  startX = e.touches[0].pageX - pdfContainer.offsetLeft;
  startY = e.touches[0].pageY - pdfContainer.offsetTop;
  scrollLeft = pdfContainer.scrollLeft;
  scrollTop = pdfContainer.scrollTop;
});

pdfContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].pageX - pdfContainer.offsetLeft;
  const y = e.touches[0].pageY - pdfContainer.offsetTop;
  const walkX = (x - startX) * 1.5;
  const walkY = (y - startY) * 1.5;
  pdfContainer.scrollLeft = scrollLeft - walkX;
  pdfContainer.scrollTop = scrollTop - walkY;
});

pdfContainer.addEventListener("touchend", () => {
  isDragging = false;
  pdfContainer.classList.remove("dragging");
});

pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
  pdfDoc = pdfDoc_;

  document.getElementById("page-count").textContent = pdfDoc.numPages;

  renderPage(pageNum);
});

document
  .getElementById("prev-page")
  .addEventListener("click", showPrevPage);
document
  .getElementById("next-page")
  .addEventListener("click", showNextPage);
document.getElementById("zoom-in").addEventListener("click", zoomIn);
document.getElementById("zoom-out").addEventListener("click", zoomOut);
document.getElementById("page-input").addEventListener("change", goToPage);
document
  .getElementById("download-pdf")
  .addEventListener("click", downloadPDF);
