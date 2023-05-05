const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");

class App {
  constructor() {
    this.app = express();
    this.#initMiddleware();
  }
  #initMiddleware() {
    console.log("init");
    this.app.use([
      cors(),
      compression(),
      express.urlencoded({ extended: false }),
      express.json(),
      bodyParser.json(),
    ]);
  }
}
const { app } = new App();
module.export = app;
