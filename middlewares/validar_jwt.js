
const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validarJwt = (req = request, res = response, next) => {


    const token = req.header('x-token');
    console.log(token);

    next();

}

module.exports={
    validarJwt
}