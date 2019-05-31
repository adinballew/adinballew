const fs = require("fs");

let data = fs.readFileSync("./credentials.json");
const credentials = JSON.parse(data.toString());

module.exports = credentials;
