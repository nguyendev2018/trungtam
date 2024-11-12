const blockLevel = document.querySelector(".block-level");
let arrayTrinhDo = [];
let blockId = 0; // Biến đếm để tạo ID duy nhất cho mỗi block

document.querySelector(".control-addLevel").addEventListener("click", (e) => {
  e.preventDefault();

  // Tạo ID duy nhất cho block mới
  blockId++;

  // Tạo nội dung HTML cho phần tử mới
  const content = `
      <div class="form-group form-level form-add--content" style="width: 100%;" data-id="${blockId}">
        <label for="">Thêm trình độ</label>
        <select class="form-control select2" name="selectLevel" size="1" data-placeholder="Chọn trình độ đào tạo của bạn" style="width: 100%;">
          <option value="1">Chưa qua đào tạo</option>
          <option value="2">Sơ cấp, không bằng</option>
          <option value="3">Sơ cấp</option>
          <option value="4">Trung cấp</option>
          <option value="5">Cao đẳng</option>
          <option value="6">Đại học</option>
        </select>
        <div class="form-group form-specialized">
          <label for="specialized">Chuyên ngành</label>
          <input type="text" name="specialized" placeholder="Mời bạn nhập chuyên ngành">
        </div>
        <div class="control-button">
          <button class="btn btn-warning btn-save">Lưu</button>
          <button class="btn btn-danger btn-cancel">Hủy</button>
        </div>
      </div>
    `;

  // Thêm phần tử mới vào blockLevel
  blockLevel.insertAdjacentHTML("beforeend", content);

  // Thêm sự kiện cho nút hủy trong form mới
  addLevel();
  removeForm(blockId);

  // Tìm <select> vừa được thêm và <div> cần ẩn/hiện
  const newSelect = blockLevel.querySelector(
    `[data-id="${blockId}"] select[name="selectLevel"]`
  );
  const specializedDiv = blockLevel.querySelector(
    `[data-id="${blockId}"] .form-specialized`
  );

  // Thêm sự kiện change cho <select>
  newSelect.addEventListener("change", function () {
    if (this.value == "1") {
      specializedDiv.style.display = "none"; // Ẩn div chuyên ngành nếu chọn option 1
    } else {
      specializedDiv.style.display = "flex"; // Hiện div chuyên ngành nếu chọn option khác
    }
  });

  // Gọi sự kiện change ngay lập tức để kiểm tra và đặt trạng thái ban đầu
  newSelect.dispatchEvent(new Event("change"));
});

function removeForm(blockId) {
  const cancelButton = document.querySelector(
    `.form-level[data-id="${blockId}"] .btn-cancel`
  );
  if (cancelButton) {
    cancelButton.addEventListener("click", (event) => {
      event.preventDefault();
      const formGroup = document.querySelector(
        `.form-level[data-id="${blockId}"]`
      );
      if (formGroup) {
        formGroup.remove(); // Xóa form hiện tại
      }
    });
  } else {
    console.error("Nút hủy không tìm thấy!");
  }
}

// Hàm để xử lý sự kiện lưu và lấy giá trị
function addLevel() {
  const saveButton = document.querySelector(
    `.form-level[data-id="${blockId}"] .btn-save`
  );

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formGroup = document.querySelector(
      `.form-level[data-id="${blockId}"]`
    );
    // Lấy phần tử cha của nút lưu (form-group)

    const blockDataId = formGroup.getAttribute("data-id"); // Lấy ID của block

    // Lấy giá trị của select và input
    const selectElement = formGroup.querySelector('select[name="selectLevel"]');
    const selectText =
      selectElement.options[selectElement.selectedIndex].textContent;
    const valueInput = formGroup.querySelector(
      'input[name="specialized"]'
    ).value;

    // Đẩy giá trị vào mảng arrayTrinhDo nếu chưa tồn tại
    arrayTrinhDo.push({
      blockId: blockDataId,
      TrinhDoCMKT_ID: selectText,
      ChuyenNganh: valueInput,
    });
    console.log(arrayTrinhDo); // In ra mảng để kiểm tra
    formGroup.style.display = "none";
    displayLevels();
  });
}

// Hàm hiển thị danh sách các trình độ đã lưu
function displayLevels() {

  // Xóa nội dung cũ trước khi thêm nội dung mới
  blockLevel.innerHTML = "";

  // Duyệt qua mảng arrayTrinhDo và in ra từng giá trị
  arrayTrinhDo.forEach((item) => {
    const untrained =
      item.TrinhDoCMKT_ID.toLowerCase() !== "chưa qua đào tạo"
        ? `<p class="job-specialized">Chuyên ngành: ${item.ChuyenNganh}</p>`
        : "";

    // Tạo nội dung HTML cho từng item trong mảng
    const result = `
        <ul >
          <li class="item-job" data-id="${item.blockId}">
            <i class="bi bi-card-list"></i>
            <div class="item-job--name">
              <p class="job-title">Trình độ : ${item.TrinhDoCMKT_ID}</p>
              ${untrained}
            </div>
            <i class='bi bi-pencil-square' title="Sửa thông tin"></i>
            <i class="bi bi-trash3-fill" title="Xóa trình độ chuyên môn"></i>
          </li>
        </ul>
      `;

    // Thêm nội dung HTML vào blockLevel
    blockLevel.insertAdjacentHTML("beforeend", result);

    // Gọi hàm editLevel khi nhấn vào icon chỉnh sửa
    editLevel(item.blockId);
    deleteLevel(item.blockId);
  });
}

// Hàm xử lý chỉnh sửa thông tin
function editLevel(blockId) {
  const editButton = document.querySelector(
    `li[data-id="${blockId}"] .bi-pencil-square`
  );

  editButton.addEventListener("click", () => {
    // Lấy block cần chỉnh sửa
    const blockToEdit = arrayTrinhDo.find((item) => item.blockId == blockId);

    // Tạo form edit và điền giá trị hiện tại
    const editFormHTML = `
        <div class="form-group form-edit" style="width:100%" data-id="${blockId}">
          <label for="">Sửa trình độ</label>
          <select class="form-control select2" name="editSelectLevel" style="width: 100%;">
            <option value="1" ${
              blockToEdit.TrinhDoCMKT_ID === "Chưa qua đào tạo"
                ? "selected"
                : ""
            }>Chưa qua đào tạo</option>
            <option value="2" ${
              blockToEdit.TrinhDoCMKT_ID === "Sơ cấp, không bằng"
                ? "selected"
                : ""
            }>Sơ cấp, không bằng</option>
            <option value="3" ${
              blockToEdit.TrinhDoCMKT_ID === "Sơ cấp" ? "selected" : ""
            }>Sơ cấp</option>
            <option value="4" ${
              blockToEdit.TrinhDoCMKT_ID === "Trung cấp" ? "selected" : ""
            }>Trung cấp</option>
            <option value="5" ${
              blockToEdit.TrinhDoCMKT_ID === "Cao đẳng" ? "selected" : ""
            }>Cao đẳng</option>
            <option value="6" ${
              blockToEdit.TrinhDoCMKT_ID === "Đại học" ? "selected" : ""
            }>Đại học</option>
          </select>
          <div class="form-group form-specialized" style="${
            blockToEdit.TrinhDoCMKT_ID === "Chưa qua đào tạo"
              ? "display: none;"
              : ""
          }">
            <label for="editSpecialized">Chuyên ngành</label>
            <input type="text" name="editSpecialized" value="${
              blockToEdit.ChuyenNganh
            }" placeholder="Mời bạn nhập chuyên ngành">
          </div>
          <div class="control-button">
            <button class="btn btn-warning btn-save-edit">Lưu</button>
            <button class="btn btn-danger btn-cancel-edit">Hủy</button>
          </div>
        </div>
      `;

    // Thay thế block hiện tại bằng form edit
    const blockElement = document.querySelector(`li[data-id="${blockId}"]`);
    blockElement.innerHTML = editFormHTML;

    // Bắt sự kiện cho phần tử select
    const selectLevel = blockElement.querySelector(
      'select[name="editSelectLevel"]'
    );
    const specializedDiv = blockElement.querySelector(".form-specialized");

    // Hàm kiểm tra và ẩn/hiện input chuyên ngành
    const toggleSpecializedInput = () => {
      if (selectLevel.value === "1") {
        specializedDiv.style.display = "none"; // Ẩn nếu chọn "Chưa qua đào tạo"
      } else {
        specializedDiv.style.display = ""; // Hiện nếu không chọn "Chưa qua đào tạo"
      }
    };

    // Gọi hàm để kiểm tra giá trị ban đầu
    toggleSpecializedInput();

    // Thêm sự kiện change cho select
    selectLevel.addEventListener("change", toggleSpecializedInput);

    // Bắt sự kiện lưu chỉnh sửa
    const saveEditButton = blockElement.querySelector(".btn-save-edit");
    saveEditButton.addEventListener("click", () => {
      const newSelectElement = blockElement.querySelector(
        'select[name="editSelectLevel"]'
      );
      const newSelectedText =
        newSelectElement.options[newSelectElement.selectedIndex].textContent;
      const newSpecialized = blockElement.querySelector(
        'input[name="editSpecialized"]'
      ).value;

      // Cập nhật mảng
      blockToEdit.TrinhDoCMKT_ID = newSelectedText;
      blockToEdit.ChuyenNganh = newSpecialized;

      // Cập nhật hiển thị
      displayLevels();
    });

    // Bắt sự kiện hủy chỉnh sửa
    const cancelEditButton = blockElement.querySelector(".btn-cancel-edit");
    cancelEditButton.addEventListener("click", () => {
      // Cập nhật hiển thị lại thông tin ban đầu (trước khi chỉnh sửa)
      displayLevels();
    });
  });
}

function deleteLevel(blockId) {

  const deleteButton = document.querySelector(
    `li[data-id="${blockId}"] .bi-trash3-fill`
  );

  deleteButton.addEventListener("click", () => {
    // Hiển thị thông báo xác nhận trước khi xóa
    addModalDelete();
    document
      .querySelector(".handle-remove")
      .addEventListener("click", function (e) {
        e.preventDefault();
        arrayTrinhDo = arrayTrinhDo.filter((item) => item.blockId != blockId);
        displayLevels();
        removeModalDelete();
      });
    document.querySelectorAll(".handle-back").forEach((element) => {
      element.addEventListener("click", function(e){
        e.preventDefault();
        removeModalDelete()
      });
    });
    // }
  });
}

////
