import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // change time here: "2025-07-13T10:57:56.557Z"
    const today = new Date();
    console.log(today)
    const dayOfWeek = today.getDay();
    console.log(`Today is ${dayOfWeek}`);
    let dayWords = "";
    let toDoWords = "";

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        dayWords = "the weekend";
        toDoWords = "have fun";
    } else {
        dayWords = "a weekday";
        toDoWords = "work hard";
    };

    res.render("index.ejs",{dayWords: dayWords, toDoWords: toDoWords});
})

app.listen(port, ()=> {
    console.log(`Listening on localhost port ${port}`);
})
