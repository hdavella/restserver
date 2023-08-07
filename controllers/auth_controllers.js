const {response} = require('express');

const login =  (req, res = response) => {

    const {password, email} = req.body;

    try {
        res.json({
            msg:"login ok"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:"Error, hable con el administrador"
        });
        
    }
}

module.exports = login;