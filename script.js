function gotoTop()
{
    window.scrollTo(0, 0);
}

function showSubmenu() {
    let sub = document.getElementById('submenu');
    sub.classList.toggle('show');
    console.log(sub.classList);
}

document.ondblclick = function () {
    let sub = document.getElementById('submenu');
    sub.classList.remove('show');
    console.log(sub.classList);
};
 
