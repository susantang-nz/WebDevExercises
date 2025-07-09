import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// this happens before the route handler
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("ni hao");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
