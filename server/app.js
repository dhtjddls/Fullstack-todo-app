const express = require("express");
const app = express();
const PORT = 8008;
const todoRouter = require("./routes/todo");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/", todoRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
