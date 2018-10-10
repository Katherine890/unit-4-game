$(document).ready(function() {
        
        // RANDOM NUMBER 
        const random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,                     // array of random numbers
                        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                        61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
                        101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 
                        117, 118, 119, 120];
        var randNum = Math.floor((Math.random() * (random.length-1)));                                             // This randomizes the numbers in the array.
        var randomValue = random[randNum];                                                                         // randomValue generates the random number.
        var randomNumber = new Array(randomValue.length);                                                          // This creates a new array of random numbers 19-120.
        for(var i = 0; i < randomNumber.length; i++) {
        $(".random-number").text(randomValue);
        console.log(randomValue);
        } 

        var wins = 0;
        var losses= 0;
        var counter = 0;
        
        $(".wins").text(wins);
        $(".losses").text(losses);

        // Each time the user clicks the crystal the counter adds to the amount the crystal contains.

        // BLUE CRYSTAL 
        var blueOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];                 // array of number options from 1-12.
        var randNumB = Math.floor((Math.random() * (blueOptions.length-1)));       // this randomizes the numbers in the array.
        var blueValue = blueOptions[randNumB];                                     // blueValue generates the random number.
        var randomBlue = new Array(blueValue.length);                              // This creates new array of random numbers 1-12. 
        for(var i = 0; i < randomBlue.length; i++) {
                //var blueGem = $("#blue-gem");
                //blueGem.attr("bluegemValue", randomBlue[i]);               
                console.log(blueValue);                                            // Displays random number of blue crystal in the console.
        }

        $("#blue-gem").on("click", function() {                                    // this adds counter value to the blueValue each time blue crystal is clicked. 
        $(".score-number").text(counter += blueValue);                            
        console.log(counter);

        
        //if(counter === random) {
        //  wins++
        //}
        //else if (counter >= random) {
       //   losses++
        //}

        })
        
        
        // GREEN CRYSTAL
        var greenOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];                // array of number options from 1-12.    
        var randNumG = Math.floor((Math.random() * (greenOptions.length-1)));      // this randomizes the numbers in the array.
        var greenValue = greenOptions[randNumG];                                   // greenValue generates the random number.
        var randomGreen = new Array(greenValue.length);                            // This creates new array of random numbers 1-12. 
        for(var i = 0; i < randomGreen.length; i++) {
                console.log(greenValue);                                           // Displays random number of green crystal in the console.
        }

        $("#green-gem").on("click", function() {                                   // this adds counter value to the greenValue each time blue crystal is clicked.
        $(".score-number").text(counter += greenValue);
        console.log(counter);

        });

        
        // PURPLE CRYSTAL
        var purpleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];               // array of number options from 1-12.
        var randNumP = Math.floor((Math.random() * (purpleOptions.length-1)));     // this randomizes the numbers in the array.
        var purpleValue = purpleOptions[randNumP];                                 // purpleValue generates the random number.
        var randomPurple = new Array(purpleValue.length);                          // This creates new array of random numbers 1-12. 
        for(var i = 0; i < randomPurple.length; i++) {
                console.log(purpleValue);                                          // Displays random number of purple crystal in the console.
        }

        $("#purple-gem").on("click", function() {                                  // this adds counter value to the purpleValue each time blue crystal is clicked.
        $(".score-number").text(counter += purpleValue);
        console.log(counter);

        });


        // RED CRYSTAL
        var redOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];                 // array of number options from 1-12.
        var randNumR = Math.floor((Math.random() * (redOptions.length-1)));       // this randomizes the numbers in the array.
        var redValue = redOptions[randNumR];                                      // redValue generates the random number.
        var randomRed = new Array(redValue.length);                               // This creates new array of random numbers 1-12. 
        for(var i = 0; i < randomRed.length; i++) {
                console.log(redValue);                                            // Displays random number of red crystal in the console.
        }

        $("#red-gem").on("click", function() {                                    // this adds counter value to the redValue each time blue crystal is clicked.
        $(".score-number").text(counter += redValue);
        console.log(counter);

        });
        

       console.log(wins);
       console.log(losses);

        // User score is added with each click of the crystal until the score equals the random number.
        // Wins increase by 1 when user score matches random number.
        // Losses increase by 1 when user score is greater than random number.
        // Each crystal is assigned a different number and new random number is generated after the game has a win or a loss (reset).
});

// Restarts game and gives us a new random number.
function startOver(){
        window.location.reload(false);  
}
