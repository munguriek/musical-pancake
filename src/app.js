const express = require("express");
const app = express();

app.get("/test", (_req, res) => {
    res.status(200).send("Bootcamp 14 CI")
})
module.exports = app;