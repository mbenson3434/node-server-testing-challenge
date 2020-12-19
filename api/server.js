const express = require("express");
const smurfsRouter = require("../api/smurfs/smurfs-router");
const db = require("../data/dbConfig");

const server = express();

server.use(express.json());
server.use("/smurfs", smurfsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's get some smurfs!</h2>`);
  });

module.exports = server;