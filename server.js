const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 8080;

const app = express();

app.use('/', express.static(__dirname));

//Server Setup
const server = http.createServer(app);
server.listen(PORT);
