const scrollupButton = document.querySelector(".scrollup");

scrollupButton.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollupButton.style.display = "block";
  } else {
    scrollupButton.style.display = "none";
  }
});
