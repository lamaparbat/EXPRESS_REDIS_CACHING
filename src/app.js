require("dotenv").config();

const cors = require('cors');
const express = require('express');
const userRoutes = require('../src/module/users/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Hi from lamaDev!");
});

app.use([userRoutes]);

app.listen(8888, () => {
    console.log("Listening on port 8888.");
});