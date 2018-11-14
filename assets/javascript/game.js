$(document).ready(function () {

    var counter = 0;
    var wins = 0;
    var losses = 0;


    function newTargetNumber() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
    };

    function images() {
        for (var i = 1; i < 5; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("src", "assets/images/mirage crystal--010.jpg");
            imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
            $("#crystals").append(imageCrystal);
        }
    };

    function html() {
        $(".score-guess").text("Score to guess: " + targetNumber);
        $(".user-number").text("Your score: " + counter);
        $("#wins").text("Wins: " + wins);
        $(".losses").text("Losses: " + losses);
        $("#crystals").empty();

    };

    function reset() {
        counter = 0;
        newTargetNumber()
        html();
        images();

    }
    // ------------------------------------------------------------------------
    newTargetNumber();
    html();
    images();

    $("#crystals").on("click", "img", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $(".user-number").text("Your score: " + counter);
        if (targetNumber === counter) {
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        }

        if (targetNumber < counter) {
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    })
})
