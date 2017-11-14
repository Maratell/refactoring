import {WORLD_HEIGHT, WORLD_WIDTH} from "./size";
import {addStyle} from "./addStyle";
import {Iterator} from "./Iterator";

export var WorldPainter = function() {
    addStyle('css/main.css');
    addStyle('css/active.css');
    addStyle('css/init_element_style.css');
    addStyle('css/disactive.css');
    var iter = new Iterator();


    class WorldPainter {
        paintField() {
            iter.setInit();
        }

        indicate(mas) {
            for (var i = 0; i  < WORLD_WIDTH; i++) {
                for (var j = 0; j < WORLD_HEIGHT; j++) {
                    var elem = iter.getElem(i, j);
                    if (mas[i][j].is_live === 1)
                        elem.style.backgroundColor = "#B8860B";
                    else
                        elem.style.backgroundColor = "white";
                }
            }
        }
    }

    return new WorldPainter();
}