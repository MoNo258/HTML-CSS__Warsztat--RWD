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