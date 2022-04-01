// import employee const
const Employee = require("./Employee");

// intern const
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name,id, email);

        // add school
        this.school = school;
    }
    
    // return school
    getSchool() {
        return this.school;
    }

    // override to Intern
    getRole() {
        return "Intern";
    }
}

// export
module.exports = Intern;