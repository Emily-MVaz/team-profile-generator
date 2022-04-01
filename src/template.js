// TODO: add template literals into emplyee card info

const generateTeam = (team) => {
  // Generate Manager info Card
  const generateManager = (manager) => {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>Name</h3>
                <h4>Manager</h4>
                <i class="fa-solid fa-mug-hot"></i>
            </div>

            <div class="card-body">
                <p class="id">ID: 1</p>
                <p class="email">Email: <a href="#">email</a></p>
                <p class="office">Office Number: 0</p>
            </div>
            </div>
        </div>`;
  };

  // Generate Engineer info Card
  const generateEngineer = (engineer) => {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>Name</h3>
                <h4>Engineer</h4>
                <i class="fa-solid fa-glasses"></i>
            </div>

            <div class="card-body">
                <p class="id">ID: 2</p>
                <p class="email">Email: <a href="#">email</a></p>
                <p class="github">Github: <a href="#">github</a></p>
            </div>
            </div>
        </div>`;
  };

  // Generate Intern info Card
  const generateIntern = (intern) => {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>Name</h3>
                <h4>Intern</h4>
                <i class="fa-solid fa-user-graduate"></i>
            </div>

            <div class="card-body">
                <p class="id">ID: 5</p>
                <p class="email">Email: <a href="#">email</a></p>
                <p class="school">School: </p>
            </div>
            </div>
        </div>`;
  };

  // add cards to page
  const html = [];

  //add manager info to html
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  // add engineer info to html
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((manager = generateEngineer(engineer)))
  );

  // add intern info to html
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );

  // add all to html
  return html.join("");
};

// html page setup
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="/homework/team-profile-generator/dist/stylesheet.css" />
    </head>

    <body>
    <header class="bg-danger text-center">
        <h1 class="p-5 text-white">My Team</h1>
    </header>
    
    <div class="container row justify-content-center">
        <!-- Employee Cards -->
        <!-- Employee Cards tag -->
    </div>

    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    </html>`;
};

// export
module.exports = generateTeam;