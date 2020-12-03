var countDownDate = new Date('Nov 18, 2020 23:00:00').getTime();

function update() {
    var e = (new Date).getTime(),
        t = countDownDate - e,
        n = Math.floor(t / 86400000),
        o = Math.floor(t % 86400000 / 3600000),
        a = Math.floor(t % 3600000 / 60000),
        r = Math.floor(t % 60000 / 1000);
    document.getElementById('timer').innerHTML = (n >= 10 ? n : '0' + n) + ' д ' + (o >= 10 ? o : '0' + o) + ' ч ' + (a >= 10 ? a : '0' + a) + ' : ' + (r >= 10 ? r : '0' + r);
    if (t < 0) {
        document.getElementById('timer').innerHTML = 'Время вышло';
    }
}

update(), setInterval(function() {
    update()
}, 1000);