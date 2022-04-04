// import Manager const
const Manager = require("../lib/Manager");

test("Office number test", () => {
  const testOfficeNumber = 1;
  const employeeInstance = new Manager(
    "James",
    1234,
    "james1234@gmail.com",
    testOfficeNumber
  );
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("getOfficeNumber test", () => {
  const testOfficeNumber = 1;
  const employeeInstance = new Manager(
    "James",
    1234,
    "james1234@gmail.com",
    testOfficeNumber
  );
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Role test", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager(
    "James",
    1234,
    "james1234@gmail.com",
    1
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
