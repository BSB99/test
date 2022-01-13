const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, (req, res) => {
  console.log("서버가동");
});
