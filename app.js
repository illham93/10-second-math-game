var newQuestion = function() {
    $('#number1').html(_.random(0,12));
    $('#number2').html(_.random(0,12));
}

var newTimer = function() {
    var time = 10;
    $('#timer').html(time);
    setInterval(function () {
        if (time > 0) {
            time--;
            $('#timer').html(time);
        }
    }, 1000);

}

$(document).ready(function() {
    newQuestion();
    newTimer();
    $('#answer').keydown(function() {

    })

})