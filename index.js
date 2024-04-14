#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
while (condition) {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please guess a number between 1 to 6 .",
        },
    ]);
    if (answer.userGuessedNumber === randomNumber) {
        console.log("Congratulations! you guessed a right number.");
    }
    else {
        console.log("Try again! you guessed a wrong number.");
    }
}
