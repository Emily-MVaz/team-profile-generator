// Generate Manager info Card

// Generate Engineer info Card

// Generate Intern info Card

// html page setup
const generateTeam = function (employees) {
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
        <!-- Manager Card -->
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
            <h3>Name</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
            <p class="id">ID: 1</p>
            <p class="email">Email: <a href="#">email</a></p>
            <p class="office">Office Number: 0</p>
            </div>

        </div>
        </div>

        <!-- Engineer Card 1-->
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
            <h3>Name</h3>
            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
            <p class="id">ID: 2</p>
            <p class="email">Email: <a href="#">email</a></p>
            <p class="github">Github: <a href="#">github</a></p>
            </div>

        </div>
        </div>

        <!-- Engineer Card 2-->
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
            <h3>Name</h3>
            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
            <p class="id">ID: 3</p>
            <p class="email">Email:<a href="#">email</a></p>
            <p class="github">Github: <a href="#">github</a></p>
            </div>
        </div>
        </div>

        <!-- Engineer Card 3 -->
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
            <h3>Name</h3>
            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
            <p class="id">ID: 4</p>
            <p class="email">Email: <a href="#">email</a></p>
            <p class="github">Github: <a href="#">github</a></p>
            </div>

        </div>
        </div>

        <!-- Intern Card -->
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
            <h3>Name</h3>
            <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>

            <div class="card-body">
            <p class="id">ID: 5</p>
            <p class="email">Email:<a href="#">email</a></p>
            <p class="school">School: </p>
            </div>
        </div>
        </div>
    </div>

    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    </html>`;
};
