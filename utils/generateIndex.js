const generateObjects = require('./generateObjects')

const generateManager = function(manager){
    return `<div id="manager">
    <h3>${manager.name}</h3>
    <div class="info">
        <p>${manager.id}</p>
        <p>Email: ${manager.email}</p>
        <p>Office number: ${manager.number}</p>
    </div>
    </div>`
    };
    
    const generateEngineer = function(engineer){
    return `<div id="engineer">
    <h3>${engineer.name}</h3>
    <div class="info">
        <p>${engineer.id}</p>
        <p>Email: ${engineer.email}</p>
        <p>GitHub:<a href="github.com/${engineer.github}">${engineer.github}</a>
        </p>
    </div>
    </div>`
    };
    
    const generateIntern = function(intern){
    return `<div id="engineer">
    <h3>${intern.name}</h3>
    <div class="info">
        <p>${intern.id}</p>
        <p>Email: ${intern.email}</p>
        <p>GitHub:<a href="github.com/${intern.github}">${intern.github}</a>
        </p>
    </div>
    </div>`
    };
    
    
    
    const generatePage = function(pageArray){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
        </head>
        <body>
            <div id="jumbotron">
                <h1>My Team</h1>
            </div>
            <div class="cards">
                ${pageArray}
            </div>
            
        </body>
        </html>`
    }
    

function generateCard (data) {

    const teamArray = []
    
    for(var i=0; i < data.length; i++){
    switch (data[i].role) {
        case 'Manager':
            const managerCard = generateManager(data[i])
            teamArray.push(managerCard)
            break;
        case 'Engineer':
            const engineerCard = generateEngineer(data[i])
            teamArray.push(engineerCard)
            break;
        case 'Intern':
            const internCard = generateIntern(data[i])
            teamArray.push(internCard)
        default:
            break;
    }
}
const pageArray = teamArray.join('');
const createHTML = generatePage(pageArray);
console.log(createHTML)
return createHTML; 
}



module.exports = generateCard;