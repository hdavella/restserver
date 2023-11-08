const {response} = require('express');
const Categoria = require('../models/categoria')

const categoriaCrearPost = async (req, res = response) => {

    const name = req.body.name.toUpperCase();

    const categoriaDB = await Categoria.findOne({name});

    if( categoriaDB){
        return res.status(400).json({
            msg: `La categoria ${name} ya existe`
        })
    }

    const data = {
        name,
        user: req.userAuthenticated._id
    }

    const categoria = new Categoria(data);
    await categoria.save();

    res.status(201).json({
        categoria
    });
}

module.exports = {
    categoriaCrearPost
}