const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    const newVisibility = visibility === "false" ? "true" : "false";
    nav.setAttribute("data-visible", newVisibility);

    // Change the background image based on the visibility state
    const newIcon =
        newVisibility === "true" ? "icon-close.svg" : "icon-hamburger.svg";
    navToggle.style.backgroundImage = `url(/assets/shared/${newIcon})`;
});

