// import employee const
const Employee = require("./Employee");

// employee object test
test("employee object test", () => {
  const employee = new Employee("James", "0000", "james1234@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// name test
test("employee name test", () => {
  const employee = new Employee("James", "0000", "james1234@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// id test
test("employee id test", () => {
  const employee = new Employee("James", "0000", "james1234@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// email test
test("employee email test", () => {
  const employee = new Employee("James", "0000", "james1234@gmail.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});

// role test
test("employee role test", () => {
  const employee = new Employee("James", "0000", "james1234@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
