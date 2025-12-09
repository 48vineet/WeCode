const express = require("express");
const env = require("./lib/env");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Api is up and running " });
});

app.listen(env.PORT, () => {
  console.log("app is hosted on port no", env.PORT);
});
