# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of Contents

- [Overview](#overview)
    - [Challenge](#challenge)
 - [Screenshots](#screenshots)
  - [Links](#links)
- [How I Solved It](#how-i-solved-it)
  - [Technology used](#Technology)
  - [Takeaways](#takeaways)
- [Author](#author)

## Overview

### Challenge

Allow users to:

- View an optimal layout based on their screen size(responsive)
- See animations and hover states for all interactive elements
- View each page and toggle between tabs to view new information
- Skip-to-content button on main page

### Screenshot

//////

### Links

- Solution : [Click Here](https://www.frontendmentor.io/solutions/space-tourism-challenge-1yO5qyg1Zx)
- Live Site : [Click Here](https://subtle-pudding-ba32ad.netlify.app/)

### Technology 

- Semantic HTML
- CSS
- Javascript

### Takeaways

- How to assign key presses to specific actions on the page

```js
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
```

- How to debug basic errors such as 

***Uncaught TypeError: Cannot read properties of null (reading 'classList')***

***Uncaught TypeError: Cannot set properties of null (setting 'onclick')***

## Author

- Portfolio - [Click Me]()
- Github - [@finitehorizons](https://github.com/finitehorizons)
- LinkedIn - [@finitehorizons](https://www.linkedin.com/in/finitehorizons/)



