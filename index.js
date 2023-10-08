const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

const handleResize = () => {
    const isSmallScreen = window.innerWidth <= 35 * 16; // Assuming 1rem is equal to 16px

    isSmallScreen
        ? nav.setAttribute("data-visible", "false")
        : nav.setAttribute("data-visible", "true");
};

handleResize();

window.addEventListener("resize", handleResize);

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    const newVisibility = visibility === "false" ? "true" : "false";
    nav.setAttribute("data-visible", newVisibility);

    // Change the background image based on the visibility state
    const newIcon = newVisibility === "true" ? "icon-close.svg" : "icon-hamburger.svg";
    navToggle.style.backgroundImage = `url(/assets/shared/${newIcon})`;
});