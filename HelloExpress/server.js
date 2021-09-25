const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "hi" });
});

app.get("/api/object", (req, res) => {
  const obj = {
    a: 1,
    b: 2,
  };
  res.json(obj);
});

app.listen(port, () => console.log("listening on port", port));
