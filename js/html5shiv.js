var divs = document.querySelectorAll('.info span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.top = y;
        divs[i].style.left = x;
    }
};