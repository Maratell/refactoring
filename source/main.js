

import {World} from "../js/world.js"
import {Starter} from "../js/Starter";
import {WORLD_HEIGHT, WORLD_WIDTH} from "../js/size";
import {setSize} from "../js/size";
import {RandomMaker} from "../js/RandomMaker";
import {WorldPainter} from "../js/worldPainter";


import {addStyle} from "../js/addStyle";
addStyle('css/form.css');
document.getElementById("start").disabled = true;
document.getElementById("stop").disabled = true;

var firstEntry = true;


var painter = new WorldPainter();

var wr = new World();

var start = function() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("start").style.borderColor = "white";
    document.getElementById("stop").style.borderColor = "red";

    if (firstEntry === true) {
        wr.start();
        firstEntry = false;
    }
}

var stop = function() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").style.borderColor = "white";
    document.getElementById("start").style.borderColor = "red";
}

var func = function() {
    document.getElementById("width").disabled = true;
    document.getElementById("height").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.borderColor = "red";
    document.getElementById("paint").style.borderColor = "white";
    document.getElementById("paint").disabled = true;

    document.getElementById("help").style.opacity = "1";
    document.getElementById("help").style.transition = "5s";
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    setSize(width, height);

    wr.setField(WORLD_WIDTH, WORLD_HEIGHT);
    wr.paintField();

    var checkBox = document.getElementById("checkBox");
    if (checkBox.checked) {
        var randomMaker = new RandomMaker(wr.getField());
        wr.applyGeneration(randomMaker.generate());
    }


    var elements = document.getElementsByTagName("td");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function() {
            var childId = this.id;
            var parentId = this.parentElement.id;
            var mas = wr.getField();

            mas[childId][parentId].is_live = (mas[childId][parentId].is_live === 1) ? 0 : 1;
            wr.applyGeneration(mas);
        }
    }
}

    document.getElementById("paint").onclick = func;
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
































