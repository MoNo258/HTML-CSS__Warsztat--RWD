import {test, test2} from "./test";

console.log('test')

document.addEventListener("DOMContentLoaded", function() {

    test();
    test2();

});


// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
//  JS script to add sticky class to header when page is scrolled
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 150) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    })

});

// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
//  JS script to add show class to menu-list
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV



document.addEventListener('DOMContentLoaded', function() {

    const btn = document.querySelector(".page-nav-burger");
    const menu = document.querySelector(".menu__list");

    btn.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

});