const authorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.post("/api/authors", authorController.createAuthor);
  app.get("/api/authors", authorController.showAuthors);
  app.get("/api/authors/:_id", authorController.showOneAuthor);
  app.put("/api/authors/:_id", authorController.updateAuthor);
  app.delete("/api/authors/:_id", authorController.deleteAuthor);
};
