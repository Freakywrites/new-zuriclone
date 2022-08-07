//Get the modal element
const modal = document.getElementById("simpleModal");
//Get open modal button
const modalBtn = document.getElementById("modalBtn");

//Get close button
const closeBtn = document.getElementsByClassName("closeBtn")[0];

//listen for open click

modalBtn.addEventListener("click", openModal);

//listen for close click
closeBtn.addEventListener("click", closeModal);

//listen for outside click
window.addEventListener("click", outsideClick);

// function to open modal

function openModal() {
  modal.style.display = "block";
}

// function to close modal

function closeModal() {
  modal.style.display = "none";
}

// function to close modal if outside click

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

//second

//Get the modal element
const modal2 = document.getElementById("simpleModal2");
//Get open modal button
const modalBtn2 = document.getElementById("modalBtn2");

//Get close button
const closeBtn2 = document.getElementsByClassName("closeBtn2")[0];

//listen for open click

modalBtn2.addEventListener("click", openModal3);

//listen for close click
closeBtn2.addEventListener("click", closeModal3);

//listen for outside click
window.addEventListener("click", outsideClick3);

// function to open modal

function openModal3() {
  modal2.style.display = "block";
}

// function to close modal

function closeModal3() {
  modal2.style.display = "none";
}

// function to close modal if outside click

function outsideClick3(e) {
  if (e.target == modal2) {
    modal2.style.display = "none";
  }
}

//third

//Get the modal element
const modal3 = document.getElementById("simpleModal3");
//Get open modal button
const modalBtn3 = document.getElementById("modalBtn3");

//Get close button
const closeBtn3 = document.getElementsByClassName("closeBtn3")[0];

//listen for open click

modalBtn3.addEventListener("click", openModal2);

//listen for close click
closeBtn3.addEventListener("click", closeModal2);

//listen for outside click
window.addEventListener("click", outsideClick2);

// function to open modal

function openModal2() {
  modal3.style.display = "block";
}

// function to close modal

function closeModal2() {
  modal3.style.display = "none";
}

// function to close modal if outside click

function outsideClick2(e) {
  if (e.target == modal3) {
    modal3.style.display = "none";
  }
}
