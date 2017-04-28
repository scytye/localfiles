
require("!style!css!./dialog.css");

module.exports = function() {
    var box = document.createElement('box');
    box.className = 'box';
    document.body.appendChild(box);

    box.style.left = (window.innerWidth - box.offsetWidth) / 2 + 'px';
    box.style.top = (window.innerHeight - box.offsetHeight) / 2 + 'px';

}