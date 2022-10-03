// check if an element is in viewport
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    let isVisible = elemTop < window.innerHeight && elemBottom >= 10;
    return isVisible;
}

const items = document.querySelectorAll(".component")
function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isScrolledIntoView(items[i])) {
            items[i].classList.add("active");
        }
        else {
            items[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", callbackFunc)

const navbarToggler = document.querySelector(".navbar-toggler")
const navbar = document.querySelector(".navigation-container");
const navbarCollapse = document.querySelector(".navbar-collapse")
const navBackground = () => {
    if (window.scrollY > 200) {
        navbar.classList.add("nav-background");
    }
    else {
        navbar.classList.remove("nav-background");
    }
}

navbarToggler.addEventListener("click", () => {
    navbar.classList.toggle("toggle-background");
})



window.addEventListener("scroll", navBackground);