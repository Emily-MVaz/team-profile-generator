// import employee const
const Employee = require("./Employee");

// manager const
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name,id, email);

        // add office number
        this.officeNumber = officeNumber;
    }

    // retrieve office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // override to Manager
    getRole() {
        return "Manager";
    }
}

// export
module.exports = Manager;