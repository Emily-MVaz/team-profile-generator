// import engineer const
const Engineer = require("../lib/Engineer");

// engineer test  
test("Engineer test", () => {
    const engineer = new Engineer("James", "0000", "james1234@gmail.com");
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// github test
test("github test", () => {
    const engineer = new Engineer("James", "0000", "james1234@gmail.com");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// role test 
test("role test", () => {
    const engineer = new Engineer("James", "0000", "james1234@gmail.com");

    expect(engineer.getRole()).toEqual("Engineer");
});
