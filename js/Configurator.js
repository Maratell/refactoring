import {WORLD_HEIGHT, WORLD_WIDTH} from "./size";
import {NeighborCounter} from "./NeighborCounter";

export var Configurator = function(field) {
    var game_field;
    var counter;
    class Configurator {
        constructor(field) {
            game_field = field;
            counter = new NeighborCounter(field);
        }

        update() {

            for(var i = 0; i < WORLD_WIDTH; i++) {
                for(var j = 0; j < WORLD_HEIGHT; j++)
                {
                    var p = game_field[i][j];
                    counter.count(i, j);

                    if (p.is_live === 0) {
                        if(p.neighbor_count === 3) {
                            game_field[i][j].is_live = 1;
                        }
                    } else {
                        if((p.neighbor_count < 2) || (p.neighbor_count > 3)) {
                            game_field[i][j].is_live = 0;
                        }
                    }
                }
            }
        }
    }

    return new Configurator(field);
}