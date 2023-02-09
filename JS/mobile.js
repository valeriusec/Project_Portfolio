let nav = document.getElementById('nav');
let navBar = document.getElementById('nav_burger');
let mobileNav = document.getElementById('mobile_nav');
let navBurger = document.getElementById('nav_burger_icon');
let navExit = document.getElementById('nav_exit_icon');

let reset = () => {
    mobileNav.style.display = 'none';
    navBurger.style.display = 'block';
    navExit.style.display = 'none';
    navBar.style.borderBottom = '';
    nav.style.height = '';
}

let mobileNavDisplay = () => {
    mobileNav.style.display = 'block';
    navBurger.style.display = 'none';
    navExit.style.display = 'block';
    navBar.style.borderBottom = '1px solid var(--main-color)';
    
    nav.style.height = '100vh';
}

navBurger.onclick = mobileNavDisplay;
navExit.onclick = reset;
document.body.onhashchange = reset;