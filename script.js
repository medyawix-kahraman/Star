const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

menuBtn.addEventListener("click", () => {
  if(nav.style.display === "flex"){
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "80px";
    nav.style.left = "0";
    nav.style.width = "100%";
    nav.style.background = "#050505";
    nav.style.padding = "25px";
    nav.style.gap = "20px";
    nav.style.textAlign = "center";
  }
});