// import employee const
const Employee = require("./Employee");

// manager const
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name,id, email);

        // add github
        this.github = github;
    }

    // return github
    getGithub() {
        return this.github;
    }

    // override to Engineer
    getRole() {
        return "Engineer";
    }
}

// export
module.exports = Engineer;