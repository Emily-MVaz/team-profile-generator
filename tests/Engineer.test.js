const Engineer = require("../lib/Engineer");

test("github test", () => {
  const testGithub = "JamesGit";
  const employeeInstance = new Engineer(
    "James",
    1234,
    "james1234@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("getGithub test", () => {
  const testGithub = "JamesGit";
  const employeeInstance = new Engineer(
    "James",
    1234,
    "james1234@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Role test", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "James",
    1234,
    "james1234@gmail.com",
    "JamesGit"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
