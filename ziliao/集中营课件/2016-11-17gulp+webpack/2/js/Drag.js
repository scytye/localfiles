define(function() {

    return function (obj) {
        obj.onmousedown = function(e) {
            var disX = e.clientX - obj.offsetLeft;
            var disY = e.clientY - obj.offsetTop;

            document.onmousemove = function(e) {
                obj.style.left = e.clientX - disX + 'px';
                obj.style.top = e.clientY - disY + 'px';
            }

            document.onmouseup = function() {
                document.onmousemove = null;
            }

            return false;
        }
    }

} );