const inquirer = require('inquirer');
const fs = require('fs');
const generateCard = require('./utils/generateIndex.js');

const promptUser = (teamArray) => {
    if(!teamArray){
        teamArray = []
    }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's name!");
                  return false;
                }
              }

        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's employee ID!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's email address!");
                  return false;
                }
              }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'number',
            message: "What is the team manager's office number?",
            when: ({role}) => {
                if (role === "Manager"){
                    return true
                } else {
                    return false;
                }
            },
            validate: numberInput => {
                if (numberInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's office number!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            when: ({role}) => {
                if (role === "Engineer"){
                    return true
                } else {
                    return false
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: ({role}) => {
                if (role === "Intern"){
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
        },
    ])
    .then(employeeInfo => {
        teamArray.push(employeeInfo);
        if(employeeInfo.addEmployee){
           return promptUser(teamArray)
            console.log(employeeInfo);
        } else {
            return teamArray;
        }
    });
}


// Function to write HTML file
writeToFile = (data) => {
        fs.writeFile('./dist/index.html', (data), err => {
            if (err) {
                console.log(err);
            }
        });
}

// function to initialize app
function init() {
    promptUser()
    .then((teamArray) => {
        return generateCard(teamArray);
    }).then(data => {
        return writeToFile(data)
    }).catch((err) => {
        console.log(err)
    }) 
   
}

init();