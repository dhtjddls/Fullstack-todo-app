const express = require("express");
const app = express();
const PORT = 8008;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hi");
});
