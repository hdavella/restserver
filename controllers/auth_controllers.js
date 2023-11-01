const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { jwtGenerate } = require('../helpers/jwt_generator');

const login =  async (req, res = response) => {

    const {password, email} = req.body;

    try {

        const {email, password} = req.body;

        const user = await Usuario.findOne({email});
        if(!user){
            return res.status(400).json({
                msg: "User/Pass incorrectos"
            });
        }

        if(!user.status){
            return res.status(400).json({
                msg: "User/Pass incorrectos"
            });
        }

        const isMatchPass = bcryptjs.compareSync(password, user.password);
        if(!isMatchPass){
            return res.status(400).json({
                msg: "User/Pass incorrectos"
            });
        }

        const jsonWebToken = await jwtGenerate(user.id);

        res.json({
            user,
            jsonWebToken
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:"Error, hable con el administrador(0xA)"
        });
        
    }
}

const googleSignIn = async (req, res = response) =>{

    const {id_token} = req.body;

    res.json({
        msg:"ok",
        id_token
    });

}

module.exports = {
    login,
    googleSignIn
};