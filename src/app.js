const pickNeighborhood = require("./pick-neighborhood");

const path = require("path");

const express = require("express");
const hbs = require("hbs");

const app = express();

const viewsPath = path.join(__dirname, "./views");
app.set("view engine", "hbs");
app.set("views", viewsPath);


app.get("", (req, res) => {
    const {section, neighborhood, mapsUrl} = pickNeighborhood()
    // res.send();
    res.render("index", {
        section,
        neighborhood,
        mapsUrl
    })
});

app.listen("3000", () => {
    console.log("Server is up at http://localhost:3000/");
});
