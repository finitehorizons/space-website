// const tabList = document.querySelector('[role="tablist"]');
// const tabs = tabList.querySelectorAll('[role="tab"]');

// let tabFocus = 0;

// const changeTabFocus = (e) => {
//     const keyDownLeft = 37;
//     const keyDownRight = 39;

//     // change the tabindex of current tab to -1
//     if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
//         tabs[tabFocus].setAttribute("tabindex", -1);

//         if (e.keyCode === keyDownRight) {
//             tabFocus++;
//             tabFocus >= tabs.length ? (tabFocus = 0) : null;
//         }
//         // if the left key is pushed, move to the previous tab
//         if (e.keyCode === keyDownLeft) {
//             tabFocus--;
//             tabFocus < 0 ? (tabFocus = tabs.length - 1) : null;
//         }
//         //if the right key is pushed, move to the next tab on the right:
//         tabs[tabFocus].setAttribute("tabindex", 0);
//         tabs[tabFocus].focus();
//     }
// };

// const changeTabPanel = (e) => {
//     const targetTab = e.target;
//     const targetPanel = targetTab.getAttribute("aria-controls");
//     const targetImage = targetTab.getAttribute("data-image");

//     const tabContainer = targetTab.parentNode;
//     const mainContainer = tabContainer.parentNode;

//     //Fade out the current tab panel
//     const currentTabPanel = mainContainer.querySelector(
//         '[role="tabpanel"]:not([hidden])'
//     );
//     currentTabPanel.classList.add("fade-out");
//     setTimeout(() => {
//         hideContent(mainContainer, '[role="tabpanel"]');
//         currentTabPanel.classList.remove("fade-out");
//     }, 500);

//     //Fade in target panel
//     setTimeout(() => {
//         tabContainer
//             .querySelector('[aria-selected="true"]')
//             .setAttribute("aria-selected", false);

//         targetTab.setAttribute("aria-selected", true);

//         // hideContent(mainContainer, '[role="tabpanel"]');
//         showContent(mainContainer, [`#${targetPanel}`]);

//         hideContent(mainContainer, "picture");
//         showContent(mainContainer, [`#${targetImage}`]);
//     }, 500);
// };

// const hideContent = (parent, children) => {
//     parent
//         .querySelectorAll(children)
//         .forEach((child) => child.setAttribute("hidden", true));
// };

// const showContent = (parent, children) => {
//     parent.querySelector(children).removeAttribute("hidden");
// };

// //Event Listeners
// tabList.addEventListener("keydown", changeTabFocus);

// tabs.forEach((tab) => {
//     tab.addEventListener("click", changeTabPanel);
// });

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
let tabFocus = 0;

const changeTabFocus = (e) => {
    const keyDownLeft = 37;
    const keyDownRight = 39;

    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);

        if (e.keyCode === keyDownRight) {
            tabFocus++;
            tabFocus >= tabs.length ? (tabFocus = 0) : null;
        }

        if (e.keyCode === keyDownLeft) {
            tabFocus--;
            tabFocus < 0 ? (tabFocus = tabs.length - 1) : null;
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
};

const fadeIn = (element, duration) => {
    let opacity = 0;

    const animate = () => {
        if (opacity < 1) {
            opacity += 0.01; // Adjust the increment value if needed
            element.style.opacity = opacity;
            element.style.transition = `opacity ${duration}ms ease`;
            requestAnimationFrame(animate);
        }
    };

    animate();
};

const fadeOut = (element, duration) => {
    let opacity = 1;

    const animate = () => {
        if (opacity >= 0) {
            opacity -= 0.01; // Adjust the increment value if needed
            element.style.opacity = opacity;
            element.style.transition = `opacity ${duration}ms ease`;
            requestAnimationFrame(animate);
        }
    };

    animate();
};
const changeTabPanel = (e) => {
    const targetTab = e.target;
    const targetPanelId = targetTab.getAttribute("aria-controls");
    const targetImageId = targetTab.getAttribute("data-image");

    // Remove aria-selected attribute from all tabs
    tabs.forEach((tab) => tab.setAttribute("aria-selected", "false"));

    // Set aria-selected attribute to true for the clicked tab
    targetTab.setAttribute("aria-selected", "true");

    // Hide all tab panels and images
    document.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
        fadeOut(panel, 250);
        panel.setAttribute("hidden", true);
    });

    document.querySelectorAll("picture").forEach((picture) => {
        fadeOut(picture, 250);
        picture.setAttribute("hidden", true);
    });

    // Show the target panel and image
    const targetPanel = document.getElementById(targetPanelId);
    targetPanel.removeAttribute("hidden");
    fadeIn(targetPanel);

    const targetImage = document.getElementById(targetImageId);
    targetImage.removeAttribute("hidden");
    fadeIn(targetImage);
};

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
});
