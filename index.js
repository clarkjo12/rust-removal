const Logger = require("./logger");

const logger = new Logger();

logger.on("message", data => console.log("called Listeners: ", data));

logger.log("Hello World");
