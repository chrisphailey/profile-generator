const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, email, id, role, number){
        super(name, email, id, role);
        
        this.number = number;
    }
}

module.exports = Manager
