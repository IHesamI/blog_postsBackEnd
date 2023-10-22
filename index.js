const fs = require("fs");
const express = require("express");
const app = express();
const port = 1234;
app.get("/", (req, res) => {
  // response goes here
    res.send(JSON.stringify(dataBase))
});

app.listen(port, () => {
  console.log("listen to port 1234");
});

const db = "db.json";
function readDb() {
  try {
    const data = fs.readFileSync(db, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    return {};
  }
}
function writeDb(data) {
  try {
    const json = JSON.stringify(data, null, 2);
    fs.writeFileSync(db, json, "utf-8");
  } catch (e) {
    console.error(e);
  }
}
const dataBase = readDb();
