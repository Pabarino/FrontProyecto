//install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static('./dist/front-proyect'));

// Send all requests to index.html
app.get("/*", function (req, res) {
    res.sendFile("index.html", { root: "dist/front-proyect"});
  });

// default Heroku port
app.listen(process.env.PORT || 5000);
