export function removeForm(idLang) {
  const cancelButton = document.querySelector(
    `.form-lang[data-id="${idLang}"] .btn-cancel`
  ); 
  if (cancelButton) {
    cancelButton.addEventListener("click", (event) => {
      event.preventDefault();
      const formGroup = document.querySelector(
        `.form-lang[data-id="${idLang}"]`
      );
      if (formGroup) {
        formGroup.remove(); // Xóa form hiện tại
      }
    });
  } else {
    console.error("Nút hủy không tìm thấy!");
  }
}
