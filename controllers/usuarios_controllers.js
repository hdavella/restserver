const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const ususariosGet = async (req, res = response) => {

    //const usuarios = await Usuario.find().limit(Number(req.params.cant));

    const {limit=""} = req.query;
    const usuarios = await Usuario.find().limit(Number(limit));    

    res.json({
        usuarios
    });
}

const usuariosPost = async (req, res = response) => {

    const {name, email, password, rol} = req.body;
    const usuario = new Usuario({name, email, password, rol});

    const salt= bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosPut = async (req, res = response) => {
    const {id} = req.params;
    const {password, google, ...rest} = req.body;

    if(password){
        const salt= bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const usuarioUpdate = await Usuario.findByIdAndUpdate(id, rest, {new: true});

    res.json({
        usuarioUpdate
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