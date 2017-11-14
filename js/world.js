import {Piece} from "./object.js"
import {WorldPainter} from "./worldPainter";
import {Configurator} from "./Configurator";
import {Starter} from "./Starter";


export var World = function() {
    var mas = new Array();  //private
    var painter = new WorldPainter();

    class World {
        setField(width, height) {
            for (var i = 0; i < width; i++) {
                mas[i] = new Array();
                for (var j = 0; j < height; j++) {
                    mas[i][j] = Object.create(Piece);
                }
            }
        }

        setInitPopulation() {
            var starter = new Starter();
            starter.setInitPopulation(mas);
            //painter.indicate(mas);
        }

        getField() {
            return mas;
        }

        applyGeneration(game_field) {
            mas = game_field;
            painter.indicate(mas);
        }

        paintField() {
            painter.paintField();
            //painter.indicate(mas);
        }

        start() {
            var configurator = new Configurator(mas);

            var startTimer = function() {
                if (document.getElementById("stop").disabled === false) {
                    configurator.update();  //update mas
                    painter.indicate(mas);
                }
            }

            var time = setInterval(startTimer, 1000);
        }
    }

    return new World();
}

