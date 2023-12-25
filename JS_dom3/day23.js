const button = document.getElementById("btn");
const img = document.querySelector("img");
/*
//button.addEventListener("event", () => {});// diğer gösterim
button.addEventListener("click", function (e) {
  console.log("butona tikladin");
});

function clickHandle(e) {
  console.log("Butona tikladin?");
  console.log(e.getAttribute("id"));
} */

/*button.addEventListener("dblclick", () => {
  console.log("double click olunca calisir");
});

img.style.opacity = 0;
img.addEventListener("load", () => {
  console.log("image yuklendi!");
  img.style.opacity = 1;
});

img.addEventListener("error", function (e) {
  //console.log("resim yuklenirken sorun oldu!"); // görsel linkinde hata varsa gelecek.
  e.target.src = "../no_image.png";
}); */

const input = document.getElementById("name");

input.addEventListener("input", (e) => {
  console.log("bir seyler yaziliyor..", e.target.value);
});

input.addEventListener("blur", (e) => {
  if (e.target.value) {
    e.target.classList.remove("error");
  }
  //console.log("odak kayboldu");
  if (e.target.value == 0) {
    e.target.classList.add("error");
  }
});

const colorInput = document.getElementById("color-picker");

colorInput.addEventListener("input", (e) => {
  //console.log(e.target.value);
  document.body.style.backgroundColor = e.target.value;
});
const saveRulesCheckBox = document.getElementById("save-rules");
console.log(document.querySelector("input[name = stack]").checked);

const form = document.getElementById("form");

const saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", (e) => {
  console.log(
    input.value,
    colorInput.value,
    saveRulesCheckBox.checked,
    form.elements.stack.value
  );
});

const genderSelect = document.getElementById("gender");
genderSelect.addEventListener("change", (e) => {
  //console.log(e.target.value);
  console.log([...e.target.selectedOptions].map((el) => el.value));
});

document.body.addEventListener("keydown", (e) => {
  //console.log(e); // klavyeyi takip eder.
  console.log(e.code, e.key); // bunları bir şeye bastığında işlem yaptıracağımızda kullanabiliriz.
});
