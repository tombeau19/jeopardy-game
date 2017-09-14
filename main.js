$(document).ready(function () {
    
    $('.newGame').click(function () {
        location.reload();
    });

    let score = 0;

    //BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL BASEBALL

    const baseballQuestions = [
        {
            question: 'This team plays at Fenway Park',
            answer: 'Red Sox',
            choices: 'Yankees, Red Sox, Orioles, or Cubs',
            points: 100,
        },
        {
            question: 'This team has won the most World Series',
            answer: 'Yankees',
            choices: 'Yankees, Dodgers, Giants, or Braves',
            points: 200,
        },
        {
            question: 'Before Barry Bonds cheated and broke his record, This player had the most career Home Runs',
            answer: 'Hank Aaron',
            choices: 'Babe Ruth, Roger Marris, Ted Williams, or Hank Aaron',
            points: 300,
        },
        {
            question: 'This player claims to have been drunk when he threw a perfect game',
            answer: 'David Wells',
            choices: 'David Cone, Roger Clemens, David Wells, or Oil Can Boyd',
            points: 400,
        },
        {
            question: 'The most recent switch hitter to hit a grand slam from both sides of the plate in the same game',
            answer: 'Bill Mueller',
            choices: 'Carlos Beltran, Bill Mueller, Pete Rose, or Roberto Alomar',
            points: 500,
        }
    ]

    $('.baseballHundred').on('click', function () {
        $(this).addClass('disabled');
        $('.modal').modal();
        if (y === baseballQuestions[0].answer) {
            alert('Correct!');
            score += baseballQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect');
            score -= baseballQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.baseballTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(baseballQuestions[1].question, `Type ${baseballQuestions[1].choices}`);
        if (y === baseballQuestions[1].answer) {
            alert('Correct!')
            score += baseballQuestions[1].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= baseballQuestions[1].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.baseballThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(baseballQuestions[2].question, `Type ${baseballQuestions[2].choices}`);
        if (y === baseballQuestions[2].answer) {
            alert('Correct!')
            score += baseballQuestions[2].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= baseballQuestions[2].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.baseballFourHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(baseballQuestions[3].question, `Type ${baseballQuestions[3].choices}`);
        if (y === baseballQuestions[3].answer) {
            alert('Correct!')
            score += baseballQuestions[3].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= baseballQuestions[3].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.baseballFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(baseballQuestions[4].question, `Type ${baseballQuestions[4].choices}`);
        if (y === baseballQuestions[4].answer) {
            alert('Correct!')
            score += baseballQuestions[4].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= baseballQuestions[4].points;
            $('.scoreUpdate').html(score);
        }
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
            question: 'This team set the single game all time MLS attendance record',
            answer: 'Atlanta United',
            choices: 'Atlanta United, Seattle Sounders, Portland Timbers, or DC United',
            points: 100,
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

    $('.soccerThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(soccerQuestions[0].question, `Type ${soccerQuestions[0].choices}`);
        if (y === soccerQuestions[0].answer) {
            alert('Correct!');
            score += soccerQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect');
            score -= soccerQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.soccerFourHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(soccerQuestions[1].question, `Type ${soccerQuestions[1].choices}`);
        if (y === soccerQuestions[1].answer) {
            alert('Correct!')
            score += soccerQuestions[1].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= soccerQuestions[1].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.soccerHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(soccerQuestions[2].question, `Type ${soccerQuestions[2].choices}`);
        if (y === soccerQuestions[2].answer) {
            alert('Correct!')
            score += soccerQuestions[2].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= soccerQuestions[2].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.soccerTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(soccerQuestions[3].question, `Type ${soccerQuestions[3].choices}`);
        if (y === soccerQuestions[3].answer) {
            alert('Correct!')
            score += soccerQuestions[3].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= soccerQuestions[3].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.soccerFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(soccerQuestions[4].question, `Type ${soccerQuestions[4].choices}`);
        if (y === soccerQuestions[4].answer) {
            alert('Correct!')
            score += soccerQuestions[4].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= soccerQuestions[4].points;
            $('.scoreUpdate').html(score);
        }
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
            question: 'If you french fry when youre supposed to pizza you are gonna have a __________',
            answer: 'Bad Time',
            choices: 'Bad Time, Good Time, or Okay Time',
            points: 100,
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

    $('.skiingHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(skiingQuestions[2].question, `Type ${skiingQuestions[2].choices}`);
        if (y === skiingQuestions[2].answer) {
            alert('Correct!');
            score += skiingQuestions[2].points;
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect');
            score -= skiingQuestions[2].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.skiingTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(skiingQuestions[1].question, `Type ${skiingQuestions[1].choices}`);
        if (y === skiingQuestions[1].answer) {
            alert('Correct!')
            score += skiingQuestions[1].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= skiingQuestions[1].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.skiingThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(skiingQuestions[0].question, `Type ${skiingQuestions[0].choices}`);
        if (y === skiingQuestions[0].answer) {
            alert('Correct!')
            score += skiingQuestions[0].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= skiingQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.skiingFourHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(skiingQuestions[3].question, `Type ${skiingQuestions[3].choices}`);
        if (y === skiingQuestions[3].answer) {
            alert('Correct!')
            score += skiingQuestions[3].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= skiingQuestions[3].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.skiingFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(skiingQuestions[4].question, `Type ${skiingQuestions[4].choices}`);
        if (y === skiingQuestions[4].answer) {
            alert('Correct!')
            score += skiingQuestions[4].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= skiingQuestions[4].points;
            $('.scoreUpdate').html(score);
        }
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

    $('.hockeyHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(hockeyQuestions[0].question, `Type ${hockeyQuestions[0].choices}`);
        if (y === hockeyQuestions[0].answer) {
            alert('Correct!');
            score += hockeyQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect');
            score -= hockeyQuestions[0].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.hockeyTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(hockeyQuestions[1].question, `Type ${hockeyQuestions[1].choices}`);
        if (y === hockeyQuestions[1].answer) {
            alert('Correct!')
            score += hockeyQuestions[1].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= hockeyQuestions[1].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.hockeyThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(hockeyQuestions[2].question, `Type ${hockeyQuestions[2].choices}`);
        if (y === hockeyQuestions[2].answer) {
            alert('Correct!')
            score += hockeyQuestions[2].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= hockeyQuestions[2].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.hockeyFourHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(hockeyQuestions[3].question, `Type ${hockeyQuestions[3].choices}`);
        if (y === hockeyQuestions[3].answer) {
            alert('Correct!')
            score += hockeyQuestions[3].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= hockeyQuestions[3].points;
            $('.scoreUpdate').html(score);
        }
    });

    $('.hockeyFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(hockeyQuestions[4].question, `Type ${hockeyQuestions[4].choices}`);
        if (y === hockeyQuestions[4].answer) {
            alert('Correct!')
            score += hockeyQuestions[4].points
            $('.scoreUpdate').html(score);
        }
        else {
            alert('Incorrect')
            score -= hockeyQuestions[4].points;
            $('.scoreUpdate').html(score);
        }
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