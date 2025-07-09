import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var brandName = "";


app.use(express.urlencoded({extended:true}));

function brandNameGenerator(req, res, next) {
  console.log(req.body);
  brandName = req.body['street'] + req.body['pet'];
  next();
}

app.use(brandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name is: </h1><p>${brandName}</p>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
