import {Piece} from "./object.js"
import {WorldPainter} from "./worldPainter";
import {Configurator} from "./Configurator";
import {Starter} from "./Starter";


export var World = function() {
    var mas = new Array();  //private
    var configurator = new Configurator(mas);  //private

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
        }

        getField() {
            return mas;
        }

        applyGeneration(game_field) {
            mas = game_field;
        }

        update() {
            configurator.update();  //update mas
        }
    }

    return new World();
}

