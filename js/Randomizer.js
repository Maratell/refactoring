export var Randomizer = function () {
    var storage = new Array();
    class Randomizer {
        generate(min, max, lenhth) {
            storage = [];
            while(lenhth > 0) {
                var number = Math.floor(Math.random() * (max - min + 1)) + min;

                if (storage.indexOf(number) === -1) {
                    storage.push(number);
                    lenhth--;
                }
            }

            return storage;
        }
    }

    return new Randomizer();
}