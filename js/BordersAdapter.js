import {WORLD_WIDTH, WORLD_HEIGHT} from "./size.js"

export var BordersAdapter = function() {
    var left_border;  //private
    var right_border; //private
    var top_border;   //private
    var bot_border;   //private

    class BordersAdapter
    {
        setInitBorders(pos_x, pos_y) {
            left_border = pos_x - 1;
            right_border = pos_x + 1;
            top_border = pos_y + 1;
            bot_border = pos_y - 1;
        }

        adapt(pos_x, pos_y) {
            this.setInitBorders(pos_x, pos_y);
            if ((pos_x === 0) && (pos_y === 0)) {
                left_border = 0;
                bot_border = 0;
                //alert("1");
            } else if ((pos_x === 0) && (pos_y === WORLD_HEIGHT - 1)) {
                top_border = WORLD_HEIGHT - 1;
                left_border = 0;
                //alert("2");
            } else if ((pos_x === WORLD_WIDTH - 1) && (pos_y === 0)) {
                right_border = WORLD_WIDTH - 1;
                bot_border = 0;
                //alert("3");
            } else if ((pos_x === WORLD_HEIGHT - 1) && (pos_y === WORLD_WIDTH - 1)) {
                right_border = WORLD_WIDTH - 1;
                top_border = WORLD_HEIGHT - 1;
                //alert("4");
            } else if (pos_x === 0) {
                left_border = 0;
                //alert("5");
            } else if (pos_x === WORLD_WIDTH - 1) {
                right_border = WORLD_WIDTH - 1;
                //alert("6");
            } else if (pos_y === 0) {
                bot_border = 0;
                //alert("7");
            } else if (pos_y === WORLD_HEIGHT - 1) {
                top_border = WORLD_HEIGHT - 1;
                //alert("8");
            }
        }

        getBorders() {
            return {left_border, right_border, top_border, bot_border};
        }
    }

    return new BordersAdapter();
}