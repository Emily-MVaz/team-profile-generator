// import employee const
const Employee = require("../lib/Employee");

test("create new employee", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Name test", () => {
  const name = "James";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("ID test", () => {
  const id = 1234;
  const employeeInstance = new Employee("James", id);
  expect(employeeInstance.id).toBe(id);
});

test("Email test", () => {
  const email = "james1234@gmail.com";
  const employeeInstance = new Employee("James", 1234, email);
  expect(employeeInstance.email).toBe(email);
});

test("getName test", () => {
  const testName = "James";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("getID test", () => {
  const testID = 1234;
  const employeeInstance = new Employee("James", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("getEmail test", () => {
  const testEmail = "james1234@gmail.com";
  const employeeInstance = new Employee("James", 1234, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Role test", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("James", 1234, "james1234@gmail.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
