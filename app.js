var newQuestion = function() {
    var number1 = _.random(0,12);
    var number2 = _.random(0,12);
    var answer = number1 + number2;
    $('#number1').html(number1);
    $('#operator').html('+');
    $('#number2').html(number2);
    return answer;
}


$(document).ready(function() {

    // Initialize and display the high score
    var highScore = 0;
    $('#highScore').html(highScore);

    $('#newGame').click(function() {
        // Initialize and display the variables
        var score = 0;
        var answer = newQuestion();
        var time = 10;
        $('#answerBox').prop('disabled', false);
        $('#answerBox').val('');
        $('#timer').html(time);
        $('#score').html(score);

        // Start the countdown
        var timer = setInterval(function () {
            if (time > 0) {
                time--;
                $('#timer').html(time);
            } else {
                clearTimeout(timer);
                alert('Game over!');
                if (score > highScore) {
                    highScore = score;
                    $('#highScore').html(highScore);
                }
                $('#answerBox').prop('disabled', true);
            }
        }, 1000);

        // These things happen if the user enters the right answer
        $('#answerBox').keyup(function() {
            console.log(answer);
            if ($('#answerBox').val() == answer) {
                console.log('correct');
                time++;
                score++;
                $('#score').html(score);
                $('#answerBox').val('');
                answer = newQuestion();
            }
        });
    });

});