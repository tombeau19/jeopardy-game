$(document).ready(function () {

    $('.newGame').click(function() {
        location.reload();
    });

    let score = 0;

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
        const y = prompt(baseballQuestions[0].question, `Type ${baseballQuestions[0].choices}`);
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

});