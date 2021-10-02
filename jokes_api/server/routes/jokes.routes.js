const jokesController = require("../controllers/jokes.controller")

module.exports = (app) => {
    // app.get("/api/healthcheck", jokesController.healthcheck);
    app.get("/api/jokes", jokesController.findAlljokes);
    app.post("/api/jokes", jokesController.newJoke);
    app.get("/api/jokes/:_id", jokesController.findOneJoke);
    app.put("/api/jokes/:_id", jokesController.updateJoke);
    app.delete("/api/jokes/:_id", jokesController.deleteJoke);
};
