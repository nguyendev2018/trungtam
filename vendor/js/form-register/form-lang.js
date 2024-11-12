const blockLang = document.querySelector(".block-lang");
let arrayLang = [];
let idLang = 0; // Biến đếm để tạo ID duy nhất cho mỗi block
let selectedAbility = "";
document.querySelector(".control-addLang").addEventListener("click", (e) => {
  e.preventDefault();
  idLang++;
  const content = `
      <div class="form-group form-lang form-add--content" data-id="${idLang}">
                    <label for="">Thêm ngoại ngữ</label>
                    <select class="form-control select2" name="selectLang" size="1" data-placeholder="Chọn trình độ đào tạo của bạn" style="width: 100%;">
                      <option value="1">Tiếng Đức</option>
                      <option value="2">Tiếng Anh</option>
                      <option value="3">Tiếng Nga</option>
                      <option value="4">Tiếng Hàn</option>
                      <option value="4">Tiếng Nhật</option>
                      <option value="4">Tiếng Trung</option>
                    </select>
                    <div class="form-group form-specialized">
                      <label for="certificate">Nhập chứng chỉ</label>
                      <input type="text" name="certificate" placeholder="Mời bạn nhập chứng chỉ">
                    </div>
                    <div class="form-group">
                      <label for="">Khả năng sử dụng</label>
                    <div class="selectGroup">
                      <div class="selectGroup-item">
                        <input type="radio" name="ability" value="1" class="selectGroup-input">
                        <span class="selectGroup-button ability_1">Tốt</span>
                      </div>
                      <div class="selectGroup-item">
                        <input type="radio" name="ability" value="2" class="selectGroup-input">
                        <span class="selectGroup-button ability_2">Khá</span>
                      </div>
                      <div class="selectGroup-item">
                        <input type="radio" name="ability" value="3" class="selectGroup-input">
                        <span class="selectGroup-button ability_3">Trung Bình</span>
                      </div>
                    </div>
                    </div>
                    <div class="control-button">
                      <button class="btn btn-warning btn-save">Lưu</button>
                      <button class="btn btn-danger btn-cancel">Hủy</button>
                    </div>
                  </div>
    `;
  blockLang.insertAdjacentHTML("beforeend", content);
  addLang();
  // // Hàm để xử lý sự kiện lưu và lấy giá trị

});
function addLang() {
  const saveButton = document.querySelector(
    `.form-lang[data-id="${idLang}"] .btn-save`
  );
  const selectAbilityItem = document.querySelectorAll(".selectGroup-item");
  selectAbilityItem.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      selectAbilityItem.forEach((item) => {
        item.classList.remove("active");
      });
      element.classList.add("active");
      selectedAbility = element.textContent.trim().replace(/"/g, "");
    });
  });

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formGroup = document.querySelector(
      `.form-lang[data-id="${idLang}"]`
    );
    // Lấy phần tử cha của nút lưu (form-group)

    const blockDataId = formGroup.getAttribute("data-id"); // Lấy ID của block
    // Lấy giá trị của select và input
    const selectElement = formGroup.querySelector(
      'select[name="selectLang"]'
    );
    const selectText =
      selectElement.options[selectElement.selectedIndex].textContent;

    const valueInput = formGroup.querySelector(
      'input[name="certificate"]'
    ).value;

    // Đẩy giá trị vào mảng arrayLang nếu chưa tồn tại
    arrayLang.push({
      blockId: blockDataId,
      TrinhDoNN_ID: selectText,
      ChungChi: valueInput,
      KhaNangSuDung: selectedAbility,
    });
    formGroup.style.display = "none";
    displayLang();
  });
}

function displayLang() {

  // Xóa nội dung cũ trước khi thêm nội dung mới
  blockLang.innerHTML = "";

  // Duyệt qua mảng arrayTrinhDo và in ra từng giá trị
  arrayLang.forEach((item) => {
    // Tạo nội dung HTML cho từng item trong mảng
    const result = `
      <ul >
        <li class="item-job" data-id="${item.blockId}">
          <i class="bi bi-card-list"></i>
          <div class="item-job--name">
            <p class="job-title">Trình độ : ${item.TrinhDoNN_ID}</p>
            <p class="job-specialized">Chuyên ngành: ${item.ChungChi}</p>
            <p class="job-specialized">Khả năng sử dụng: ${item.KhaNangSuDung}</p>
          </div>
          <i class='bi bi-pencil-square' title="Sửa thông tin"></i>
          <i class="bi bi-trash3-fill" title="Xóa trình độ ngoại ngữ"></i>
        </li>
      </ul>
    `;

    // Thêm nội dung HTML vào blockLevel
    blockLang.insertAdjacentHTML("beforeend", result);

    // Gọi hàm editLevel khi nhấn vào icon chỉnh sửa
    editLang(item.blockId);
    // deleteLevel(item.blockId);
  });
}
function editLang(blockId) {
  const editButton = document.querySelector(
    `li[data-id="${blockId}"] .bi-pencil-square`
  );

  editButton.addEventListener("click", () => {
    
    // Lấy block cần chỉnh sửa
    const blockToEdit = arrayLang.find((item) => item.blockId == blockId);

    // Tạo form edit và điền giá trị hiện tại
    const editFormHTML = `
        <div class="form-group form-edit" style="width:100%" data-id="${blockId}">
          <label for="">Sửa trình độ ngoại ngữ</label>
          <select class="form-control select2" name="editSelectLang">
            <option value="1" ${
              blockToEdit.TrinhDoNN_ID === "Tiếng Đức" ? "selected" : ""
            }>Tiếng Đức</option>
            <option value="2" ${
              blockToEdit.TrinhDoNN_ID === "Tiếng Anh" ? "selected" : ""
            }>Tiếng Anh</option>
            <option value="3" ${
              blockToEdit.TrinhDoNN_ID === "Tiếng Nga" ? "selected" : ""
            }>Tiếng Nga</option>
            <option value="4" ${
              blockToEdit.TrinhDoNN_ID === "Tiếng Hàn" ? "selected" : ""
            }>Tiếng Hàn</option>
            <option value="5" ${
              blockToEdit.TrinhDoNN_ID === "Tiếng Nhật" ? "selected" : ""
            }>Tiếng Nhật</option>
            <option value="6" ${
              blockToEdit.TrinhDoNN_ID === "Tiếng Trung" ? "selected" : ""
            }>Tiếng Trung</option>
          </select>
            <label for="editCertificate">Chứng chỉ</label>
            <input type="text" name="editCertificate" value="${
              blockToEdit.ChungChi
            }" placeholder="Mời bạn nhập chứng chỉ">
              
              <label for="">Khả năng sử dụng</label>
                    <div class="selectGroup">
                      <div class="selectGroup-item ${
                        blockToEdit.KhaNangSuDung == "Tốt" ? "active" : ""
                      } ">
                        <span class="selectGroup-button ">Tốt</span>
                      </div>
                      <div class="selectGroup-item ${
                        blockToEdit.KhaNangSuDung == "Khá" ? "active" : ""
                      } ">
                        <span class="selectGroup-button ">Khá</span>
                      </div>
                      <div class="selectGroup-item ${
                        blockToEdit.KhaNangSuDung == "Trung Bình"
                          ? "active"
                          : ""
                      } ">
                        <span class="selectGroup-button ">Trung Bình</span>
                      </div>
                    </div>
          </div>

          <div class="control-button">
            <button class="btn btn-warning btn-save-edit">Lưu</button>
            <button class="btn btn-danger btn-cancel-edit">Hủy</button>
          </div>
        </div>
      `;

    // Thay thế block hiện tại bằng form edit
    const blockElement = document.querySelector(`li[data-id="${blockId}"]`);
    console.log(blockElement);

    blockElement.innerHTML = editFormHTML;
      // Bắt sự kiện khi click vào các phần tử trong group "Khả năng sử dụng"
    const abilityItems = blockElement.querySelectorAll(".selectGroup-item");

    abilityItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Xóa lớp 'active' của tất cả các item
        abilityItems.forEach((el) => el.classList.remove("active"));

        // Thêm lớp 'active' cho item được click
        item.classList.add("active");
        
        // Cập nhật giá trị khả năng sử dụng trong mảng
        selectedAbility = item.textContent.trim();
      });
    });
                  
  

    // Bắt sự kiện lưu chỉnh sửa
    const saveEditButton = blockElement.querySelector(".btn-save-edit");
    saveEditButton.addEventListener("click", () => {
      const newSelectElement = blockElement.querySelector(
        'select[name="editSelectLang"]'
      );
      const newSelectedText =
        newSelectElement.options[newSelectElement.selectedIndex].textContent;
      const newSpecialized = blockElement.querySelector(
        'input[name="editCertificate"]'
      ).value;
      // Cập nhật mảng
      blockToEdit.TrinhDoNN_ID = newSelectedText;
      blockToEdit.ChungChi = newSpecialized;
      blockToEdit.KhaNangSuDung = selectedAbility;
      // Cập nhật hiển thị
      displayLang();
    });
  });
}
function addModalDelete() {
  document.querySelector(".popup-delete").classList.add("show");
  document.querySelector(".overlay-black").classList.add("active");
}
function removeModalDelete() {
  document.querySelector(".popup-delete").classList.remove("show");
  document.querySelector(".overlay-black").classList.remove("active");
}
function deleteLang(blockId) {
  const deleteButton = document.querySelector(
    `li[data-id="${blockId}"] .bi-trash3-fill`
  );

  deleteButton.addEventListener("click", () => {
    addModalDelete(); // Hiển thị modal xác nhận xóa

    document.querySelector(".handle-remove").addEventListener("click", function (e) {
      e.preventDefault();
      // Cập nhật arrayLang bằng cách lọc bỏ mục bị xóa
      arrayLang = arrayLang.filter((item) => item.blockId != blockId);

      // Cập nhật giao diện để phản ánh sự thay đổi
      displayLang();
      removeModalDelete(); // Đóng modal xác nhận
    });

    document.querySelectorAll(".handle-back").forEach((element) => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        removeModalDelete(); // Đóng modal nếu người dùng nhấn "Trở lại"
      });
    });
  });
}


