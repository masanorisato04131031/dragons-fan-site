const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {

img.addEventListener("click", () => {

modal.style.display = "flex";
modalImg.src = img.src;

});

});

closeBtn.onclick = () => {

modal.style.display = "none";

};

modal.onclick = () => {

modal.style.display = "none";

};
