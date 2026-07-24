// Qno = 1

// Football Team Selection System (10 Marks)
// A football academy has organized player trials to select the final team for an upcoming tournament. The academy has recorded each player's fitness score.

// Create the following two arrays:


// var players = ["Ali", "Ahmed", "Hamza", "Usman", "Bilal", "Ayan"];

// var fitnessScores = [75, 48, 90, 66, 40, 81];


// Write a JavaScript program that performs the following tasks:

// Using a for loop, display each player's name along with their fitness score.
// A player is selected if their fitness score is 60 or above; otherwise, the player is rejected.
// Count the total number of selected players.
// Count the total number of rejected players.
// Display the names of all selected players.
// Display the names of all rejected players.
// Find the highest fitness score and display:
// The highest score.
// The name of the player who achieved that score.
// Find the lowest fitness score and display:
// The lowest score.
// The name of the player who achieved that score.
// Calculate the total fitness score of all players.
// Calculate the average fitness score and round it using the appropriate JavaScript Math method.
// If the average fitness score is 70 or above, display:



var players = ["Ali", "Ahmed", "Hamza", "Usman", "Bilal", "Ayan"];

var fitnessScores = [75, 48, 90, 66, 40, 81];


let playerSelected = [];
let totalPlayers = ""
let playerRejected = [];
let totalScore = [];
let total = 0;

for (let i = 0; i < players.length; i++) {
    totalPlayers += (i+1)+" . "+players[i] +"="+fitnessScores[i]+"\n"
    console.log(totalPlayers);
    
    if (fitnessScores[i] >= 60) {
        playerSelected.push(players[i]);
        // console.log(playersSelected);
        
    }else{
        playerRejected.push(players[i]);
        console.log(playerRejected);
    }
      
    total = total + fitnessScores[i];
} 
console.log(Math.max(...fitnessScores));
console.log("Total selectedPlayers : " + playerSelected.length);
console.log("Total selectedPlayers : " + playerRejected.length);

console.log("All Selected Players : " + playerSelected);
console.log("All Rejected Players : " + playerRejected);

console.log("Highest Scores : " + Math.max(...fitnessScores));
console.log("Lowest Scores : " + Math.min(...fitnessScores));

console.log("Highest Score Player is : "+"Hamza");

console.log("Lowest Score Player is : " + "Bilal");  
console.log("Total Fitness Score: " + total);

var average = total / fitnessScores.length;
average = Math.round(average);

console.log("Average Fitness Score: " + average);

if (average >= 70) {
    console.log("Team fitness level is Good!");
} else {
    console.log("Team fitness level needs improvement.");
}



// Qno = 2

// Cricket Tournament Analysis System (10 Marks)
// A cricket academy wants to analyze the performance of its players after a tournament.

// Create an array containing the following player scores:


// [45, 67, 89, 34, 90, 76, 54, 61]


// Write a JavaScript program that performs the following tasks:

// Calculate the total score of all players.
// Calculate the average score.
// Round the average score using the appropriate Math method.
// Count how many players scored 50 or above.
// Count how many players scored below 50.
// Find the highest score.
// Find the lowest score.
// If the average score is 70 or above, display "Excellent Team Performance".
// Otherwise display "Team Needs Improvement".
// Display a complete performance report showing:
// Total Players
// Total Score
// Average Score
// Highest Score
// Lowest Score
// Passed Players
// Failed Players
// Team Performance



var scores = [45, 67, 89, 34, 90, 76, 54, 61];

var total = 0;
var passed = 0;
var failed = 0;

var highest = scores[0];
var lowest = scores[0];

for (var i = 0; i < scores.length; i++) {
    total = total + scores[i];

    if (scores[i] >= 50) {
        passed++;
    } else {
        failed++;
    }

    if (scores[i] > highest) {
        highest = scores[i];
    }

    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}

var average = total / scores.length;
average = Math.round(average);

if (average >= 70) {
    console.log("Excellent Team Performance");
} else {
    console.log("Team Needs Improvement");
}

console.log("----- Performance Report -----");
console.log("Total Players : " + scores.length);
console.log("Total Score : " + total);
console.log("Average Score : " + average);
console.log("Highest Score : " + highest);
console.log("Lowest Score : " + lowest);
console.log("Passed Players : " + passed);
console.log("Failed Players : " + failed);


// End
