$(document).ready(function () {

    const baseballQuestions = [
        {
            question: 'This team plays at Fenway Park',
            answer: 'Red Sox',
            choices: 'Yankees, Red Sox, Orioles',
            points: 100,
        },
        {
            question: 'This team has won the most World Series',
            answer: 'Yankees',
            choices: 'Yankees, Dodgers, Giants',
            points: 200,
        },
        {
            question: 'Before Barry Bonds cheated and broke the record, This player had the most Home Runs',
            answer: 'Hank Aaron',
            choices: 'Babe Ruth, Roger Marris, Ted Williams, Hank Aaron',
            points: 300,
        },
        
        

    ]


    $('.baseball').on('click', function () {
        $(this).addClass('disabled');
        prompt(baseballQuestions[2].question, `Type ${baseballQuestions[2].choices}`);
    });



















});