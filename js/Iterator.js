import {WORLD_HEIGHT, WORLD_WIDTH} from "./size";

export var Iterator = function() {
    var cur = 0;
    var table = document.querySelector('#game_field');
    var elems = document.getElementsByTagName('tr');


    var setRows = function() {
        for(var i = 0; i < WORLD_WIDTH; i++) {
            table.insertAdjacentHTML('beforeend', '<tr></tr>');
            elems[i].id = String(i);
            //console.log(elems[i]);
        }
    }

    var setColumns = function() {
        for(var i = 0; i < WORLD_WIDTH; i++) {
            for (var j = 0; j < WORLD_HEIGHT; j++) {
                elems[i].insertAdjacentHTML('beforeend', '<td></td>');
                var childs = elems[i].childNodes;
                childs[j].id = String(j);
            }
        }
    }
    class Iterator {
        setInit() {
            setRows();
            setColumns();
        }

        getElem(cur_x, cur_y) {
            var childs = elems[cur_x].childNodes;
            return childs[cur_y];
        }
    }

    return new Iterator();
}
