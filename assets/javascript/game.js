$(document).ready(function () {

    var counter = 0;
    var wins = 0;
    var losses = 0;
    var targetNumber = Math.floor(Math.random() * 50) + 30;

    for (var i = 1; i < 5; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "assets/images/mirage crystal--010.jpg");
        imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 10) + 1);
        $("#crystals").append(imageCrystal);
    }

    $(".number-guess").text("Number to guess: " + targetNumber);

    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue
        $(".user-number").text("Your score: " + counter);
        if (targetNumber === counter) {
            wins++;
            $("#wins").text("Wins: " + wins);
            counter = 0;
            $(".user-number").text("Your score: " + counter); 
            targetNumber = Math.floor(Math.random() * 50) + 30;
            $(".number-guess").text("Number to guess: " + targetNumber);   
        }
        else if (counter > targetNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            counter = 0;
            $(".user-number").text("Your score: " + counter);
            targetNumber = Math.floor(Math.random() * 50) + 30;
            $(".number-guess").text("Number to guess: " + targetNumber);  
           
        }





    })

})
