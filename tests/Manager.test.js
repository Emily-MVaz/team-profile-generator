// import Manager const 
const Manager = require("../lib/Manager");

// manager test  
test('Manager test', () => {
    const manager = new Manager("James", "0000", "james1234@gmail.com");
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// role test
test("role test", () => {
    const manager = new Manager("James", "0000", "james1234@gmail.com");

    expect(manager.getRole()).toEqual("Manager");
}); 
