const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const ususariosGet = (req, res = response) => {
    const {q, id, nombre, list} = req.query;
    res.json({
        msg: "get API - Controlador",
        q,
        id,
        nombre,
        list
    });
}

const usuariosPost = async (req, res = response) => {

    

    const {name, email, password, rol} = req.body;
    const usuario = new Usuario({name, email, password, rol});

    const mailExist = await Usuario.findOne({email});
    if(mailExist){
        return res.status(400).json({
            msg:"El email ya existe"
        });
    }

    const salt= bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();

    res.json({
        msg: "post API - Controlador",
        usuario
    });
}

const usuariosPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg: "put API - Controlador",
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - Controlador",
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - Controlador",
    });
}

module.exports = {
    ususariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}