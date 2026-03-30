const hamburgerMenu = document.querySelector("#header-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("exibir");
  });
