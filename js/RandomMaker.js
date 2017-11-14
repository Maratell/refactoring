import {Starter} from "./Starter";

export var RandomMaker = function(filed) {
    var game_field;
    class RandomMaker {
        constructor(filed) {
            game_field = filed;
        }

        generate() {
            var starter = new Starter();
            starter.setInitPopulation(game_field);
            return game_field;
        }

    }

    return new RandomMaker(filed);
}