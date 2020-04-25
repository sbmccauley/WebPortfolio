function updateTimer(deadline) { // will update the time
    var time =  deadline - new Date();
    console.log(time);
    return { //objects key value pairs
        'days': Math.floor(time/(1000*60*60*24)),
        'hours': Math.floor((time/(1000*60*60))%24), //modulus 24 indicates number of remaining hours left
        'minutes':  Math.floor((time/1000/60)%60),
        'seconds':  Math.floor((time/1000)%60),
        'total':    time
    };
}

//add/remove the turn class to whatever span tag is changing
function animateClock(span) {
    span.className = 'turn';
    setTimeout(function(){
        span.className = "";
    }, 700);
}

function startTimer(id, deadline) {
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);
    clock.innerHTML =   '<span>' + timer.days + '</span>' +
                        '<span>' + timer.hours + '</span>' +
                        '<span>' + timer.minutes + '</span>' +
                        '<span>' + timer.seconds + '</span>';
    var spans = clock.getElementsByTagName('span');
    //console.log(spans);
    animateClock(spans[3]);
        if(timer.seconds == 59) animateClock(spans[2]);
        if(timer.minutes == 59 && timer.seconds == 59) animateClock([1]);
        if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock([0]);

    //specify when countdown reached its target
    console.log(timer.total);
    if(timer.total < 1) {
        clearInterval(timerInterval);
        clock.innerHTML = '<span>0</span> <span>0</span> <span>0</span> <span>0</span>'
    }
  }, 1000); //1000 means it will fire every second
    
};


window.onload = function() {
    var deadline = new Date('December 18, 2020 00:00:00');
    startTimer('clock', deadline);
}