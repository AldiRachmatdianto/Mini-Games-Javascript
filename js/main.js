let hasil = document.getElementById("hasil");
let atas = document.getElementById("atas");
let body = document.getElementById("body");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img = document.getElementById("img");
let question = document.getElementById("question");
let button = document.getElementById("buttons");

button.addEventListener("click", function () {
  button.style.display = "none";
  question.innerHTML = "Mana yang ingin anda pilih?";
  img.style.display = "flex";
});
img1.addEventListener("click", function () {
  img1.style.flex = "-1";
  img2.style.display = "none";
  img3.style.display = "none";
  button.innerHTML = "hooh";
  button.style.display = "flex";
  question.innerHTML = "Yakin Pilih ini Ngab?";

  button.addEventListener("click", function () {
    img1.style.display = "none";
    question.innerHTML = "Lihat Hasilnya?";
    button.innerHTML = "GAS";
    button.style.display = "flex";

    button.addEventListener("click", function () {
      img.style.display = "none";
      button.style.display = "none";
      question.innerHTML = "Anda Memilih: ";
      hasil.innerHTML = "Lawan Anda Memilih: ";
      atas.style.flexDirection = "column";
      question.style.fontSize = "2rem";
      hasil.style.fontSize = "2rem";
      atas.style.justifyContent = "flex-start";
      atas.style.alignItems = "flex-start";
    });
  });
});
