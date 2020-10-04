const pickNeighborhood = require("./pick-neighborhood");

const neighborhood = pickNeighborhood();

console.log("Section:", neighborhood.section);
console.log("Neighborhood:", neighborhood.neighborhood);
console.log("Google Maps Link (may not work):", neighborhood.mapsUrl);
