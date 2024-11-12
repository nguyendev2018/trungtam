import { editIT } from "./editIT.js";
import { deleteIT } from './deleteIT.js';

export function displayContentIT(blockId, blockIT, arrayIT, selectedAbility) {
  let displayContainer = blockIT.querySelector(".display-container");
  if (!displayContainer) {
    displayContainer = document.createElement("div");
    displayContainer.classList.add("display-container");
    blockIT.appendChild(displayContainer);
  }
  displayContainer.innerHTML = "";

  // Duyệt qua arrayIT và hiển thị từng mục
  arrayIT.forEach((item) => {
    const result = `
      <ul >
        <li class="item-job" data-id="${item.blockId}">
          <i class="bi bi-card-list"></i>
          <div class="item-job--name">
            <p class="job-title">Trình độ : ${item.TrinhDoTH_ID}</p>
            <p class="job-specialized">Khả năng sử dụng: ${item.KhaNangSuDung}</p>
          </div>
          <i class='bi bi-pencil-square' title="Sửa thông tin"></i>
          <i class="bi bi-trash3-fill" title="Xóa trình độ ngoại ngữ"></i>
        </li>
      </ul>
    `;

    displayContainer.insertAdjacentHTML("beforeend", result);

    // Gọi hàm edit và delete sau khi đã thêm phần tử mới
    editIT(item.blockId, blockIT, arrayIT, selectedAbility);
    deleteIT(item.blockId, blockIT, arrayIT, selectedAbility);
  });
}
