export var  resetFocus = function(param) {

    switch (param) {
        case 'paint_field':
            resetPaintField();
            break;

        case 'stop':
            resetStop();
            break;

        case 'start':
            resetStart();
            break;

        case 'init':
            setInintInstance();
            break;
    }
}

var resetPaintField = function() {
    document.getElementById("width").disabled = true;
    document.getElementById("height").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.borderColor = "red";
    document.getElementById("paint").style.borderColor = "white";
    document.getElementById("paint").disabled = true;
    document.getElementById("help").style.opacity = "1";
    document.getElementById("help").style.transition = "5s";
}

var resetStop = function() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").style.borderColor = "white";
    document.getElementById("start").style.borderColor = "red";
}

var resetStart = function() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled  = false;
    document.getElementById("start").style.borderColor = "white";
    document.getElementById("stop").style.borderColor = "red";
}

var setInintInstance = function () {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled  = true;
    document.getElementById("paint").disabled  = false;
    document.getElementById("start").style.borderColor = "white";
    document.getElementById("stop").style.borderColor = "white";
    document.getElementById("paint").style.borderColor = "red";
    document.getElementById("width").disabled = false;
    document.getElementById("height").disabled = false;
}