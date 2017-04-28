var a = require("./content.js");
//console.log(a);

//require("!loader!loader!style!css!./style.css");

var dialog = require('./dialog.js');

document.onclick = function() {
    dialog();
}
