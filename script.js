function gotoTop()
{
    window.scrollTo(0, 0);
}

function showSubmenu() {
    var sub = document.getElementById('submenu');
    console.log(sub.classList);
    sub.classList.toggle('show');
}
