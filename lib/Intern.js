const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, email, id, role, school){
        super(name, email, id, role);

        this.school = school;

    }
    getSchool(){
        return this.school = school
    }
}

module.exports = Intern