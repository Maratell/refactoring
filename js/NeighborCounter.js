import {BordersAdapter} from "./BordersAdapter";



export var NeighborCounter = function(field) {
    var game_field; //private
    var adapter = new BordersAdapter(); //private


    class NeighborCounter {
        constructor(field) {
            game_field = field;
        }

        count(pos_x, pos_y) {
            var count = 0;
            adapter.adapt(pos_x, pos_y);
            var borders = adapter.getBorders();
            //alert([borders.left_border, borders.right_border, borders.bot_border, borders.top_border]);

            for (var i = borders.left_border; i <= borders.right_border; i++) {
                for (var j = borders.bot_border; j <= borders.top_border; j++) {
                    var obj = game_field[i][j];

                    if ((i === pos_x) && (j === pos_y)) continue;
                    if (obj.is_live === 1) count++;
                }
            }
            game_field[pos_x][pos_y].neighbor_count = count;  //result

        }
    }

    return new NeighborCounter(field);
}