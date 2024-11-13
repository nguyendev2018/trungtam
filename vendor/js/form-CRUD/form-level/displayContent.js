import { editLevel } from "./editLevel.js";
import { deleteLevel } from "./deleteLevel.js";
export function displayContentLevel(
  idLevel,
  blockLevel,
  arrayLevel,
  selectedAbility
) {
  console.log("blockLevel", blockLevel);

  let displayContainer = blockLevel.querySelector(".display-container");
  if (!displayContainer) {
    displayContainer = document.createElement("div");
    displayContainer.classList.add("display-container");
    blockLevel.appendChild(displayContainer);
  }
  displayContainer.innerHTML = "";
  // Duyệt qua arrayLang và hiển thị từng mục
  arrayLevel.forEach((item) => {
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
            <div class="item-job--icon">
              <i class='bi bi-pencil-square' title="Sửa thông tin"></i>
              <i class="bi bi-trash3-fill" title="Xóa trình độ chuyên môn"></i>
            </div>
          </li>
        </ul>
      `;

    // Thêm nội dung HTML vào blockLevel
    displayContainer.insertAdjacentHTML("beforeend", result);

    // Gọi hàm editLevel khi nhấn vào icon chỉnh sửa
    editLevel(item.blockId, blockLevel, arrayLevel, selectedAbility);
    deleteLevel(item.blockId, blockLevel, arrayLevel, selectedAbility);
  });
}
