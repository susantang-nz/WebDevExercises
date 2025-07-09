//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const CORRECT_PASS = "ILoveProgramming";

var userIsAuthorized = false;

app.use(express.urlencoded( {extended: true} ));

function passwordCheck(req, res, next) {
    const userInput = req.body["password"];
    if (userInput === CORRECT_PASS) {
        userIsAuthorized = true;
    }
    next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if (userIsAuthorized) {
        res.sendFile(__dirname +"/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
        //Alternatively res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

