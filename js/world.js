import {Piece} from "./object.js"

var mas = new Array();


export class World {
        setField(width, height) {
            for (var i = 0; i < width; i++){
                mas[i] = new Array();
                for (var j = 0; j < height; j++){
                    mas[i][j] = Object.create(Piece);
                }
            }
        }

        setInitPopulation() {
            (mas[2][4]).is_live = 1;
            (mas[3][4]).is_live = 1;
            (mas[4][4]).is_live = 1;
        }

        getField () {
                return mas;
        }
}


