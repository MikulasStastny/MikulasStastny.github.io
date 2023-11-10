function toggleNavbar(menu_container) {
    menu_container.classList.toggle("change");

    let navbar = document.getElementById("navbar-box");
    let links = document.getElementById("links")

    if(navbar.className == "navbar") {
        navbar.className = "navbar-expanded";
        setTimeout(() => { links.style.display = "flex"; }, 100);
    }
    else {
        navbar.className = "navbar";
        setTimeout(() => { links.style.display = "none"; }, 50);
    }
}
