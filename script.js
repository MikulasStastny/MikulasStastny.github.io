function toggleNavbar(menu_container) {
    menu_container.classList.toggle("change");

    let navbar = document.getElementById("navbar-box");

    if(navbar.className == "navbar") {
        navbar.className = "navbar-expanded"
    }
    else {
        navbar.className = "navbar";
    }
}
