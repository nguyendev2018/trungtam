import { editLang } from "./editLang.js";
import { deleteLang } from './deleteLang.js';

export function displayContentLang(blockId, blockLang, arrayLang, selectedAbility) {
  let displayContainer = blockLang.querySelector(".display-container");
  if (!displayContainer) {
    displayContainer = document.createElement("div");
    displayContainer.classList.add("display-container");
    blockLang.appendChild(displayContainer);
  }
  displayContainer.innerHTML = "";

  // Duyệt qua arrayLang và hiển thị từng mục
  arrayLang.forEach((item) => {
    const result = `
      <ul>
        <li class="item-job" data-id="${item.blockId}">
          <i class="bi bi-card-list"></i>
          <div class="item-job--name">
            <p class="job-title">Trình độ : ${item.TrinhDoNN_ID}</p>
            <p class="job-specialized">Chuyên ngành: ${item.ChungChi}</p>
            <p class="job-specialized">Khả năng sử dụng: ${item.KhaNangSuDung}</p>
          </div>
          <div class="item-job--icon">
            <i class='bi bi-pencil-square' title="Sửa thông tin"></i>
            <i class="bi bi-trash3-fill" title="Xóa trình độ ngoại ngữ"></i>
          </div>
        </li>
      </ul>
    `;

    displayContainer.insertAdjacentHTML("beforeend", result);

    // Gọi hàm edit và delete sau khi đã thêm phần tử mới
    editLang(item.blockId, blockLang, arrayLang, selectedAbility);
    deleteLang(item.blockId, blockLang, arrayLang, selectedAbility);
  });
}
