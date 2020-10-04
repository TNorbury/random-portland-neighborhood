# (Random) Portland Neighborhood Picker

Ever been sitting around, bored, trying to figure out where in Portland to go? Well do I have the script for you! This simple lil' node script (that can be ran as a server to send requests to), or as a stand-alone node script, will do just that for you

## How To Use

Regardless of which way your running, you'll want to start off with the good ol `npm install`

### Server

The server is run like so: `node app.js`
You can then send a GET request to `localhost:3000/`, which'll return JSON with the following fields: section, neighborhood, and mapsUrl.

### Stand-alone

This is much simpler to run, just do `node app-no-server.js`, and it'll print out the same information as would be returned by the server.
