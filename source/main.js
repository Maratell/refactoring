

import {World} from "../js/world.js"




var wr = new World();
wr.setField(WORLD_WIDTH, WORLD_HEIGHT);
wr.setInitPopulation();
wr.paintField();
wr.start();

import {Starter} from "../js/Starter";
import {WORLD_HEIGHT, WORLD_WIDTH} from "../js/size";
var starter = new Starter();
starter.setInitPopulation(wr.getField());


























