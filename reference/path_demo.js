const path = require("path");

//Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File Extention
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Join
console.log(path.join(__dirname, "test", "hello.html"));