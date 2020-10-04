const fs = require("fs");
const rand = require("random-number");

const pickNeighborhood = () => {
    const neighborhoods = JSON.parse(
        fs.readFileSync("src/data/neighborhoods.json").toString()
    );

    const sections = Object.keys(neighborhoods);

    // Pick a section of the city at random
    var num = rand({ min: 0, max: sections.length - 1, integer: true });
    const section = sections[num];

    // then pick on of the neighborhoods in that section
    num = rand({
        min: 0,
        max: neighborhoods[section].length - 1,
        integer: true,
    });
    const neighborhood = neighborhoods[section][num];

    // Format the neighborhood name, so that it's safe to use in a google maps URL
    const neighborhoodNameSafe = neighborhood.replace(" ", "+");
    const mapsUrl = `https://www.google.com/maps/place/${neighborhoodNameSafe},+Portland,+OR`;

    return { section, neighborhood, mapsUrl };
};

module.exports = pickNeighborhood;
