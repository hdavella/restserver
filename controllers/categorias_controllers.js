const {response} = require('express');

const categoriaCrearPost = async (req, res = response) => {

    const {id_prueba} = req.body;
    console.log(id_prueba);
    res.json({
        msg:"ok",
        id_prueba
    });
}

module.exports = {
    categoriaCrearPost
}