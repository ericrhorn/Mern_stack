const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const jokesRoutes = require("./server/routes/jokes.routes");
jokesRoutes(app);

// This is where we import the users routes function from our user.routes.js file
// const AllMyUserRoutes = require("./server/routes/user.routes");
// AllMyUserRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port", port));
