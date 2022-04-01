// TODO: GIVEN a command-line application that accepts user input
// use terminal prompts to generate html

const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/template");
const teamArray = [];
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// Manager Information prompts
const addManager = () => {
  return inquirer.prompt([
    // name
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name.");
          return false;
        }
      }
    },
    // id
    {
      type: "input",
      name: "id",
      message: "What is the team manager's ID?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter an ID.");
          return false;
        } else {
          return true;
        }
      }
    },
    // email
    {
      type: "input",
      name: "email",
      message: "What is the team manaager's email?",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address.")
          return false;
        }
      }
    },
    // office number
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter an office number.");
          return false;
        } else {
          return true;
        }
      }
    }
  ])
  // combine
  .then(managerInput => {
    const {name, id, email, officeNumber} = managerInput;
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
  })
  ;
};

// Engineer or Intern Information prompts
const addEmployee = () => {
  return inquirer.prompt([
    // choose intern or engineer
    {
      type:"list",
      name: "job",
      message: "Please choose an employee to add to the team.",
      choices: ["Engineer", "Intern"],
    },
    // name
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name.");
          return false;
        }
      }
    },
    // id
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter an ID.");
          return false;
        } else {
          return true;
        }
      }
    },
    // email
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address.")
          return false;
        }
      }
    },
    // github for engineers
    {
      type: "input",
      name: "github",
      message: "Please enter the engineer's github username.",
      // if the employee is an engineer prompt this
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a github username.");
        }
      }
    },
    // school for intern
    {
      type: "input",
      name: "school",
      message: "Please enter the intern's school.",
      // if the employee is an intern prompt this
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a school.");;
        }
      }
    },
    // confirm adding employee
    {
      type: "confirm",
      name: "confirmEmployee",
      message: "Would you like to add another member?",
      default: false
    }
  ])
  // combine
  .then(employeeInfo => {
    let {name, id, email, job, github, school, confirmEmployee} = employeeInfo;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);
      console.log(employee);
    } else if (role === "Intern") {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    }

    teamArray.push(employee);
    if (confirmEmployee) {
      return addEmployee(teamArray);
    } else {
      return teamArray
    }
  });
};


// generate HTML
const writeFile = data => {
  fs.writeFile("./dist/index.html", data, err => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been created!");
    }
  })
}

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateTeam(teamArray);
  })
  .then(pageHtml => {
    return writeFile(pageHtml);
  })
  .catch(err => {
    console.log(err);
  });
