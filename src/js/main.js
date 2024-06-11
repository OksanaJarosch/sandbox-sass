import "../scss/main.scss";
import * as bodyScrollLock from "body-scroll-lock";

// mobile menu
const refsMenu = {
    openMenuBtn: document.querySelector(".js-menu-open"),
    closeMenuBtn: document.querySelector(".js-menu-close"),
    overlayMenu: document.querySelector(".js-menu"),
};

const toggleMenu = () => {
    const isMenuOpen = refsMenu.openMenuBtn.getAttribute("aria-expanded") === "true" || false;

    refsMenu.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    refsMenu.overlayMenu.classList.toggle("is-open");

    const scrollLockMethod = isMenuOpen ? "enableBodyScroll" : "disableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
};

refsMenu.openMenuBtn.addEventListener("click", toggleMenu);
refsMenu.closeMenuBtn.addEventListener("click", toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 1200px)").addEventListener("change", evt => {
    if (!evt.matches) return;

    refsMenu.openMenuBtn.setAttribute("aria-expanded", false);
    refsMenu.overlayMenu.classList.remove("is-open");
    bodyScrollLock.enableBodyScroll(document.body);
});