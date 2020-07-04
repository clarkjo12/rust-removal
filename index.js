const http = require("http");
const path = require("path");
const fs = require("fs");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const server = http.createServer((req, res) => {});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server running on port + ${PORT}"));
