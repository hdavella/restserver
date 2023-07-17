const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.middlwares();
    this.routes();
    this.port = process.env.PORT;
  }

  middlwares() {
    this.app.use(express.static("public"));

    this.app.use(express.json()); //Lectura y parseop del BODY

    this.app.use(cors());
  }

  routes() {
    this.app.use('/api/usuarios', require('../routes/usuarios'));
  }
 

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server corriendo en " + this.port);
    });
  }
}

module.exports = Server;
