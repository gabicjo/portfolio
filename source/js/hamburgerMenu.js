const hamburgerMenu = document.querySelector("#header-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  if (nav.classList.contains("exibir")) {
    nav.classList.remove("exibir");
  } else {
    nav.classList.add("exibir");
  }
});
