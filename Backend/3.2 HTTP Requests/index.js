import express from "express";
const app = express();
const port = 3000;

// root = home page = "/" = localhost:3000 = /localhost:3000
app.get("/", (req, res) => {
    // console.log(req);
    res.send("<h1>Home Page</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>My phone number is 1234566</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About</h1><p>My Name is Susan</p>")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});


