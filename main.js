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

    const soccerQuestions = [
        {
            question: 'Leads the United States Mens national team in all time goals scored',
            answer: 'Clint Dempsey',
            choices: 'Clint Dempsey, Jozy Altidore, Michael Bradley, or Cobi Jones',
            points: 300,
        },
        {
            question: 'Leads the United States Womens national team in all time goals scored',
            answer: 'Abby Wambach',
            choices: 'Mia Hamm, Abby Wambach, Carli Lloyd, or Kristine Lilly',
            points: 400,
        },
        {
            question: 'This player recently transferred to PSG for a record price',
            answer: 'Neymar',
            choices: 'Neymar, Messi, Ronaldo, or Tom Beauregard',
            points: 200,
        },
        {
            question: 'This country has won the most World Cup Titles',
            answer: 'Brazil',
            choices: 'Brazil, Italy, France, or Germany',
            points: 500,
        }
    ]

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
        $('.b400').modal();
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

    const skiingQuestions = [
        {
            question: 'Most World Cup wins for an American',
            answer: 'Lindsay Vonn',
            choices: 'Lindsay Vonn, Picaboo Street, or Mikaela Shiffrin',
            points: 300,
        },
        {
            question: 'Most World Cup wins for an American man',
            answer: 'Bode Miller',
            choices: 'Ted Ligety, Bode Miller, or Phil Mahre',
            points: 200,
        },
        {
            question: 'First champion of the inaugural extreme skiing championships',
            answer: 'Doug Coombs',
            choices: 'Jonny Mosely, Shane McConkey, or Doug Coombs',
            points: 400,
        },
        {
            question: 'Inventor of the game GNAR',
            answer: 'Shane McConkey',
            choices: 'Shane McConkey, Jonny Mosely, or Doug Coombs',
            points: 500,
        }
    ]

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

    const hockeyQuestions = [
        {
            question: 'The Great One',
            answer: 'Wayne Gretzky',
            choices: 'Bobby Orr, Mario Lemieux, or Wayne Gretzky',
            points: 100,
        },
        {
            question: 'This Team has the most Stanley Cups',
            answer: 'Canadiens',
            choices: 'Islanders, Oilers, or Canadiens',
            points: 200,
        },
        {
            question: 'This now defunct team called Atlanta home',
            answer: 'Thrashers',
            choices: 'Thrashers, Seals, or Whalers',
            points: 300,
        },
        {
            question: 'This amateur is still the only guy to ever take off his skate and try to stab somebody',
            answer: 'Happy Gilmore',
            choices: 'Ogie Ogilthorpe, Happy Gilmore, or Doug Glatt',
            points: 400,
        },
        {
            question: 'The last player to be win the Hart Trophy in the same season he was traded',
            answer: 'Joe Thornton',
            choices: 'Connor McDavid, Eric Lindros, or Joe Thornton',
            points: 500,
        }
    ]

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

    const footballQuestions = [
        {
            question: 'The GOAT',
            answer: 'Tom Brady',
            choices: 'Peyton Manning, Tom Brady, or John Elway',
            points: 100,
        },
        {
            question: 'This Team has won the most Super Bowls',
            answer: 'Steelers',
            choices: 'Patriots, Cowboys, or Steelers',
            points: 200,
        },
        {
            question: 'This QB has the most Touchdown passes in NFL history',
            answer: 'Peyton Manning',
            choices: 'Tom Brady, Peyton Manning, or Brett Favre',
            points: 300,
        },
        {
            question: 'This RB has the most rushing yard in NFL history',
            answer: 'Emmitt Smith',
            choices: 'Walter Payton, Barry Sanders, or Emmitt Smith',
            points: 400,
        },
        {
            question: 'This WR has the most receiving yard in NFL history',
            answer: 'Jerry Rice',
            choices: 'Jerry Rice, Randy Moss, or Terrell Owens',
            points: 500,
        }
    ]

    $('.footballHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(footballQuestions[0].question, `Type ${footballQuestions[0].choices}`);
        if (y === footballQuestions[0].answer) {
            alert('Correct!');
            score += footballQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect');
            score -= footballQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.footballTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(footballQuestions[1].question, `Type ${footballQuestions[1].choices}`);
        if (y === footballQuestions[1].answer) {
            alert('Correct!')
            score += footballQuestions[1].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= footballQuestions[1].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.footballThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(footballQuestions[2].question, `Type ${footballQuestions[2].choices}`);
        if (y === footballQuestions[2].answer) {
            alert('Correct!')
            score += footballQuestions[2].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= footballQuestions[2].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.footballFourHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(footballQuestions[3].question, `Type ${footballQuestions[3].choices}`);
        if (y === footballQuestions[3].answer) {
            alert('Correct!')
            score += footballQuestions[3].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= footballQuestions[3].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.footballFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(footballQuestions[4].question, `Type ${footballQuestions[4].choices}`);
        if (y === footballQuestions[4].answer) {
            alert('Correct!')
            score += footballQuestions[4].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= footballQuestions[4].points;
            $('.scoreUpdate').html(score);
        }
    });

});