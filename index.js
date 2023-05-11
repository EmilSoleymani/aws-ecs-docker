const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to express app!");
});

app.get("/info", (req, res) => {
    res.send("Hey this is /info endpoint");
});

app.listen(3000, () => {
    console.log("[SERVER] > Listening on port 3000")
});