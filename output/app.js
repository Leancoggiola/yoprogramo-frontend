"use strict";
function setActive(e) {
    e.preventDefault();
    const navBarList = document.getElementById("navbar-nav-list");
    const navBarElements = navBarList === null || navBarList === void 0 ? void 0 : navBarList.getElementsByTagName('li');
    if (navBarElements) {
        for (let i = 0; i < navBarElements.length; i++) {
            navBarElements[i].getElementsByTagName('a')[0].classList.remove('active');
        }
        e.srcElement.classList.add("active");
    }
}
function scrollToSection(keyword) {
    var _a;
    (_a = document.getElementById(`section-${keyword}`)) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
}
