$(".form-select").select2();
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});
//jquery địa chỉ thường trú 
var citisHN = document.getElementById("city");
var districtsHN = document.getElementById("district");
var wardsHN = document.getElementById("ward");

var provinceTT = document.getElementById("provinceTT");
var districtTT = document.getElementById("districtTT");
var wardTT = document.getElementById("wardTT");

var Parameter = {
  url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
  method: "GET",
  responseType: "application/json",
};

// Promise cho Địa chỉ hiện nay
axios(Parameter).then(function (result) {
  renderCityForHN(result.data);
});

// Promise cho Địa chỉ thường trú
axios(Parameter).then(function (result) {
  renderCityForTT(result.data);
});

// Hàm xử lý cho Địa chỉ hiện nay
function renderCityForHN(data) {
  for (const x of data) {
    citisHN.options[citisHN.options.length] = new Option(x.Name, x.Id);
  }
  
  citisHN.onchange = function () {
    districtsHN.length = 1;
    wardsHN.length = 1;
    if (this.value != "") {
      const result = data.filter((n) => n.Id === this.value);

      for (const k of result[0].Districts) {
        districtsHN.options[districtsHN.options.length] = new Option(k.Name, k.Id);
      }
    }
  };

  districtsHN.onchange = function () {
    wardsHN.length = 1;
    const dataCity = data.filter((n) => n.Id === citisHN.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(
        (n) => n.Id === this.value
      )[0].Wards;

      for (const w of dataWards) {
        wardsHN.options[wardsHN.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}

// Hàm xử lý cho Địa chỉ thường trú
function renderCityForTT(data) {
  for (const x of data) {
    provinceTT.options[provinceTT.options.length] = new Option(x.Name, x.Id);
  }

  provinceTT.onchange = function () {
    districtTT.length = 1;
    wardTT.length = 1;
    if (this.value != "") {
      const result = data.filter((n) => n.Id === this.value);

      for (const k of result[0].Districts) {
        districtTT.options[districtTT.options.length] = new Option(k.Name, k.Id);
      }
    }
  };

  districtTT.onchange = function () {
    wardTT.length = 1;
    const dataCity = data.filter((n) => n.Id === provinceTT.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(
        (n) => n.Id === this.value
      )[0].Wards;

      for (const w of dataWards) {
        wardTT.options[wardTT.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}
// Hàm Kỹ năng mềm
const itemSoft = document.querySelectorAll('.block-soft .item');
itemSoft.forEach(element => {
  element.addEventListener('click',function(e) {
    element.classList.toggle('active');
  })
});
// Hàm đăng ký dịch vụ
const itemService = document.querySelectorAll('.block-service .item');
itemService.forEach(element =>{
  element.addEventListener('click',function(e) {
    element.classList.toggle('active');
  })
})