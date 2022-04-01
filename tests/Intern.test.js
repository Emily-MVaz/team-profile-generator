// import intern const
const Intern = require("../lib/Intern");

// intern test   
test("Intern test", () => {
    const intern = new Intern("James", "0000", "james1234@gmail.com");
    
    expect(intern.school) .toEqual(expect.any(String));
});

// School test
test("School test", () => {
    const intern = new Intern("James", "0000", "james1234@gmail.com");
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// role test
test("role test", () => {
    const intern = new Intern("James", "0000", "james1234@gmail.com");

    expect(intern.getRole()).toEqual("Intern");
}); 
