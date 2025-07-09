import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//让 body‑parser 把 application/x‑www‑form‑urlencoded 格式的请求体 解析成 req.body 对象，方便我们使用。”
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
