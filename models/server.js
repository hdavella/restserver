const express = require("express");
const cors = require("cors");
const { dbConn } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connDb();
    this.middlwares();
    this.routes();
    
  }

  async connDb(){
    await dbConn();
  }

  middlwares() {
    this.app.use(express.static("public"));

    this.app.use(express.json()); //Lectura y parseo del BODY

    this.app.use(cors());
  }

  routes() {
    this.app.use('/api/auth', require('../routes/auth_routes'));
    this.app.use('/api/usuarios', require('../routes/usuarios_routes'));
    this.app.use('/api/categorias', require('../routes/categorias_routes'));
    
  }
 

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server corriendo en " + this.port);
    });
  }
}

module.exports = Server;
