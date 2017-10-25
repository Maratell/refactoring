import {WORLD_WIDTH, WORLD_HEIGHT} from "./size.js"




export class NeighborCounter {
    constructor(field) {
        this.field = field;
    }

    count(pos_x, pos_y) {
        var field = this.field;
        var count = 0;
            for (var i = pos_x - 1; i <= pos_x + 1; i++) {
                for (var j = pos_y - 1; j <= pos_y + 1; j++) {
                    var obj = field[i][j];
                    if ((i === pos_x) && (j === pos_y)) continue;
                    if (obj.is_live === 1) count++;
                }
            }
            field[pos_x][pos_y].neighbor_count = count;
    }
}