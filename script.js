// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
 
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
 
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
 
// Back-to-top button
const topBtn = document.getElementById("topBtn");
 
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
 
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
 
// Current year
document.getElementById("year").textContent = new Date().getFullYear();
 
// Small welcome effect
window.addEventListener("load", () => {
  console.log("♡ Welcome to your little story website!");
});