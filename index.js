// TODO: GIVEN a command-line application that accepts user input
// use terminal prompts to generate html
const inquirer = require("inquirer");
const fs = require("fs");

const teamProfile = new Promise ((res, rej) => {
    res(
        inquirer.prompt([
            {}
        ]))
})
// TODO: WHEN I am prompted for my team members and their information
// inputted info will appear on html page appropiatley; input 

// TODO: THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// Displays information inputed neatly; will likely use cards

// TODO: WHEN I click on an email address in the HTML
// make emails linked accordingly

// TODO: THEN my default email program opens and populates the TO field of the email with the address
// create auto-populated email to the email user clicked

// TODO: WHEN I click on the GitHub username then that GitHub profile opens in a new tab
// link github username accordingly and pop up in new tab

// TODO: WHEN I start the application then I am prompted to enter the team manager’s name, employee ID, email address, and office number
// Inputting manager name and info 

// TODO: WHEN I enter the team manager’s name, employee ID, email address, and office number then I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// when manager info filled moves on to engineer name and info

// TODO: WHEN I select the engineer option then I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// Inputting engineer info and name

// TODO: WHEN I select the intern option then I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// inputting intern name and info then return to menu

// TODO: WHEN I decide to finish building my team
// Complete "button" or sequence 

// TODO: THEN I exit the application, and the HTML is generated
// html generated


