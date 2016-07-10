/*
----------
ROSHAM-BIRD
----------
Like Roshambo / Rock Paper Scissors. Choose between Oscar, Meanie, and Peach.
Oscar bites Meanie's foot.
Meanie pulls out Peach's crest feather.
Peach poops on Oscar.

A. User makes a choice.
B. Computer makes a choice.
C. Compare function determines winner.

This will be the basis of doing damage during fights in the main game.
*/

var options  = ["OSCAR", "MEANIE", "PEACH"];
var comp_choice = options[Math.floor(Math.random() * options.length)];
var outcomes = {
    "OSCAR":  {"OSCAR": 2, "MEANIE": 1, "PEACH": 0},
    "MEANIE": {"OSCAR": 0, "MEANIE": 2, "PEACH": 1},
    "PEACH":  {"OSCAR": 1, "MEANIE": 0, "PEACH": 2}
};

for (;;) {
    var user_choice = prompt("Which bird do you choose to do battle? OSCAR, MEANIE, or PEACH?").toUpperCase();
    if (user_choice === "OSCAR" || user_choice === "MEANIE" || user_choice === "PEACH") {
        break;
    }
}

console.log("You chose " + user_choice);
console.log("Your opponent chose " + comp_choice);
//console.log("Result: " + outcomes[user_choice][comp_choice]);

var compare = function(user, comp) {
    var result = outcomes[user_choice][comp_choice];
    if (result === 2) {
        console.log("It's a draw!")
    } else if (result === 1) {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
};

compare(user_choice, comp_choice);
