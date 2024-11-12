import {
  editEXP
} from "./editEXP.js";
// import { deleteIT } from './deleteIT.js';

export function displayContentEXP(
  blockId,
  blockEXP,
  arrayEXP,
  selectedAbility
) {
  let displayContainer = blockEXP.querySelector(".display-container");
  if (!displayContainer) {
      displayContainer = document.createElement("div");
      displayContainer.classList.add("display-container");
      blockEXP.appendChild(displayContainer);
  }
  displayContainer.innerHTML = "";

  arrayEXP.forEach((item) => {
      const result = `
    <ul>
      <li class="item-job" data-id="${item.blockId}">
      <div class="item-content">
       <div class="item-job--month">
              <span class="">${item.TongThang}</span>
          </div>  
        <div class="item-job--name">
          <p class="job-title">${item.TenCongTy}</p>
          <p class="job-title">${item.ChucVu}</p>
          </div>
        <i class="bi bi-chevron-down click-moreDesc" data-id="desc-exp" title="Xem thêm"></i>
        <i class='bi bi-pencil-square' title="Sửa thông tin"></i>
        </div>
        </div>
        <div id="desc-exp">
          <h2> Mô tả công việc:</h2> 
          <div class="block-descEXP">
            ${item.CongViecChinh}
          </div>
          <p class="job-title">Đã làm việc tại nước : ${item.DaLamViecNuocNgoai}</p>

        </div>
      </li>
    </ul>
  `;

      displayContainer.insertAdjacentHTML("beforeend", result);
      const jobElement = document.querySelector(
          `.blockEXP .item-job[data-id="${item.blockId}"]`
      );
      jobElement
          .querySelector(".click-moreDesc")
          .addEventListener("click", function(e) {
              this.classList.toggle("active");
              const getID = jobElement.querySelector("#desc-exp");
              if (this.classList.contains("active")) {
                  getID.classList.add("active");
              } else {
                  getID.classList.remove("active");
              }
          });
      // // Gọi hàm edit và delete sau khi đã thêm phần tử mới
      editEXP(item.blockId, blockEXP, arrayEXP, selectedAbility);
      // deleteIT(item.blockId, blockIT, arrayIT, selectedAbility);
  });
}