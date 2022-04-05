// import intern const
const Intern = require("../lib/Intern");

test("school test", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "James",
    1234,
    "james1234@gmail.com",
    testSchool
  );
  expect(employeeInstance.school).toBe(testSchool);
});

test("Role test", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "James",
    1234,
    "james1234@gmail.com",
    "School Name"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
