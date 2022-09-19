const burger = document.getElementById('burger')
const cross = document.getElementById('cross')
const menu = document.getElementById('menu')
let menuitem = document.getElementById('menuItems');
function menuShowOrClose() {
    // menu.className = "menuFalse"
    if (menu.className == "menu") {
        menu.className = "menuShow"
    }
    else if (menu.className == "menuShow") {
        menu.className = "menu"
    }
}
function menuClose() {
    if (menu.className == "menuShow") {
        menu.className = "menu"
    }
}
burger.onclick = () => {
    menuShowOrClose()
}
cross.onclick = () => {
    menuShowOrClose()
}
menuitem.onclick = () => {
    menuClose();
}

