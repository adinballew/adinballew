const fs = require("fs");

let data = fs.readFileSync("./skills.json");
const skills = JSON.parse(data.toString());

module.exports = skills;