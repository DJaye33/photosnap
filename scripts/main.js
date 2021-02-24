const menuOpen = document.querySelector(".navbar__menu-open");
const menuClose = document.querySelector(".navbar__menu-close");
const navigation = document.querySelector(".navbar__navigation");

menuOpen.addEventListener("click", (evt) => {
  evt.target.style.display = "none";
  menuClose.style.display = "block";
  navigation.style.display = "flex";
});

menuClose.addEventListener("click", (evt) => {
  evt.target.style.display = "none";
  menuOpen.style.display = "block";
  navigation.style.display = "none";
});
