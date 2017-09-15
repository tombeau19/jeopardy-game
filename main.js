$(document).ready(function () {

    $('.newGame').click(function () {
        location.reload();
    });

    let score = 0;

    //BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL

    //BASEBALL HUNDRED
    $('.baseballHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.b100').modal();
    });

    $('.yesBaseball1').on('click', function () {
        alert('Correct!')
        score += 100
        $('.scoreUpdate').html(score);
    });

    $('.noBaseball1').on('click', function () {
        alert('Incorrect')
        score -= 100;
        $('.scoreUpdate').html(score);
    });

    //BASEBALL TWO HUNDRED
    $('.baseballTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.b200').modal();
    });

    $('.yesBaseball2').on('click', function () {
        alert('Correct!')
        score += 200;
        $('.scoreUpdate').html(score);
    });

    $('.noBaseball2').on('click', function () {
        alert('Incorrect')
        score -= 200;
        $('.scoreUpdate').html(score);
    });

    //BASEBALL THREE HUNDRED
    $('.baseballThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.b300').modal();
    });

    $('.yesBaseball3').on('click', function () {
        alert('Correct!')
        score += 300;
        $('.scoreUpdate').html(score);
    });

    $('.noBaseball3').on('click', function () {
        alert('Incorrect')
        score -= 300
        $('.scoreUpdate').html(score);
    });

    //BASEBALL FOUR HUNDRED
    $('.baseballFourHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.b400').modal();
    });

    $('.yesBaseball4').on('click', function () {
        alert('Correct!')
        score += 400;
        $('.scoreUpdate').html(score);
    });

    $('.noBaseball4').on('click', function () {
        alert('Incorrect')
        score -= 400;
        $('.scoreUpdate').html(score);
    });

    //BASEBALL FIVE HUNDRED
    $('.baseballFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.b500').modal();
    });

    $('.yesBaseball5').on('click', function () {
        alert('Correct!')
        score += 500;
        $('.scoreUpdate').html(score);
    });

    $('.noBaseball5').on('click', function () {
        alert('Incorrect')
        score -= 500;
        $('.scoreUpdate').html(score);
    });


    //SOCCER SOCCER SOCCER SOCCER SOCCER SOCCER SOCCER SOCCER SOCCER SOCCER SOCCER SOCCER

    //SOCCER HUNDRED
    $('.soccerHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.s100').modal();
    });

    $('.yesSoccer1').on('click', function () {
        alert('Correct!')
        score += 100
        $('.scoreUpdate').html(score);
    });

    $('.noSoccer1').on('click', function () {
        alert('Incorrect')
        score -= 100;
        $('.scoreUpdate').html(score);
    });

    //SOCCER TWO HUNDRED
    $('.soccerTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.s200').modal();
    });

    $('.yesSoccer2').on('click', function () {
        alert('Correct!')
        score += 200;
        $('.scoreUpdate').html(score);
    });

    $('.noSoccer2').on('click', function () {
        alert('Incorrect')
        score -= 200;
        $('.scoreUpdate').html(score);
    });

    //SOCCER THREE HUNDRED
    $('.soccerThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.s300').modal();
    });

    $('.yesSoccer3').on('click', function () {
        alert('Correct!')
        score += 300;
        $('.scoreUpdate').html(score);
    });

    $('.noSoccer3').on('click', function () {
        alert('Incorrect')
        score -= 300
        $('.scoreUpdate').html(score);
    });

    //SOCCER FOUR HUNDRED
    $('.soccerFourHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.s400').modal();
    });

    $('.yesSoccer4').on('click', function () {
        alert('Correct!')
        score += 400;
        $('.scoreUpdate').html(score);
    });

    $('.noSoccer4').on('click', function () {
        alert('Incorrect')
        score -= 400;
        $('.scoreUpdate').html(score);
    });

    //SOCCER FIVE HUNDRED
    $('.soccerFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.s500').modal();
    });

    $('.yesSoccer5').on('click', function () {
        alert('Correct!')
        score += 500;
        $('.scoreUpdate').html(score);
    });

    $('.noSoccer5').on('click', function () {
        alert('Incorrect')
        score -= 500;
        $('.scoreUpdate').html(score);
    });


    //SKIING SKIING SKIING SKIING SKIING SKIING SKIING SKIING SKIING SKIING SKIING SKIING SKIING

    //SKIiNG HUNDRED
    $('.skiingHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.sk100').modal();
    });

    $('.yesSkiing1').on('click', function () {
        alert('Correct!')
        score += 100
        $('.scoreUpdate').html(score);
    });

    $('.noSkiing1').on('click', function () {
        alert('Incorrect')
        score -= 100;
        $('.scoreUpdate').html(score);
    });

    //SKIING TWO HUNDRED
    $('.skiingTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.sk200').modal();
    });

    $('.yesSkiing2').on('click', function () {
        alert('Correct!')
        score += 200;
        $('.scoreUpdate').html(score);
    });

    $('.noSkiing2').on('click', function () {
        alert('Incorrect')
        score -= 200;
        $('.scoreUpdate').html(score);
    });

    //SKIING THREE HUNDRED
    $('.skiingThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.sk300').modal();
    });

    $('.yesSkiing3').on('click', function () {
        alert('Correct!')
        score += 300;
        $('.scoreUpdate').html(score);
    });

    $('.noSkiing3').on('click', function () {
        alert('Incorrect')
        score -= 300
        $('.scoreUpdate').html(score);
    });

    //SKIING FOUR HUNDRED
    $('.skiingFourHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.sk400').modal();
    });

    $('.yesSkiing4').on('click', function () {
        alert('Correct!')
        score += 400;
        $('.scoreUpdate').html(score);
    });

    $('.noSkiing4').on('click', function () {
        alert('Incorrect')
        score -= 400;
        $('.scoreUpdate').html(score);
    });

    //SKIING FIVE HUNDRED
    $('.skiingFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.sk500').modal();
    });

    $('.yesSkiing5').on('click', function () {
        alert('Correct!')
        score += 500;
        $('.scoreUpdate').html(score);
    });

    $('.noSkiing5').on('click', function () {
        alert('Incorrect')
        score -= 500;
        $('.scoreUpdate').html(score);
    });


    //HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY HOCKEY

    //HOCKEY HUNDRED
    $('.hockeyHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.h100').modal();
    });

    $('.yesHockey1').on('click', function () {
        alert('Correct!')
        score += 100
        $('.scoreUpdate').html(score);
    });

    $('.noHockey1').on('click', function () {
        alert('Incorrect')
        score -= 100;
        $('.scoreUpdate').html(score);
    });

    //HOCKEY TWO HUNDRED
    $('.hockeyTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.h200').modal();
    });

    $('.yesHockey2').on('click', function () {
        alert('Correct!')
        score += 200;
        $('.scoreUpdate').html(score);
    });

    $('.noHockey2').on('click', function () {
        alert('Incorrect')
        score -= 200;
        $('.scoreUpdate').html(score);
    });

    //HOCKEY THREE HUNDRED
    $('.hockeyThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.h300').modal();
    });

    $('.yesHockey3').on('click', function () {
        alert('Correct!')
        score += 300;
        $('.scoreUpdate').html(score);
    });

    $('.noHockey3').on('click', function () {
        alert('Incorrect')
        score -= 300
        $('.scoreUpdate').html(score);
    });

    //HOCKEY FOUR HUNDRED
    $('.hockeyFourHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.h400').modal();
    });

    $('.yesHockey4').on('click', function () {
        alert('Correct!')
        score += 400;
        $('.scoreUpdate').html(score);
    });

    $('.noHockey4').on('click', function () {
        alert('Incorrect')
        score -= 400;
        $('.scoreUpdate').html(score);
    });

    //HOCKEY FIVE HUNDRED
    $('.hockeyFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.h500').modal();
    });

    $('.yesHockey5').on('click', function () {
        alert('Correct!')
        score += 500;
        $('.scoreUpdate').html(score);
    });

    $('.noHockey5').on('click', function () {
        alert('Incorrect')
        score -= 500;
        $('.scoreUpdate').html(score);
    });

    
    //FOOTBALL FOOTBALL FOOTBALL FOOTBALL FOOTBALL FOOTBALL FOOTBALL FOOTBALL FOOTBALL FOOTBALL FOOTBALL

    //FOOTBALL HUNDRED
    $('.footballHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.f100').modal();
    });

    $('.yesFootball1').on('click', function () {
        alert('Correct!')
        score += 100
        $('.scoreUpdate').html(score);
    });

    $('.noFootball1').on('click', function () {
        alert('Incorrect')
        score -= 100;
        $('.scoreUpdate').html(score);
    });

    //FOOTBALL TWO HUNDRED
    $('.footballTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.f200').modal();
    });

    $('.yesFootball2').on('click', function () {
        alert('Correct!')
        score += 200;
        $('.scoreUpdate').html(score);
    });

    $('.noFootball2').on('click', function () {
        alert('Incorrect')
        score -= 200;
        $('.scoreUpdate').html(score);
    });

    //FOOTBALL THREE HUNDRED
    $('.footballThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.f300').modal();
    });

    $('.yesFootball3').on('click', function () {
        alert('Correct!')
        score += 300;
        $('.scoreUpdate').html(score);
    });

    $('.noFootball3').on('click', function () {
        alert('Incorrect')
        score -= 300
        $('.scoreUpdate').html(score);
    });

    //FOOTBALL FOUR HUNDRED
    $('.footballFourHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.f400').modal();
    });

    $('.yesFootball4').on('click', function () {
        alert('Correct!')
        score += 400;
        $('.scoreUpdate').html(score);
    });

    $('.noFootball4').on('click', function () {
        alert('Incorrect')
        score -= 400;
        $('.scoreUpdate').html(score);
    });

    //FOOTBALL FIVE HUNDRED
    $('.footballFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.f500').modal();
    });

    $('.yesFootball5').on('click', function () {
        alert('Correct!')
        score += 500;
        $('.scoreUpdate').html(score);
    });

    $('.noFootball5').on('click', function () {
        alert('Incorrect')
        score -= 500;
        $('.scoreUpdate').html(score);
    });

    //FINAL FINAL FINAL FINAL FINAL FINAL FINAL FINAL FINAL FINAL FINAL
    $('.finalIntro').on('click', function () {
        $(this).addClass('disabled');
        $('.final1').modal();
    });

    $('.wager').on('click', function() {
        const y = prompt('Fortune favors the bold, now...SUBMIT YOUR WAGER', `your maximum wager is $${score} (only type the number)`);
        const x = parseInt(y);
        if (score <= 0) {
            alert('Game Over, you have nothing to wager')
            location.reload();
        }
        else if (x > score) {
            alert('over your max - you loose for cheating');
            location.reload();
        }
        else if (x > 0 && x <= score) {
            $('.final2').modal('open');
        }
        
    });
});