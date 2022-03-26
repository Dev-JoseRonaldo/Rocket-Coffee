let show = true;

const header = document.querySelector(".header");
const headerToggle = document.querySelector(".header-toggle");
const nav = document.querySelector(".navegation");
let imgToggle = document.getElementById('buguer');

imgToggle.addEventListener("click", () => {
  toggleMenu();
})

const toggleMenu = () => {
  header.classList.toggle("on", show);
  headerToggle.classList.toggle("on", show);
  nav.classList.toggle("on", show);
  show = !show;
  if (show) {
    imgToggle.src = '/assets/menu-buguer-open.svg';
    document.body.style.overflow = "initial";

  } else {
    imgToggle.src = '/assets/menu-buguer-close.svg';
    document.body.style.overflow = "hidden";
  }
}