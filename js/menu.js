(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-btn-open"),
    closeMenuBtn: document.querySelector(".header-btn-close"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();