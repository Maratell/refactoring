
import {World} from "../js/world.js"
import {WORLD_HEIGHT, WORLD_WIDTH} from "../js/size";
import {setSize} from "../js/size";
import {RandomMaker} from "../js/RandomMaker";
import {WorldPainter} from "../js/worldPainter";
import {addStyle} from "../js/addStyle";
import {resetFocus} from "../js/resetFocus";
import {Controller} from "../js/Controller";

addStyle('css/form.css');
resetFocus("init");

export var painter = new WorldPainter();
export var wr = new World();
export var firstEntry = true;


var start = function() {
    resetFocus("start");

    if (firstEntry === true) {
        var startTimer = function() {
            if (document.getElementById("stop").disabled === false) {
                wr.update();
                painter.update(wr.getField());
            }
        }
        var time = setInterval(startTimer, 1000);
        firstEntry = false;
    }

}

var stop = function() {
    resetFocus("stop");
}

var paintField = function() {
    resetFocus("paint_field");
    setSize(document.getElementById("width").value, document.getElementById("height").value);

    wr.setField(WORLD_WIDTH, WORLD_HEIGHT);
    painter.paintField();

    var checkBox = document.getElementById("checkBox");
    if (checkBox.checked) {
        var randomMaker = new RandomMaker(wr.getField());
        wr.applyGeneration(randomMaker.generate());
        painter.update(wr.getField());
    }

    var controller = new Controller(wr, painter);
    controller.listen(); //to listen the activation of elements
}

var refresh = function () {
    resetFocus("init");
    painter.removeField();
}


document.getElementById("paint").onclick    = paintField;
document.getElementById("start").onclick    = start;
document.getElementById("stop").onclick     = stop;
document.getElementById("refresh").onclick  = refresh;



































