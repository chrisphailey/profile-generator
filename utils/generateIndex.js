const generateObjects = require('./generateObjects')

const generateManager = function(manager){
    return `<div class="col-sm-3 card z-depth-4 display-4 border border-dark rounded" style="width: 18rem;">
    <div class="card-header display-4">
        ${manager.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${manager.id}</li>
      <li class="list-group-item">Email: ${manager.email}</li>
      <li class="list-group-item">Office number: ${manager.number}</li>
    </ul>
  </div>`
    };
    
    const generateEngineer = function(engineer){
    return `              <div class="col-sm-3 card z-depth-4 display-4 border border-dark rounded" style="width: 18rem;">
    <div class="card-header display-4">
        ${engineer.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${engineer.id}</li>
      <li class="list-group-item">Email: ${engineer.email}</li>
      <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
  </div>`
    };
    
    const generateIntern = function(intern){
    return `              <div class="col-sm-3 card z-depth-4 display-4 border border-dark rounded" style="width: 18rem;">
    <div class="card-header display-4">
        ${intern.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee ID: ${intern.id}</li>
      <li class="list-group-item">Email: ${intern.email}</li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>`
    };
    
    
    
    const generatePage = function(pageArray){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
            <title>Team Profile</title>
        </head>
        <body>
        <div class="jumbotron bg-warning">
            <h1 class="display-12 text-center">My Team</h1>
        </div>
        <div class="container">
            <div class="cards row d-flex justify-content-around" style="height: 100px">
                    ${pageArray}
            </div>
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
return createHTML; 
}



module.exports = generateCard;