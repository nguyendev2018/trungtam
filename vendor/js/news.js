// Lấy các phần tử cần sử dụng
const modalVideo = document.querySelector(".modal-video");
const videoElement = modalVideo.querySelector("video");
const closeButton = document.querySelector(
  ".modal-user.modal-video .block-close"
);
const videoItems = document.querySelectorAll(".video-new--item");

// Hàm đóng modal và tắt video
function closeModalVideo() {
  videoElement.pause();
  videoElement.currentTime = 0; // Đặt thời gian phát lại về 0
  overlayBlack.classList.remove("active");
  modalVideo.classList.remove("show");
}

// Hàm mở modal
function openModalVideo() {
  overlayBlack.classList.add("active");
  modalVideo.classList.add("show");
}

// Gán sự kiện cho nút đóng modal
closeButton.addEventListener("click", closeModalVideo);

// Gán sự kiện đóng modal khi nhấp vào lớp phủ
overlayBlack.addEventListener("click", closeModalVideo);

// Gán sự kiện cho từng mục video để mở modal và phát video
videoItems.forEach((videoItem) => {
  videoItem.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định
    const src = videoItem
      .querySelector(".background-clip")
      .getAttribute("data-video");
    videoElement.src = src; // Cập nhật nguồn video
    videoElement.load(); // Nạp lại video với nguồn mới
    openModalVideo(); // Mở modal
  });
});

// Tạo sự kiện dừng phát video sau 30 giây
document.querySelectorAll('.background-clip').forEach(element =>{
  element.addEventListener('timeupdate',function(){
    if (element.currentTime >= 30) {
      element.currentTime = 0; // Quay lại từ đầu
      element.play(); // Phát lại từ đầu
    }
  })
})
