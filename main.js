$(document).ready(function () {

    const baseballQuestions = [
        {
            question: 'This team plays at Fenway Park',
            answer: 'Red Sox',
            choices: 'Yankees, Red Sox, or Orioles',
            points: 100,
        },
        {
            question: 'This team has won the most World Series',
            answer: 'Yankees',
            choices: 'Yankees, Dodgers, or Giants',
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
            alert('Correct!')
        }
        else {
            alert('Incorrect')
        }
    });

    $('.baseballTwoHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(baseballQuestions[1].question, `Type ${baseballQuestions[1].choices}`);
        if (y === baseballQuestions[1].answer) {
            alert('Correct!')
        }
        else {
            alert('Incorrect')
        }
    });

    $('.baseballThreeHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(baseballQuestions[2].question, `Type ${baseballQuestions[2].choices}`);
        if (y === baseballQuestions[2].answer) {
            alert('Correct!')
        }
        else {
            alert('Incorrect')
        }
    });

    $('.baseballFourHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(baseballQuestions[3].question, `Type ${baseballQuestions[3].choices}`);
        if (y === baseballQuestions[3].answer) {
            alert('Correct!')
        }
        else {
            alert('Incorrect')
        }
    });

    $('.baseballFiveHundred').on('click', function () {
        $(this).addClass('disabled');
        const y = prompt(baseballQuestions[4].question, `Type ${baseballQuestions[4].choices}`);
        if (y === baseballQuestions[4].answer) {
            alert('Correct!')
        }
        else {
            alert('Incorrect')
        }
    });




















});