$(document).ready(function () {



    $('.baseballHundred').on('click', function () {
        const baseballQuestion = $('<div class="btn-large disabled col s2 offset-s1">100</div>');
        $(this).closest('.hundred').prepend(baseballQuestion);
        $(this).remove();
        prompt('This team plays in Boston');
    });













});