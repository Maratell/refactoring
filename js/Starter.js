import {Randomizer} from "./Randomizer";
import {WORLD_HEIGHT, WORLD_WIDTH} from "./size";

export var Starter = function() {
    var randomizer = new Randomizer();
    class Starter {
        setInitPopulation(mas) {
            for (var j = 0; j < WORLD_HEIGHT; j++) {
                var vector_of_numbers = randomizer.generate(0, WORLD_WIDTH - 1, Math.floor(WORLD_WIDTH / 2 ));
                vector_of_numbers.forEach(function (item, i, arr) {
                    //console.log(item);
                    mas[item][j].is_live = 1;
                });
            }
        }
    }

    return new Starter();
}