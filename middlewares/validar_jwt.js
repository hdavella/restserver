
const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const Usuario = require('../models/usuario');

const validarJwt = async (req = request, res = response, next) => {


    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg: "no hay token en la petición"
        });
    }

    try {

        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const userAuthenticated = await Usuario.findById(uid);

        if(  !userAuthenticated || !userAuthenticated.status){
            return res.status(401).json({
                msg: "invalid operation"
            });
        };
        req.userAuthenticated = userAuthenticated;

        console.log(uid);
        //req.uid = uid;
        
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "error de token"
        });
        
    }
    //console.log(token);

 }

module.exports={
    validarJwt
}