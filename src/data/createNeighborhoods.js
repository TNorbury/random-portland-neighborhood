const fs = require("fs");

// This script really only needed to be ran once, but I just made it so that 
// the whole putting neighborhoods into sections and then into JSON would be easier lol

const sections = ["NW", "SW", "N", "NE", "SE"];

var neighborhoodsObject = {};

sections.forEach((section) => {
    // console.log("\n");
    neighborhoods = fs.readFileSync(`./neighborhoods-raw/${section}`).toString().split("\n");
    // console.log(section);

    neighborhoodsObject[section] = [];
    
    neighborhoods.forEach((neighborhood) => {
        // console.log(neighborhood);
        neighborhoodsObject[section].push(neighborhood);
    })

})

console.log(neighborhoodsObject);

fs.writeFileSync("neighborhoods.json", JSON.stringify(neighborhoodsObject));


