const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

const changeTabFocus = (e) => {
    const keyDownLeft = 37;
    const keyDownRight = 39;

    // change the tabindex of current tab to -1
    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);

        if (e.keyCode === keyDownRight) {
            tabFocus++;
            tabFocus >= tabs.length ? (tabFocus = 0) : null;
        }
        // if the left key is pushed, move to the previous tab
        if (e.keyCode === keyDownLeft) {
            tabFocus--;
            tabFocus < 0 ? (tabFocus = tabs.length - 1) : null;
        }
        //if the right key is pushed, move to the next tab on the right:
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
};

const changeTabPanel = (e) => {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);

    hideContent(mainContainer, "picture");
    showContent(mainContainer, [`#${targetImage}`]);
};

const hideContent = (parent, children) => {
    parent
        .querySelectorAll(children)
        .forEach((child) => child.setAttribute("hidden", true));
};

const showContent = (parent, children) => {
    parent.querySelector(children).removeAttribute("hidden");
};

//Event Listeners
tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
});
