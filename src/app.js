const express = require("express");
const pickNeighborhood = require("./pick-neighborhood");

const app = express();

app.get("", (req, res) => {
    res.send(pickNeighborhood());
});

app.listen("3000", () => {
    console.log("Server is up at http://localhost:3000/");
});
