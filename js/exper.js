export var timer = function() {
    var delay = 10,
        i = 0,
        startTimer = function() {
            if (i < 10) {
                console.log('time:' + i);

            } else {
                clearInterval(time);
            }
            i++;
        }

    var time = setInterval(startTimer, delay);

}