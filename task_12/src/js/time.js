"use strict";

document.addEventListener('DOMContentLoaded', function () {
    var clock = document.getElementsByClassName("time")[0];

    function realTimeclock() {
        var time = new Date();
        var hours = time.getHours().toString();
        var min = time.getMinutes().toString();
        var sec = time.getSeconds().toString();

        if (hours.length < 2) {
            hours = '0' + hours;
        }
        if (min.length < 2) {
            min = '0' + min;
        }

        if (sec.length < 2) {
            sec = '0' + sec;
        }

        var clockString = hours + ' : ' + min + ' : ' + sec;

        clock.textContent = clockString;

    }


    setInterval(realTimeclock, 1000);

});


