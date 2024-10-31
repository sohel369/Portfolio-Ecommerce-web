let header = document.getElementById("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("activeScroll", window.scrollY > 0)
});
let body = document.querySelector(".banner");
window.addEventListener("scroll", function () {
    body.classList.toggle("activeY", window.scrollY > 1400)
});
window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    header.classList.toggle("longscroll", window.scrollY > 3000)
})

let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
let clox = document.querySelector(".close");

function myMenu() {
    navbar.classList.toggle("newNav");
};

// when window scroll navbar close
window.onscroll = () => {
    navbar.classList.remove("newNav")
}
// xmark/cros icon when clicked navbar display none
function clapp() {
    navbar.classList.remove('newNav')
}
// when search_btn clicked navbar display none
function searchs() {
    navbar.classList.remove("newNav")
}