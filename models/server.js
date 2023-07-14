const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.middlwares();
    this.routes();
    this.port = process.env.PORT;
  }

  middlwares() {
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        msg: "get",
      });
    });

    this.app.put("/api", (req, res) => {
      res.json({
        msg: "put",
      });
    });

    this.app.post("/api", (req, res) => {
      res.json({
        msg: "post",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        msg: "delete",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server corriendo en " + this.port);
    });
  }
}

module.exports = Server;
