var newQuestion = function() {
    switch (_.random(0,3)) {
        case 0:
            var number1 = _.random(0,12);
            var number2 = _.random(0,12);
            var answer = number1 + number2;
            $('#operator').html(' + ');      
            break;  
        case 1:
            var number1 = _.random(0,12);
            var number2 = _.random(0,12);
            var answer = number1 * number2;
            $('#operator').html(' x ');
            break;
        case 2:
            var answer = _.random(0,12);
            var number2 = _.random(0,12);
            var number1 = number2 + answer;
            $('#operator').html(' - ');
            break;
        case 3:
            var answer = _.random(0,12);
            var number2 = _.random(1,12);
            var number1 = number2 * answer;
            $('#operator').html(' ÷ ');
            break;
    }

    $('#number1').html(number1);
    $('#number2').html(number2);
    $('#equals').html(' = ?');
    return answer;
}


$(document).ready(function() {

    // Initialize and display the high score
    var highScore = 0;
    var timer;
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

        clearInterval(timer);
        // Start the countdown
        timer = setInterval(function () {
            if (time > 0) {
                time--;
                $('#timer').html(time);
            } else {
                clearInterval(timer);
                alert('Game over!');
                if (score > highScore) {
                    highScore = score;
                    $('#highScore').html(highScore);
                }
                $('#answerBox').prop('disabled', true);
            }
        }, 1000);

        var plusOne;
        // These things happen if the user enters the right answer
        $('#answerBox').keyup(function() {

            if ($('#answerBox').val() == answer) {
                console.log('correct');
                time++;
                score++;
                $('#score').html(score);
                $('#answerBox').val('');
                answer = newQuestion();
                $('#plusOne').html('+1');
                clearTimeout(plusOne);
                plusOne = setTimeout(function () {
                    $('#plusOne').html('');
                }, 1000);

            }
        });
    });

});