import '../modules/education/education.js';
import '../modules/experience/experience.js';
import '../modules/feedback/feedback.js';
import '../modules/header/header.js';
import '../modules/skills/skills.js';
import '../modules/software/software.js';
import '../modules/summary/summary.js';




import {World} from "../js/world.js"
import {NeighborCounter} from "../js/NeighborCounter.js"

var wr = new World();
wr.setField(10, 10);
wr.setInitPopulation();

var counter = new NeighborCounter(wr.getField());
counter.count(3,4);























